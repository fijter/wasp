// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package erc20

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

type ApproveCall struct {
	Func   *wasmlib.ScFunc
	Params MutableApproveParams
}

type InitCall struct {
	Func   *wasmlib.ScInitFunc
	Params MutableInitParams
}

type TransferCall struct {
	Func   *wasmlib.ScFunc
	Params MutableTransferParams
}

type TransferFromCall struct {
	Func   *wasmlib.ScFunc
	Params MutableTransferFromParams
}

type AllowanceCall struct {
	Func    *wasmlib.ScView
	Params  MutableAllowanceParams
	Results ImmutableAllowanceResults
}

type BalanceOfCall struct {
	Func    *wasmlib.ScView
	Params  MutableBalanceOfParams
	Results ImmutableBalanceOfResults
}

type TotalSupplyCall struct {
	Func    *wasmlib.ScView
	Results ImmutableTotalSupplyResults
}

type Funcs struct{}

var ScFuncs Funcs

func (sc Funcs) Approve(ctx wasmlib.ScFuncCallContext) *ApproveCall {
	f := &ApproveCall{Func: wasmlib.NewScFunc(HScName, HFuncApprove)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {
	f := &InitCall{Func: wasmlib.NewScInitFunc(HScName, HFuncInit, ctx, keyMap[:], idxMap[:])}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) Transfer(ctx wasmlib.ScFuncCallContext) *TransferCall {
	f := &TransferCall{Func: wasmlib.NewScFunc(HScName, HFuncTransfer)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) TransferFrom(ctx wasmlib.ScFuncCallContext) *TransferFromCall {
	f := &TransferFromCall{Func: wasmlib.NewScFunc(HScName, HFuncTransferFrom)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) Allowance(ctx wasmlib.ScViewCallContext) *AllowanceCall {
	f := &AllowanceCall{Func: wasmlib.NewScView(HScName, HViewAllowance)}
	f.Func.SetPtrs(&f.Params.id, &f.Results.id)
	return f
}

func (sc Funcs) BalanceOf(ctx wasmlib.ScViewCallContext) *BalanceOfCall {
	f := &BalanceOfCall{Func: wasmlib.NewScView(HScName, HViewBalanceOf)}
	f.Func.SetPtrs(&f.Params.id, &f.Results.id)
	return f
}

func (sc Funcs) TotalSupply(ctx wasmlib.ScViewCallContext) *TotalSupplyCall {
	f := &TotalSupplyCall{Func: wasmlib.NewScView(HScName, HViewTotalSupply)}
	f.Func.SetPtrs(nil, &f.Results.id)
	return f
}
