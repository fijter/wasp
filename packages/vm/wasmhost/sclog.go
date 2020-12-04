// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

package wasmhost

import (
	"github.com/iotaledger/wasp/packages/kv/datatypes"
)

type ScLogs struct {
	MapObject
}

func (o *ScLogs) Exists(keyId int32) bool {
	_, ok := o.objects[keyId]
	return ok
}

func (o *ScLogs) GetObjectId(keyId int32, typeId int32) int32 {
	return GetMapObjectId(o, keyId, typeId, ObjFactories{
		keyId: func() WaspObject { return &ScLog{} },
	})
}

func (o *ScLogs) GetTypeId(keyId int32) int32 {
	return OBJTYPE_MAP_ARRAY
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

type ScLog struct {
	ArrayObject
	lines      *datatypes.MustTimestampedLog
	logEntry   *ScLogEntry
	logEntryId int32
}

func (a *ScLog) InitObj(id int32, keyId int32, owner *ModelObject) {
	a.ModelObject.InitObj(id, keyId, owner)
	key := a.vm.GetKey(keyId)
	a.name = "log." + string(key)
	a.lines = datatypes.NewMustTimestampedLog(a.vm.State(), key)
	a.logEntry = &ScLogEntry{lines: a.lines}
	a.logEntryId = a.vm.TrackObject(a.logEntry)
}

func (a *ScLog) Exists(keyId int32) bool {
	return uint32(keyId) <= a.lines.Len()
}

func (a *ScLog) GetInt(keyId int32) int64 {
	switch keyId {
	case KeyLength:
		return int64(a.lines.Len())
	}
	return a.ModelObject.GetInt(keyId)
}

func (a *ScLog) GetObjectId(keyId int32, typeId int32) int32 {
	if typeId != OBJTYPE_MAP {
		a.Error("GetObjectId: Invalid type")
		return 0
	}
	//TODO can only access new entries for now
	if uint32(keyId) == a.lines.Len() {
		return a.logEntryId
	}
	return a.ArrayObject.GetObjectId(keyId, typeId)
}

func (a *ScLog) GetTypeId(keyId int32) int32 {
	if a.Exists(keyId) {
		return OBJTYPE_MAP
	}
	return -1
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

type ScLogEntry struct {
	MapObject
	lines     *datatypes.MustTimestampedLog
	timestamp int64
}

func (o *ScLogEntry) Exists(keyId int32) bool {
	switch keyId {
	case KeyData:
	case KeyTimestamp:
	default:
		return false
	}
	return true
}

func (o *ScLogEntry) GetBytes(keyId int32) []byte {
	//switch keyId {
	//case KeyData:
	//	ts := o.lines.TakeTimeSlice(o.lines.Earliest(), o.lines.Latest())
	//}
	return o.MapObject.GetBytes(keyId)
}

func (o *ScLogEntry) GetInt(keyId int32) int64 {
	//switch keyId {
	//case KeyTimestamp:
	//	return o.lines.Latest()
	//}
	return o.MapObject.GetInt(keyId)
}

func (o *ScLogEntry) GetTypeId(keyId int32) int32 {
	switch keyId {
	case KeyData:
		return OBJTYPE_BYTES
	case KeyTimestamp:
		return OBJTYPE_INT
	}
	return -1
}

func (o *ScLogEntry) SetBytes(keyId int32, value []byte) {
	switch keyId {
	case KeyData:
		o.lines.Append(o.timestamp, value)
		return
	}
	o.Error("SetBytes: Invalid key")
}

func (o *ScLogEntry) SetInt(keyId int32, value int64) {
	switch keyId {
	case KeyTimestamp:
		o.timestamp = value
		return
	}
	o.Error("SetInt: Invalid key")
}