// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package coregovernance

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

type ArrayOfImmutableBytes struct {
	objID int32
}

func (a ArrayOfImmutableBytes) Length() int32 {
	return wasmlib.GetLength(a.objID)
}

func (a ArrayOfImmutableBytes) GetBytes(index int32) wasmlib.ScImmutableBytes {
	return wasmlib.NewScImmutableBytes(a.objID, wasmlib.Key32(index))
}

type ImmutableGetAllowedStateControllerAddressesResults struct {
	id int32
}

func (s ImmutableGetAllowedStateControllerAddressesResults) AllowedStateControllerAddresses() ArrayOfImmutableBytes {
	arrID := wasmlib.GetObjectID(s.id, ResultAllowedStateControllerAddresses.KeyID(), wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)
	return ArrayOfImmutableBytes{objID: arrID}
}

type ArrayOfMutableBytes struct {
	objID int32
}

func (a ArrayOfMutableBytes) Clear() {
	wasmlib.Clear(a.objID)
}

func (a ArrayOfMutableBytes) Length() int32 {
	return wasmlib.GetLength(a.objID)
}

func (a ArrayOfMutableBytes) GetBytes(index int32) wasmlib.ScMutableBytes {
	return wasmlib.NewScMutableBytes(a.objID, wasmlib.Key32(index))
}

type MutableGetAllowedStateControllerAddressesResults struct {
	id int32
}

func (s MutableGetAllowedStateControllerAddressesResults) AllowedStateControllerAddresses() ArrayOfMutableBytes {
	arrID := wasmlib.GetObjectID(s.id, ResultAllowedStateControllerAddresses.KeyID(), wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)
	return ArrayOfMutableBytes{objID: arrID}
}

type ImmutableGetChainInfoResults struct {
	id int32
}

func (s ImmutableGetChainInfoResults) ChainID() wasmlib.ScImmutableChainID {
	return wasmlib.NewScImmutableChainID(s.id, ResultChainID.KeyID())
}

func (s ImmutableGetChainInfoResults) ChainOwnerID() wasmlib.ScImmutableAgentID {
	return wasmlib.NewScImmutableAgentID(s.id, ResultChainOwnerID.KeyID())
}

func (s ImmutableGetChainInfoResults) DefaultOwnerFee() wasmlib.ScImmutableInt64 {
	return wasmlib.NewScImmutableInt64(s.id, ResultDefaultOwnerFee.KeyID())
}

func (s ImmutableGetChainInfoResults) DefaultValidatorFee() wasmlib.ScImmutableInt64 {
	return wasmlib.NewScImmutableInt64(s.id, ResultDefaultValidatorFee.KeyID())
}

func (s ImmutableGetChainInfoResults) Description() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, ResultDescription.KeyID())
}

func (s ImmutableGetChainInfoResults) FeeColor() wasmlib.ScImmutableColor {
	return wasmlib.NewScImmutableColor(s.id, ResultFeeColor.KeyID())
}

func (s ImmutableGetChainInfoResults) MaxBlobSize() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, ResultMaxBlobSize.KeyID())
}

func (s ImmutableGetChainInfoResults) MaxEventSize() wasmlib.ScImmutableInt16 {
	return wasmlib.NewScImmutableInt16(s.id, ResultMaxEventSize.KeyID())
}

func (s ImmutableGetChainInfoResults) MaxEventsPerReq() wasmlib.ScImmutableInt16 {
	return wasmlib.NewScImmutableInt16(s.id, ResultMaxEventsPerReq.KeyID())
}

type MutableGetChainInfoResults struct {
	id int32
}

func (s MutableGetChainInfoResults) ChainID() wasmlib.ScMutableChainID {
	return wasmlib.NewScMutableChainID(s.id, ResultChainID.KeyID())
}

func (s MutableGetChainInfoResults) ChainOwnerID() wasmlib.ScMutableAgentID {
	return wasmlib.NewScMutableAgentID(s.id, ResultChainOwnerID.KeyID())
}

func (s MutableGetChainInfoResults) DefaultOwnerFee() wasmlib.ScMutableInt64 {
	return wasmlib.NewScMutableInt64(s.id, ResultDefaultOwnerFee.KeyID())
}

func (s MutableGetChainInfoResults) DefaultValidatorFee() wasmlib.ScMutableInt64 {
	return wasmlib.NewScMutableInt64(s.id, ResultDefaultValidatorFee.KeyID())
}

func (s MutableGetChainInfoResults) Description() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, ResultDescription.KeyID())
}

func (s MutableGetChainInfoResults) FeeColor() wasmlib.ScMutableColor {
	return wasmlib.NewScMutableColor(s.id, ResultFeeColor.KeyID())
}

func (s MutableGetChainInfoResults) MaxBlobSize() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, ResultMaxBlobSize.KeyID())
}

func (s MutableGetChainInfoResults) MaxEventSize() wasmlib.ScMutableInt16 {
	return wasmlib.NewScMutableInt16(s.id, ResultMaxEventSize.KeyID())
}

func (s MutableGetChainInfoResults) MaxEventsPerReq() wasmlib.ScMutableInt16 {
	return wasmlib.NewScMutableInt16(s.id, ResultMaxEventsPerReq.KeyID())
}

type ImmutableGetFeeInfoResults struct {
	id int32
}

func (s ImmutableGetFeeInfoResults) FeeColor() wasmlib.ScImmutableColor {
	return wasmlib.NewScImmutableColor(s.id, ResultFeeColor.KeyID())
}

func (s ImmutableGetFeeInfoResults) OwnerFee() wasmlib.ScImmutableInt64 {
	return wasmlib.NewScImmutableInt64(s.id, ResultOwnerFee.KeyID())
}

func (s ImmutableGetFeeInfoResults) ValidatorFee() wasmlib.ScImmutableInt64 {
	return wasmlib.NewScImmutableInt64(s.id, ResultValidatorFee.KeyID())
}

type MutableGetFeeInfoResults struct {
	id int32
}

func (s MutableGetFeeInfoResults) FeeColor() wasmlib.ScMutableColor {
	return wasmlib.NewScMutableColor(s.id, ResultFeeColor.KeyID())
}

func (s MutableGetFeeInfoResults) OwnerFee() wasmlib.ScMutableInt64 {
	return wasmlib.NewScMutableInt64(s.id, ResultOwnerFee.KeyID())
}

func (s MutableGetFeeInfoResults) ValidatorFee() wasmlib.ScMutableInt64 {
	return wasmlib.NewScMutableInt64(s.id, ResultValidatorFee.KeyID())
}

type ImmutableGetMaxBlobSizeResults struct {
	id int32
}

func (s ImmutableGetMaxBlobSizeResults) MaxBlobSize() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, ResultMaxBlobSize.KeyID())
}

type MutableGetMaxBlobSizeResults struct {
	id int32
}

func (s MutableGetMaxBlobSizeResults) MaxBlobSize() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, ResultMaxBlobSize.KeyID())
}
