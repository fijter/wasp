// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

package wasmproc

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

type ScMaps struct {
	ScSandboxObject
}

func NewScMaps(vm *WasmProcessor) *ScMaps {
	a := &ScMaps{}
	a.vm = vm
	return a
}

func (a *ScMaps) GetObjectID(keyID, typeID int32) int32 {
	return GetArrayObjectID(a, keyID, typeID, func() WaspObject {
		return NewScDict(a.vm)
	})
}