// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package coreblob

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

const (
	ScName        = "blob"
	ScDescription = "Core blob contract"
	HScName       = wasmlib.ScHname(0xfd91bc63)
)

const (
	ParamField = wasmlib.Key("field")
	ParamHash  = wasmlib.Key("hash")
)

const (
	ResultBytes = wasmlib.Key("bytes")
	ResultHash  = wasmlib.Key("hash")
)

const (
	FuncStoreBlob    = "storeBlob"
	ViewGetBlobField = "getBlobField"
	ViewGetBlobInfo  = "getBlobInfo"
	ViewListBlobs    = "listBlobs"
)

const (
	HFuncStoreBlob    = wasmlib.ScHname(0xddd4c281)
	HViewGetBlobField = wasmlib.ScHname(0x1f448130)
	HViewGetBlobInfo  = wasmlib.ScHname(0xfde4ab46)
	HViewListBlobs    = wasmlib.ScHname(0x62ca7990)
)
