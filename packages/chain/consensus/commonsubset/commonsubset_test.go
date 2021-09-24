// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

package commonsubset_test

import (
	"bytes"
	"fmt"
	"sync"
	"testing"
	"time"

	"github.com/iotaledger/hive.go/logger"
	"github.com/iotaledger/wasp/packages/chain/consensus/commonsubset"
	"github.com/iotaledger/wasp/packages/peering"
	"github.com/iotaledger/wasp/packages/tcrypto"
	"github.com/iotaledger/wasp/packages/testutil"
	"github.com/iotaledger/wasp/packages/testutil/testlogger"
	"github.com/iotaledger/wasp/packages/testutil/testpeers"
	"github.com/stretchr/testify/require"
)

func TestBasic(t *testing.T) {
	t.Run("N=4/T=3/allRandom=true", func(tt *testing.T) { testBasic(tt, 4, 3, true) })
	t.Run("N=4/T=3/allRandom=false", func(tt *testing.T) { testBasic(tt, 4, 3, false) })
	if !testing.Short() {
		t.Run("N=10/T=7/allRandom=true", func(tt *testing.T) { testBasic(tt, 10, 7, true) })
		t.Run("N=10/T=7/allRandom=false", func(tt *testing.T) { testBasic(tt, 10, 7, false) })
		t.Run("N=40/T=27/allRandom=true", func(tt *testing.T) {
			testutil.SkipHeavy(tt)
			testBasic(tt, 40, 27, true)
		})
		t.Run("N=40/T=27/allRandom=false", func(tt *testing.T) {
			testutil.SkipHeavy(tt)
			testBasic(tt, 40, 27, false)
		})
	}
}

func testBasic(t *testing.T, peerCount, threshold uint16, allRandom bool) {
	log := testlogger.NewLogger(t)
	defer log.Sync()
	peeringID := peering.RandomPeeringID()
	peerNetIDs, peerIdentities := testpeers.SetupKeys(peerCount)
	networkLog := testlogger.WithLevel(log.Named("Network"), logger.LevelInfo, false)
	networkProviders, networkCloser := testpeers.SetupNet(
		peerNetIDs,
		peerIdentities,
		testutil.NewPeeringNetReliable(networkLog),
		networkLog,
	)
	t.Logf("Network created.")

	dkAddress, dkRegistries := testpeers.SetupDkgPregenerated(t, threshold, peerNetIDs, tcrypto.DefaultSuite())
	dkShares := make([]*tcrypto.DKShare, len(peerNetIDs))
	for i := range dkShares {
		dkShare, err := dkRegistries[i].LoadDKShare(dkAddress)
		require.NoError(t, err)
		dkShares[i] = dkShare
	}

	acsPeers := make([]*commonsubset.CommonSubset, peerCount)
	for i := range acsPeers {
		ii := i // Use a local copy in the callback.
		networkProviders[ii].Attach(&peeringID, func(recv *peering.RecvEvent) {
			if acsPeers[ii] != nil {
				require.True(t, acsPeers[ii].TryHandleMessage(recv))
			}
		})
	}
	for a := range acsPeers {
		group, err := networkProviders[a].PeerGroup(peerNetIDs)
		require.Nil(t, err)
		acsLog := testlogger.WithLevel(log.Named(fmt.Sprintf("ACS[%02d]", a)), logger.LevelInfo, false)
		acsPeers[a], err = commonsubset.NewCommonSubset(0, 0, peeringID, group, dkShares[a], allRandom, nil, acsLog)
		require.Nil(t, err)
	}
	t.Logf("ACS Nodes created.")
	for a := range acsPeers {
		input := []byte(peerNetIDs[a])
		acsPeers[a].Input(input)
	}
	t.Logf("ACS Inputs sent.")

	for a := range acsPeers {
		out := <-acsPeers[a].OutputCh()
		t.Logf("ACS[%v] Output received: %+v", a, out)
	}
	t.Logf("ACS Nodes all decided.")

	for a := range acsPeers {
		acsPeers[a].Close()
	}
	t.Logf("ACS Nodes closed.")
	require.NoError(t, networkCloser.Close())
}

func TestRandomized(t *testing.T) {
	log := testlogger.NewLogger(t)
	defer log.Sync()
	var peerCount uint16 = 10
	var threshold uint16 = 7
	peeringID := peering.RandomPeeringID()
	peerNetIDs, peerIdentities := testpeers.SetupKeys(peerCount)
	netLogger := testlogger.WithLevel(log.Named("Network"), logger.LevelInfo, false)
	netBehavior := testutil.NewPeeringNetUnreliable(80, 20, 10*time.Millisecond, 100*time.Millisecond, netLogger)
	networkProviders, networkCloser := testpeers.SetupNet(peerNetIDs, peerIdentities, netBehavior, netLogger)
	t.Logf("Network created.")

	dkAddress, dkRegistries := testpeers.SetupDkgPregenerated(t, threshold, peerNetIDs, tcrypto.DefaultSuite())
	dkShares := make([]*tcrypto.DKShare, len(peerNetIDs))
	for i := range dkShares {
		dkShare, err := dkRegistries[i].LoadDKShare(dkAddress)
		require.NoError(t, err)
		dkShares[i] = dkShare
	}

	acsPeers := make([]*commonsubset.CommonSubset, peerCount)
	for i := range acsPeers {
		ii := i // Use a local copy in the callback.
		networkProviders[ii].Attach(&peeringID, func(recv *peering.RecvEvent) {
			if acsPeers[ii] != nil {
				require.True(t, acsPeers[ii].TryHandleMessage(recv))
			}
		})
	}
	for a := range acsPeers {
		group, err := networkProviders[a].PeerGroup(peerNetIDs)
		require.Nil(t, err)
		acsLog := testlogger.WithLevel(log.Named(fmt.Sprintf("ACS[%02d]", a)), logger.LevelInfo, false)
		acsPeers[a], err = commonsubset.NewCommonSubset(0, 0, peeringID, group, dkShares[a], true, nil, acsLog)
		require.Nil(t, err)
	}
	t.Logf("ACS Nodes created.")
	for a := range acsPeers {
		input := []byte(peerNetIDs[a])
		acsPeers[a].Input(input)
	}
	t.Logf("ACS Inputs sent.")

	//
	// Async wait here is for debugging only.
	output := make([]map[uint16][]byte, peerCount)
	outputWG := &sync.WaitGroup{}
	outputWG.Add(int(peerCount))
	for a := range acsPeers {
		aa := a
		go func() {
			outCh := acsPeers[aa].OutputCh()
			timerCh := time.After(15 * time.Second)
			for {
				select {
				case output[aa] = <-outCh:
					t.Logf("ACS[%v] Output received: %+v", aa, output[aa])
					outputWG.Done()
					return
				case <-timerCh:
					t.Logf("ACS[%v] Info: %+v", aa, acsPeers[aa])
					timerCh = time.After(15 * time.Second)
				}
			}
		}()
	}
	outputWG.Wait()
	t.Logf("ACS Nodes all decided.")
	for a := range acsPeers {
		acsPeers[a].Close()
	}
	t.Logf("ACS Nodes closed.")
	for a := range acsPeers {
		require.Equal(t, len(output[0]), len(output[a]))
		for i := range output[a] {
			require.Equal(t, 0, bytes.Compare(output[0][i], output[a][i]))
		}
	}
	require.NoError(t, networkCloser.Close())
}

func TestCoordinator(t *testing.T) {
	t.Run("N=1/T=1", func(tt *testing.T) { testCoordinator(tt, 1, 1) })
	t.Run("N=4/T=3", func(tt *testing.T) { testCoordinator(tt, 4, 3) })
	t.Run("N=10/T=7", func(tt *testing.T) { testCoordinator(tt, 10, 7) })
}

func testCoordinator(t *testing.T, peerCount, threshold uint16) {
	log := testlogger.NewLogger(t)
	defer log.Sync()
	peeringID := peering.RandomPeeringID()
	peerNetIDs, peerIdentities := testpeers.SetupKeys(peerCount)
	networkLog := testlogger.WithLevel(log.Named("Network"), logger.LevelInfo, false)
	networkProviders, networkCloser := testpeers.SetupNet(
		peerNetIDs, peerIdentities, testutil.NewPeeringNetReliable(networkLog),
		networkLog,
	)
	t.Logf("Network created.")

	dkAddress, dkRegistries := testpeers.SetupDkgPregenerated(t, threshold, peerNetIDs, tcrypto.DefaultSuite())
	dkShares := make([]*tcrypto.DKShare, len(peerNetIDs))
	for i := range dkShares {
		dkShare, err := dkRegistries[i].LoadDKShare(dkAddress)
		require.NoError(t, err)
		dkShares[i] = dkShare
	}

	acsCoords := make([]*commonsubset.CommonSubsetCoordinator, peerCount)
	for i := range acsCoords {
		ii := i // Use a local copy in the callback.
		group, err := networkProviders[i].PeerGroup(peerNetIDs)
		require.Nil(t, err)
		acsLog := testlogger.WithLevel(log.Named(fmt.Sprintf("CSC[%02d]", i)), logger.LevelInfo, false)
		acsCoords[i] = commonsubset.NewCommonSubsetCoordinator(peeringID, networkProviders[i], group, dkShares[i], acsLog)
		networkProviders[ii].Attach(&peeringID, func(recv *peering.RecvEvent) {
			if acsCoords[ii] != nil {
				require.True(t, acsCoords[ii].TryHandleMessage(recv))
			}
		})
	}
	t.Logf("ACS Nodes created.")

	sessionID := uint64(21695645984168)
	results := make([][][]byte, peerCount)
	resultsWG := &sync.WaitGroup{}
	resultsWG.Add(int(peerCount))
	for i := range acsCoords {
		ii := i
		input := []byte(peerNetIDs[i])
		acsCoords[i].RunACSConsensus(input, sessionID, 1, func(sid uint64, res [][]byte) {
			results[ii] = res
			resultsWG.Done()
		})
	}
	resultsWG.Wait()
	t.Logf("ACS Nodes all decided.")
	for i := range results {
		for j := range results[i] {
			require.True(t, bytes.Equal(results[i][j], results[0][j]))
		}
	}
	for i := range acsCoords {
		acsCoords[i].Close()
	}
	t.Logf("ACS Nodes closed.")
	require.NoError(t, networkCloser.Close())
}

func TestRandomizedWithCC(t *testing.T) {
	t.Run("N=1/T=1", func(tt *testing.T) { testRandomizedWithCC(tt, 1, 1) })
	t.Run("N=4/T=3", func(tt *testing.T) { testRandomizedWithCC(tt, 4, 3) })
	t.Run("N=10/T=7", func(tt *testing.T) { testRandomizedWithCC(tt, 10, 7) })
}

func testRandomizedWithCC(t *testing.T, peerCount, threshold uint16) {
	log := testlogger.NewLogger(t)
	defer log.Sync()
	peeringID := peering.RandomPeeringID()
	peerNetIDs, peerIdentities := testpeers.SetupKeys(peerCount)
	networkLog := testlogger.WithLevel(log.Named("Network"), logger.LevelInfo, false)
	networkProviders, networkCloser := testpeers.SetupNet(
		peerNetIDs,
		peerIdentities,
		testutil.NewPeeringNetUnreliable(80, 20, 10*time.Millisecond, 100*time.Millisecond, networkLog),
		networkLog,
	)
	t.Logf("Network created.")
	logs := make([]*logger.Logger, peerCount)
	for i := range logs {
		logs[i] = testlogger.WithLevel(log.Named(fmt.Sprintf("CSC[%02d]", i)), logger.LevelInfo, false)
	}

	dkAddress, dkShares := testpeers.SetupDkgPregenerated(t, threshold, peerNetIDs, tcrypto.DefaultSuite())
	acsCoords := make([]*commonsubset.CommonSubsetCoordinator, peerCount)
	for i := range acsCoords {
		ii := i // Use a local copy in the callback.
		group, err := networkProviders[i].PeerGroup(peerNetIDs)
		require.Nil(t, err)
		dkShare, err := dkShares[i].LoadDKShare(dkAddress)
		require.Nil(t, err)
		acsCoords[i] = commonsubset.NewCommonSubsetCoordinator(peeringID, networkProviders[i], group, dkShare, logs[i])
		networkProviders[ii].Attach(&peeringID, func(recv *peering.RecvEvent) {
			if acsCoords[ii] != nil {
				acsCoords[ii].TryHandleMessage(recv)
			}
		})
	}
	t.Logf("ACS Nodes created.")

	sessionID := uint64(21695645984168)
	results := make([][][]byte, peerCount)
	resultsWG := &sync.WaitGroup{}
	resultsWG.Add(int(peerCount))
	for i := range acsCoords {
		ii := i
		input := []byte(peerNetIDs[i])
		acsCoords[i].RunACSConsensus(input, sessionID, 1, func(sid uint64, res [][]byte) {
			results[ii] = res
			resultsWG.Done()
		})
	}
	resultsWG.Wait()
	t.Logf("ACS Nodes all decided.")
	for i := range results {
		for j := range results[i] {
			require.True(t, bytes.Equal(results[i][j], results[0][j]))
		}
	}
	for i := range acsCoords {
		acsCoords[i].Close()
	}
	t.Logf("ACS Nodes closed.")
	require.NoError(t, networkCloser.Close())
}
