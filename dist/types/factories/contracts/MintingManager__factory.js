"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Blocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistEnabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "NewTld",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "RemoveTld",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NAME",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addProxyReaders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "addTld",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "areBlocked",
        outputs: [
            {
                internalType: "bool[]",
                name: "values",
                type: "bool[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "blocklist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "label",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "tld",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMintingManager.BulkSLDIssueRequest[]",
                name: "requests",
                type: "tuple[]",
            },
        ],
        name: "bulkIssue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claimTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "claimToWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "closeMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsMintingController",
        outputs: [
            {
                internalType: "contract IMintingController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsResolver",
        outputs: [
            {
                internalType: "contract IResolver",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsURIPrefixController",
        outputs: [
            {
                internalType: "contract IURIPrefixController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IUNSRegistry",
                name: "unsRegistry_",
                type: "address",
            },
            {
                internalType: "contract IMintingController",
                name: "cnsMintingController_",
                type: "address",
            },
            {
                internalType: "contract IURIPrefixController",
                name: "cnsURIPrefixController_",
                type: "address",
            },
            {
                internalType: "contract IResolver",
                name: "cnsResolver_",
                type: "address",
            },
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isBlocked",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isBlocklistDisabled",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "issueWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "issueWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
        ],
        name: "removeTld",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "rotateMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "setForwarder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unsRegistry",
        outputs: [
            {
                internalType: "contract IUNSRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50613b6d806100206000396000f3fe6080604052600436106102725760003560e01c80638da5cb5b1161014f578063b9998a24116100c1578063d53913931161007a578063d5391393146107a3578063d547741f146107c5578063d6ab22ed146107e5578063ec52738914610805578063f2fde38b14610825578063ffa1ad741461084557600080fd5b8063b9998a24146106e3578063c3a3bc0014610703578063cc2c3fc414610723578063ceeb4f5014610743578063d1f5692c14610763578063d4a32ad61461078357600080fd5b806399e0dd7c1161011357806399e0dd7c14610601578063a217fddf14610621578063a3f4df7e14610636578063a849d65c14610683578063aa271e1a146106a3578063b0aa98c7146106c357600080fd5b80638da5cb5b1461056e578063906cecc11461058c57806391d14854146105ac578063983b2d56146105cc57806398650275146105ec57600080fd5b8063463c4bcb116101e85780635fc1964f116101ac5780635fc1964f146104de578063634486da146104fe578063715018a61461051157806371e2a6571461052657806381c81d35146105465780638456cb591461055957600080fd5b8063463c4bcb1461041b578063572b6c051461043b5780635b6fa8db146104895780635c975abb146104a95780635cd7e3b3146104be57600080fd5b8063268b15ed1161023a578063268b15ed1461034e5780632f2ff15d1461036e5780633092afd51461038e57806336568abe146103ae5780633f41b614146103ce5780633f4ba83a1461040657600080fd5b806301ffc9a7146102775780630e36a87d146102ac57806310921f12146102d95780631459457a146102ee578063248a9ca314610310575b600080fd5b34801561028357600080fd5b506102976102923660046132bb565b610876565b60405190151581526020015b60405180910390f35b3480156102b857600080fd5b506102cc6102c7366004613179565b6108ad565b6040516102a391906135d2565b3480156102e557600080fd5b50610297610984565b3480156102fa57600080fd5b5061030e6103093660046132e3565b6109b1565b005b34801561031c57600080fd5b5061034061032b366004613274565b60009081526097602052604090206001015490565b6040519081526020016102a3565b34801561035a57600080fd5b5061030e610369366004613386565b610d02565b34801561037a57600080fd5b5061030e61038936600461328c565b610d94565b34801561039a57600080fd5b5061030e6103a9366004612ed4565b610dbe565b3480156103ba57600080fd5b5061030e6103c936600461328c565b610dd2565b3480156103da57600080fd5b5060c9546103ee906001600160a01b031681565b6040516001600160a01b0390911681526020016102a3565b34801561041257600080fd5b5061030e610e60565b34801561042757600080fd5b5061030e610436366004613274565b610e72565b34801561044757600080fd5b50610297610456366004612ed4565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561049557600080fd5b5060cc546103ee906001600160a01b031681565b3480156104b557600080fd5b50610297610ea2565b3480156104ca57600080fd5b5061030e6104d9366004612fb4565b610eb8565b3480156104ea57600080fd5b5061030e6104f93660046131b8565b6110b2565b61030e61050c366004612ed4565b611108565b34801561051d57600080fd5b5061030e6111cb565b34801561053257600080fd5b5061030e6105413660046131b8565b6111dd565b61030e610554366004612ed4565b611233565b34801561056557600080fd5b5061030e6112b0565b34801561057a57600080fd5b506033546001600160a01b03166103ee565b34801561059857600080fd5b5061030e6105a736600461306f565b6112c0565b3480156105b857600080fd5b506102976105c736600461328c565b611346565b3480156105d857600080fd5b5061030e6105e7366004612ed4565b611371565b3480156105f857600080fd5b5061030e611382565b34801561060d57600080fd5b5061030e61061c366004613353565b61139c565b34801561062d57600080fd5b50610340600081565b34801561064257600080fd5b50610676604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102a3919061367d565b34801561068f57600080fd5b5060cb546103ee906001600160a01b031681565b3480156106af57600080fd5b506102976106be366004612ed4565b61147b565b3480156106cf57600080fd5b506102976106de366004613274565b611495565b3480156106ef57600080fd5b5061030e6106fe366004612ed4565b611502565b34801561070f57600080fd5b5061030e61071e366004613353565b611547565b34801561072f57600080fd5b5060ca546103ee906001600160a01b031681565b34801561074f57600080fd5b5061030e61075e3660046130c8565b61158e565b34801561076f57600080fd5b5061030e61077e366004613179565b611624565b34801561078f57600080fd5b5061030e61079e366004612f0c565b6116e9565b3480156107af57600080fd5b50610340600080516020613b4183398151915281565b3480156107d157600080fd5b5061030e6107e036600461328c565b61186f565b3480156107f157600080fd5b5061030e610800366004613179565b611894565b34801561081157600080fd5b5061030e610820366004613274565b611b25565b34801561083157600080fd5b5061030e610840366004612ed4565b611b97565b34801561085157600080fd5b5061067660405180604001604052806005815260200164302e342e3560d81b81525081565b60006001600160e01b03198216637965db0b60e01b14806108a757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060816001600160401b038111156108d557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156108fe578160200160208202803683370190505b50905060005b8281101561097d5761093b84848381811061092f57634e487b7160e01b600052603260045260246000fd5b90506020020135611495565b82828151811061095b57634e487b7160e01b600052603260045260246000fd5b911515602092830291909101909101528061097581613ab6565b915050610904565b5092915050565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b5460ff16919050565b600054610100900460ff16158080156109d15750600054600160ff909116105b806109eb5750303b1580156109eb575060005460ff166001145b610a535760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610a76576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc805492861692909116919091179055610ac8611bb3565b610ad0611bea565b610ad982611c23565b610ae1611c4a565b610ae9611ca6565b604080516101c081018252600661018082018181526563727970746f60d01b6101a0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b8183015261014084015283518085019094529083526535b632bb32b960d11b9083015261016081019190915260005b600c811015610cb257610ca08282600c8110610c9657634e487b7160e01b600052603260045260246000fd5b6020020151611ce3565b80610caa81613ab6565b915050610c6a565b50508015610cfa576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d469250849150839050611dff565b610d4e610ea2565b15610d6b5760405162461bcd60e51b8152600401610a4a9061370a565b6060610cfa610d78611f55565b610d8b88610d868989611f64565b611f90565b838460016120bd565b600082815260976020526040902060010154610daf816123b9565b610db983836123ca565b505050565b610dc6612451565b610dcf816124ca565b50565b610dda611f55565b6001600160a01b0316816001600160a01b031614610e525760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610a4a565b610e5c82826124e2565b5050565b610e68612451565b610e70612567565b565b610e7d6106be611f55565b610e995760405162461bcd60e51b8152600401610a4a906136d5565b610dcf8161260f565b6000600080516020613b218339815191526109a8565b610ec2868861396f565b805160021415610ef857610ed76106be611f55565b610ef35760405162461bcd60e51b8152600401610a4a90613734565b610fbd565b6000610f03826126de565b60c9549092506001600160a01b0316905063430c2081610f21611f55565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610f6757600080fd5b505afa158015610f7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9f9190613258565b610fbb5760405162461bcd60e51b8152600401610a4a90613805565b505b610fc7878961396f565b600281511015610fe95760405162461bcd60e51b8152600401610a4a90613690565b61105961102b600083600185516110009190613958565b8151811061101e57634e487b7160e01b600052603260045260246000fd5b6020026020010151612719565b8260008151811061104c57634e487b7160e01b600052603260045260246000fd5b6020026020010151611dff565b611061610ea2565b1561107e5760405162461bcd60e51b8152600401610a4a9061370a565b6110a68a61108c8a8c61396f565b611096898b61396f565b6110a0888a61396f565b876120bd565b50505050505050505050565b6110ba612451565b60005b8151811015610e5c576110f68282815181106110e957634e487b7160e01b600052603260045260246000fd5b60200260200101516124ca565b8061110081613ab6565b9150506110bd565b6111136106be611f55565b61112f5760405162461bcd60e51b8152600401610a4a906136d5565b6001600160a01b0381166111855760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610a4a565b61118e816127ce565b611196611382565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610e5c573d6000803e3d6000fd5b6111d3612451565b610e7060006127e6565b6111e5612451565b60005b8151811015610e5c5761122182828151811061121457634e487b7160e01b600052603260045260246000fd5b60200260200101516127ce565b8061122b81613ab6565b9150506111e8565b61123e6106be611f55565b61125a5760405162461bcd60e51b8152600401610a4a906136d5565b6001600160a01b03811661118e5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610a4a565b6112b8612451565b610e70612838565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113049250849150839050611dff565b61130c610ea2565b156113295760405162461bcd60e51b8152600401610a4a9061370a565b606061133d87610d8b88610d868989611f64565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b611379612451565b610dcf816127ce565b610e70600080516020613b418339815191526103c9611f55565b6113a4612451565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906113d6908590859060040161364e565b600060405180830381600087803b1580156113f057600080fd5b505af1158015611404573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610e5c90505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061144d908590859060040161364e565b600060405180830381600087803b15801561146757600080fd5b505af1158015610cfa573d6000803e3d6000fd5b60006108a7600080516020613b4183398151915283611346565b600061149f610984565b1580156108a75750604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018390526114f8906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b61150a612451565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b61154f612451565b610e5c82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611ce392505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115d29250849150839050611dff565b6115da610ea2565b156115f75760405162461bcd60e51b8152600401610a4a9061370a565b6110a68a6116098b610d868c8c611f64565b611613888a61396f565b61161d878961396f565b60016120bd565b61162c612451565b60005b81811015610db95760c9546001600160a01b0316635096023984848481811061166857634e487b7160e01b600052603260045260246000fd5b905060200201602081019061167d9190612ed4565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156116be57600080fd5b505af11580156116d2573d6000803e3d6000fd5b5050505080806116e190613ab6565b91505061162f565b6116f3858761396f565b805160021415611729576117086106be611f55565b6117245760405162461bcd60e51b8152600401610a4a90613734565b6117ee565b6000611734826126de565b60c9549092506001600160a01b0316905063430c2081611752611f55565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b15801561179857600080fd5b505afa1580156117ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d09190613258565b6117ec5760405162461bcd60e51b8152600401610a4a90613805565b505b6117f8868861396f565b60028151101561181a5760405162461bcd60e51b8152600401610a4a90613690565b61183161102b600083600185516110009190613958565b611839610ea2565b156118565760405162461bcd60e51b8152600401610a4a9061370a565b61186489611609898b61396f565b505050505050505050565b60008281526097602052604090206001015461188a816123b9565b610db983836124e2565b61189f6106be611f55565b6118bb5760405162461bcd60e51b8152600401610a4a906136d5565b60005b81811015610db9576119798383838181106118e957634e487b7160e01b600052603260045260246000fd5b90506020028101906118fb91906138b9565b6040013584848481811061191f57634e487b7160e01b600052603260045260246000fd5b905060200281019061193191906138b9565b61193f906020810190613875565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611dff92505050565b6000611a2e84848481811061199e57634e487b7160e01b600052603260045260246000fd5b90506020028101906119b091906138b9565b604001358585858181106119d457634e487b7160e01b600052603260045260246000fd5b90506020028101906119e691906138b9565b6119f4906020810190613875565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f9092505050565b90506000611a3b826126de565b5060c954604051634f558e7960e01b8152600481018390529192506060916001600160a01b0390911690634f558e799060240160206040518083038186803b158015611a8657600080fd5b505afa158015611a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abe9190613258565b611b0f57611b0f868686818110611ae557634e487b7160e01b600052603260045260246000fd5b9050602002810190611af791906138b9565b611b05906020810190612ed4565b84838460006120bd565b5050508080611b1d90613ab6565b9150506118be565b611b2d612451565b611b36816128a0565b611b525760405162461bcd60e51b8152600401610a4a90613778565b600081815260cd60205260408120611b6991612d79565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611b9f612451565b611ba8816128c6565b610dcf60008261293c565b600054610100900460ff16611bda5760405162461bcd60e51b8152600401610a4a906137ba565b610e70611be5611f55565b6127e6565b600054610100900460ff16611c115760405162461bcd60e51b8152600401610a4a906137ba565b610e706000611c1e611f55565b61293c565b600054610100900460ff1661150a5760405162461bcd60e51b8152600401610a4a906137ba565b600054610100900460ff16611c715760405162461bcd60e51b8152600401610a4a906137ba565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b805460ff1916911515919091179055565b600054610100900460ff16611ccd5760405162461bcd60e51b8152600401610a4a906137ba565b6000600080516020613b21833981519152611c95565b6000611cf0600083612719565b600081815260cd602090815260409091208451929350611d14929091850190612db3565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611d45919061367d565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611d9157600080fd5b505afa158015611da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dc99190613258565b610e5c5760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c609061144d9084908690600401613854565b611e08826128a0565b611e245760405162461bcd60e51b8152600401610a4a90613778565b6000611e578260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115611f0057611e82611e76826000600a612946565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415611f005760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610a4a565b611f0982612985565b610db95760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610a4a565b6000611f5f612a31565b905090565b60608282604051602001611f79929190613468565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611faa5790505090508281600081518110611fe357634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd6000858152602001908152602001600020805461200c90613a7b565b80601f016020809104026020016040519081016040528092919081815260200182805461203890613a7b565b80156120855780601f1061205a57610100808354040283529160200191612085565b820191906000526020600020905b81548152906001019060200180831161206857829003601f168201915b5050505050816001815181106120ab57634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b60006120c8856126de565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b15801561210e57600080fd5b505afa158015612122573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121469190613258565b80156121d4575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b15801561219157600080fd5b505afa1580156121a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c99190612ef0565b6001600160a01b0316145b156122485760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f906122119089908590899089908990600401613599565b600060405180830381600087803b15801561222b57600080fd5b505af115801561223f573d6000803e3d6000fd5b50505050610cfa565b61225181612a78565b61225a85612ada565b8015612267575084516002145b156123535760ca5485516001600160a01b039091169063c36c212590889088906000906122a457634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526122de9392916001600160a01b031690600401613564565b600060405180830381600087803b1580156122f857600080fd5b505af115801561230c573d6000803e3d6000fd5b5050505060008451111561234e5760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae749061221190879087908690600401613618565b610cfa565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b79061238b9089908990899089908990600401613505565b600060405180830381600087803b1580156123a557600080fd5b505af11580156110a6573d6000803e3d6000fd5b610dcf816123c5611f55565b612b34565b6123d48282611346565b610e5c5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561240d611f55565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b612459611f55565b6001600160a01b03166124746033546001600160a01b031690565b6001600160a01b031614610e705760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a4a565b610dcf600080516020613b418339815191528261186f565b6124ec8282611346565b15610e5c5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612523611f55565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61256f610ea2565b6125b25760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610a4a565b600080516020613b21833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6125f2611f55565b6040516001600160a01b03909116815260200160405180910390a1565b612617610984565b1561265a5760405162461bcd60e51b8152602060048201526013602482015272109b1bd8dadb1a5cdd0e88111254d050931151606a1b6044820152606401610a4a565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600190612699906060016114df565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b8015612713578291506126ff8285611000600185613958565b92508061270b81613a64565b9150506126e6565b50915091565b600081516000141561276d5760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610a4a565b828260405160200161277f919061344c565b604051602081830303815290604052805190602001206040516020016127af929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610dcf600080516020613b418339815191528261293c565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612840610ea2565b1561285d5760405162461bcd60e51b8152600401610a4a9061370a565b600080516020613b21833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586125f2611f55565b600081815260cd6020526040812080548291906128bc90613a7b565b9050119050919050565b6128ce612451565b6001600160a01b0381166129335760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a4a565b610dcf816127e6565b610e5c82826123ca565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161297b9190613921565b9052949350505050565b600081516000141561299957506000919050565b6020820160005b8351811015612a275760006129b88383015160f81c90565b90508060ff16602d141580156129e3575060308160ff16101580156129e1575060398160ff1611155b155b8015612a04575060618160ff1610158015612a025750607a8160ff1611155b155b15612a1457506000949350505050565b5080612a1f81613ab6565b9150506129a0565b5060019392505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b0316331415612a73575060331936013560601c90565b503390565b612a80610984565b610dcf57612a8d81611495565b15610e995760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610a4a565b600080612af1600084600186516110009190613958565b60ca549091506001600160a01b031615801590612b2d5750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b612b3e8282611346565b610e5c57612b56816001600160a01b03166014612b98565b612b61836020612b98565b604051602001612b72929190613490565b60408051601f198184030181529082905262461bcd60e51b8252610a4a9160040161367d565b60606000612ba7836002613939565b612bb2906002613921565b6001600160401b03811115612bd757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612c01576020820181803683370190505b509050600360fc1b81600081518110612c2a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612c6757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612c8b846002613939565b612c96906001613921565b90505b6001811115612d2a576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612cd857634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612cfc57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612d2381613a64565b9050612c99565b508315612b2d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610a4a565b508054612d8590613a7b565b6000825580601f10612d95575050565b601f016020900490600052602060002090810190610dcf9190612e37565b828054612dbf90613a7b565b90600052602060002090601f016020900481019282612de15760008555612e27565b82601f10612dfa57805160ff1916838001178555612e27565b82800160010185558215612e27579182015b82811115612e27578251825591602001919060010190612e0c565b50612e33929150612e37565b5090565b5b80821115612e335760008155600101612e38565b60008083601f840112612e5d578182fd5b5081356001600160401b03811115612e73578182fd5b6020830191508360208260051b8501011115612e8e57600080fd5b9250929050565b60008083601f840112612ea6578182fd5b5081356001600160401b03811115612ebc578182fd5b602083019150836020828501011115612e8e57600080fd5b600060208284031215612ee5578081fd5b8135612b2d81613afd565b600060208284031215612f01578081fd5b8151612b2d81613afd565b60008060008060008060006080888a031215612f26578283fd5b8735612f3181613afd565b965060208801356001600160401b0380821115612f4c578485fd5b612f588b838c01612e4c565b909850965060408a0135915080821115612f70578485fd5b612f7c8b838c01612e4c565b909650945060608a0135915080821115612f94578384fd5b50612fa18a828b01612e4c565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215612fcf578182fd5b8835612fda81613afd565b975060208901356001600160401b0380821115612ff5578384fd5b6130018c838d01612e4c565b909950975060408b0135915080821115613019578384fd5b6130258c838d01612e4c565b909750955060608b013591508082111561303d578384fd5b5061304a8b828c01612e4c565b909450925050608089013561305e81613b12565b809150509295985092959890939650565b60008060008060608587031215613084578182fd5b843561308f81613afd565b93506020850135925060408501356001600160401b038111156130b0578283fd5b6130bc87828801612e95565b95989497509550505050565b60008060008060008060008060a0898b0312156130e3578182fd5b88356130ee81613afd565b97506020890135965060408901356001600160401b0380821115613110578384fd5b61311c8c838d01612e95565b909850965060608b0135915080821115613134578384fd5b6131408c838d01612e4c565b909650945060808b0135915080821115613158578384fd5b506131658b828c01612e4c565b999c989b5096995094979396929594505050565b6000806020838503121561318b578182fd5b82356001600160401b038111156131a0578283fd5b6131ac85828601612e4c565b90969095509350505050565b600060208083850312156131ca578182fd5b82356001600160401b038111156131df578283fd5b8301601f810185136131ef578283fd5b80356132026131fd826138fe565b6138ce565b80828252848201915084840188868560051b8701011115613221578687fd5b8694505b8385101561324c57803561323881613afd565b835260019490940193918501918501613225565b50979650505050505050565b600060208284031215613269578081fd5b8151612b2d81613b12565b600060208284031215613285578081fd5b5035919050565b6000806040838503121561329e578182fd5b8235915060208301356132b081613afd565b809150509250929050565b6000602082840312156132cc578081fd5b81356001600160e01b031981168114612b2d578182fd5b600080600080600060a086880312156132fa578283fd5b853561330581613afd565b9450602086013561331581613afd565b9350604086013561332581613afd565b9250606086013561333581613afd565b9150608086013561334581613afd565b809150509295509295909350565b60008060208385031215613365578182fd5b82356001600160401b0381111561337a578283fd5b6131ac85828601612e95565b60008060006040848603121561339a578081fd5b8335925060208401356001600160401b038111156133b6578182fd5b6133c286828701612e95565b9497909650939450505050565b6000815180845260208085019450848260051b8601828601855b85811015613413578383038952613401838351613420565b988501989250908401906001016133e9565b5090979650505050505050565b60008151808452613438816020860160208601613a34565b601f01601f19169290920160200192915050565b6000825161345e818460208701613a34565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516134c8816017850160208801613a34565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516134f9816028840160208801613a34565b01602801949350505050565b6001600160a01b038616815260a060208201819052600090613529908301876133cf565b828103604084015261353b81876133cf565b9050828103606084015261354f81866133cf565b91505082151560808301529695505050505050565b600060018060a01b038086168352606060208401526135866060840186613420565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a0604082015260006135c060a08301866133cf565b828103606084015261354f81866133cf565b6020808252825182820181905260009190848201906040850190845b8181101561360c5783511515835292840192918401916001016135ee565b50909695505050505050565b60608152600061362b60608301866133cf565b828103602084015261363d81866133cf565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b602081526000612b2d6020830184613420565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b82815260406020820152600061386d6040830184613420565b949350505050565b6000808335601e1984360301811261388b578283fd5b8301803591506001600160401b038211156138a4578283fd5b602001915036819003821315612e8e57600080fd5b60008235605e1983360301811261345e578182fd5b604051601f8201601f191681016001600160401b03811182821017156138f6576138f6613ae7565b604052919050565b60006001600160401b0382111561391757613917613ae7565b5060051b60200190565b6000821982111561393457613934613ad1565b500190565b600081600019048311821515161561395357613953613ad1565b500290565b60008282101561396a5761396a613ad1565b500390565b600061397d6131fd846138fe565b808482526020808301925084368760051b8701111561399a578485fd5b845b87811015613a285781356001600160401b03808211156139ba578788fd5b90880190601f36818401126139cd578889fd5b8235828111156139df576139df613ae7565b6139f0818301601f191688016138ce565b92508083523687828601011115613a0557898afd5b80878501888501378201860189905250865250938201939082019060010161399c565b50919695505050505050565b60005b83811015613a4f578181015183820152602001613a37565b83811115613a5e576000848401525b50505050565b600081613a7357613a73613ad1565b506000190190565b600181811c90821680613a8f57607f821691505b60208210811415613ab057634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613aca57613aca613ad1565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610dcf57600080fd5b8015158114610dcf57600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManager__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MintingManager__factory = MintingManager__factory;
MintingManager__factory.bytecode = _bytecode;
MintingManager__factory.abi = _abi;
