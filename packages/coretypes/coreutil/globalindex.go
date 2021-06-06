package coreutil

import (
	"sync"

	"go.uber.org/atomic"
)

// region GlobalStateSync  ////////////////////////////////

// GlobalSync implements optimistic read baselines and global locks
type GlobalSync interface {
	GetSolidIndexBaseline() StateBaseline
	SetSolidIndex(idx uint32) GlobalSync // for use in state manager
	InvalidateSolidIndex() GlobalSync    // only for state manager
	Mutex() *sync.RWMutex
}

type globalSync struct {
	solidIndex  atomic.Uint64
	globalMutex *sync.RWMutex
}

func NewGlobalSync() *globalSync {
	ret := &globalSync{
		globalMutex: &sync.RWMutex{},
	}
	ret.solidIndex.Store(^uint64(0))
	return ret
}
func (g *globalSync) SetSolidIndex(idx uint32) GlobalSync {
	g.solidIndex.Store(uint64(idx))
	return g
}

func (g *globalSync) GetSolidIndexBaseline() StateBaseline {
	return NewStateIndexBaseline(&g.solidIndex)
}

func (g *globalSync) InvalidateSolidIndex() GlobalSync {
	g.solidIndex.Store(^uint64(0))
	return g
}

func (g *globalSync) Mutex() *sync.RWMutex {
	return g.globalMutex
}

// endregion  ///////////////////////////////////////////////////

// region StateBaseline //////////////////////////////////////////////

type StateBaseline interface {
	Set()
	IsValid() bool
}

type stateBaseline struct {
	globalStateIndex *atomic.Uint64
	baseline         uint32
}

func NewStateIndexBaseline(globalStateIndex *atomic.Uint64) *stateBaseline {
	return &stateBaseline{
		globalStateIndex: globalStateIndex,
		baseline:         uint32(globalStateIndex.Load()),
	}
}

func (g *stateBaseline) Set() {
	g.baseline = uint32(g.globalStateIndex.Load())
}

func (g *stateBaseline) IsValid() bool {
	f := g.globalStateIndex.Load()
	if f>>32 != 0 {
		return false
	}
	return g.baseline == uint32(g.globalStateIndex.Load())
}

// enregion /////////////////////////////////////////////////////////////