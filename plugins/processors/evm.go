//go:build !noevm
// +build !noevm

package processors

import "github.com/iotaledger/wasp/contracts/native/evmchain"

func init() {
	nativeContracts = append(nativeContracts, evmchain.Processor)
}
