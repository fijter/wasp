package transaction

import (
	iotago "github.com/iotaledger/iota.go/v3"
	"github.com/iotaledger/wasp/packages/cryptolib"
	"github.com/iotaledger/wasp/packages/parameters"
)

type MintNFTTransactionParams struct {
	IssuerKeyPair     *cryptolib.KeyPair
	Target            iotago.Address
	UnspentOutputs    iotago.OutputSet
	UnspentOutputIDs  iotago.OutputIDs
	ImmutableMetadata []byte
}

func NewMintNFTTransaction(par MintNFTTransactionParams) (*iotago.Transaction, error) {
	issuerAddress := par.IssuerKeyPair.Address()

	out := &iotago.NFTOutput{
		NFTID: iotago.NFTID{},
		Conditions: iotago.UnlockConditions{
			&iotago.AddressUnlockCondition{Address: par.Target},
		},
		ImmutableBlocks: iotago.FeatureBlocks{
			&iotago.IssuerFeatureBlock{Address: issuerAddress},
			&iotago.MetadataFeatureBlock{Data: par.ImmutableMetadata},
		},
	}
	requiredDust := parameters.L1.Protocol.RentStructure.VByteCost * out.VBytes(&parameters.L1.Protocol.RentStructure, nil)
	out.Amount = requiredDust

	outputs := iotago.Outputs{out}

	inputIDs, remainder, err := computeInputsAndRemainder(issuerAddress, requiredDust, nil, nil, par.UnspentOutputs, par.UnspentOutputIDs)
	if err != nil {
		return nil, err
	}
	if remainder != nil {
		outputs = append(outputs, remainder)
	}

	inputsCommitment := inputIDs.OrderedSet(par.UnspentOutputs).MustCommitment()
	return CreateAndSignTx(inputIDs, inputsCommitment, outputs, par.IssuerKeyPair, parameters.L1.Protocol.NetworkID())
}
