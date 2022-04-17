package sbtests

import (
	"testing"

	"github.com/iotaledger/wasp/packages/iscp"
	"github.com/iotaledger/wasp/packages/solo"
	"github.com/iotaledger/wasp/packages/vm/core/testcore_stardust/sbtests/sbtestsc"
	"github.com/stretchr/testify/require"
)

func TestMainCallsFromFullEP(t *testing.T) { run2(t, testMainCallsFromFullEP) }
func testMainCallsFromFullEP(t *testing.T, w bool) {
	_, chain := setupChain(t, nil)

	user, _, userAgentID := setupDeployer(t, chain)

	setupTestSandboxSC(t, chain, user, w)

	req := solo.NewCallParams(ScName, sbtestsc.FuncCheckContextFromFullEP.Name,
		sbtestsc.ParamChainID, chain.ChainID,
		sbtestsc.ParamAgentID, iscp.NewAgentID(chain.ChainID.AsAddress(), HScName),
		sbtestsc.ParamCaller, userAgentID,
		sbtestsc.ParamChainOwnerID, chain.OriginatorAgentID,
		sbtestsc.ParamContractCreator, userAgentID).
		WithGasBudget(120_000)
	_, err := chain.PostRequestSync(req, user)
	require.NoError(t, err)
}

func TestMainCallsFromViewEP(t *testing.T) { run2(t, testMainCallsFromViewEP) }
func testMainCallsFromViewEP(t *testing.T, w bool) {
	_, chain := setupChain(t, nil)

	user, _, userAgentID := setupDeployer(t, chain)

	setupTestSandboxSC(t, chain, user, w)

	_, err := chain.CallView(ScName, sbtestsc.FuncCheckContextFromViewEP.Name,
		sbtestsc.ParamChainID, chain.ChainID,
		sbtestsc.ParamAgentID, iscp.NewAgentID(chain.ChainID.AsAddress(), HScName),
		sbtestsc.ParamChainOwnerID, chain.OriginatorAgentID,
		sbtestsc.ParamContractCreator, userAgentID,
	)
	require.NoError(t, err)
}