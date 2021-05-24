package service

import (
	"math/big"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/iotaledger/wasp/contracts/native/evmchain"
	"github.com/iotaledger/wasp/packages/kv/codec"
)

type EVMChain struct {
	backend ChainBackend
}

func NewEVMChain(backend ChainBackend) *EVMChain {
	return &EVMChain{backend}
}

func (e *EVMChain) BlockNumber() (*big.Int, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetBlockNumber)
	if err != nil {
		return nil, err
	}

	bal := big.NewInt(0)
	bal.SetBytes(ret.MustGet(evmchain.FieldResult))
	return bal, nil
}

func (e *EVMChain) SendTransaction(tx *types.Transaction) error {
	txdata, err := tx.MarshalBinary()
	if err != nil {
		return err
	}
	return e.backend.PostRequest(evmchain.Interface.Name, evmchain.FuncSendTransaction, 1024,
		evmchain.FieldTransactionData, txdata,
	)
}

func paramsWithOptionalBlockNumber(blockNumber *big.Int, params ...interface{}) []interface{} {
	if blockNumber != nil {
		return append(params, evmchain.FieldBlockNumber, blockNumber.Bytes())
	}
	return params
}

func (e *EVMChain) Balance(address common.Address, blockNumber *big.Int) (*big.Int, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetBalance, paramsWithOptionalBlockNumber(blockNumber,
		evmchain.FieldAddress, address.Bytes(),
	)...)
	if err != nil {
		return nil, err
	}

	bal := big.NewInt(0)
	bal.SetBytes(ret.MustGet(evmchain.FieldBalance))
	return bal, nil
}

func (e *EVMChain) Code(address common.Address, blockNumber *big.Int) ([]byte, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetCode, paramsWithOptionalBlockNumber(blockNumber,
		evmchain.FieldAddress, address.Bytes(),
	)...)
	if err != nil {
		return nil, err
	}
	return ret.MustGet(evmchain.FieldResult), nil
}

func (e *EVMChain) BlockByNumber(blockNumber *big.Int) (*types.Block, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetBlockByNumber, paramsWithOptionalBlockNumber(blockNumber)...)
	if err != nil {
		return nil, err
	}

	if !ret.MustHas(evmchain.FieldResult) {
		return nil, nil
	}

	block, err := evmchain.DecodeBlock(ret.MustGet(evmchain.FieldResult))
	if err != nil {
		return nil, err
	}
	return block, nil
}

func (e *EVMChain) BlockByHash(hash common.Hash) (*types.Block, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetBlockByHash,
		evmchain.FieldBlockHash, hash.Bytes(),
	)
	if err != nil {
		return nil, err
	}

	if !ret.MustHas(evmchain.FieldResult) {
		return nil, nil
	}

	block, err := evmchain.DecodeBlock(ret.MustGet(evmchain.FieldResult))
	if err != nil {
		return nil, err
	}
	return block, nil
}

func (e *EVMChain) TransactionReceipt(txHash common.Hash) (*evmchain.Receipt, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetReceipt,
		evmchain.FieldTransactionHash, txHash.Bytes(),
	)
	if err != nil {
		return nil, err
	}

	if !ret.MustHas(evmchain.FieldResult) {
		return nil, nil
	}

	receipt, err := evmchain.DecodeReceipt(ret.MustGet(evmchain.FieldResult))
	if err != nil {
		return nil, err
	}
	return receipt, nil
}

func (e *EVMChain) TransactionCount(address common.Address, blockNumber *big.Int) (uint64, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncGetNonce, paramsWithOptionalBlockNumber(blockNumber,
		evmchain.FieldAddress, address.Bytes(),
	)...)
	if err != nil {
		return 0, err
	}

	n, _, err := codec.DecodeUint64(ret.MustGet(evmchain.FieldResult))
	if err != nil {
		return 0, err
	}
	return n, nil
}

func (e *EVMChain) CallContract(args ethereum.CallMsg, blockNumber *big.Int) ([]byte, error) {
	ret, err := e.backend.CallView(evmchain.Interface.Name, evmchain.FuncCallContract, evmchain.FieldCallMsg, evmchain.EncodeCallMsg(args))
	if err != nil {
		return nil, err
	}
	return ret.MustGet(evmchain.FieldResult), nil
}