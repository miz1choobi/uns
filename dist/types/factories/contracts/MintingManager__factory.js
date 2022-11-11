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
const _bytecode = "0x608060405234801561001057600080fd5b506136e6806100206000396000f3fe60806040526004361061025c5760003560e01c80638da5cb5b11610144578063b9998a24116100b6578063d4a32ad61161007a578063d4a32ad61461074d578063d53913931461076d578063d547741f1461078f578063ec527389146107af578063f2fde38b146107cf578063ffa1ad74146107ef57600080fd5b8063b9998a24146106ad578063c3a3bc00146106cd578063cc2c3fc4146106ed578063ceeb4f501461070d578063d1f5692c1461072d57600080fd5b806399e0dd7c1161010857806399e0dd7c146105cb578063a217fddf146105eb578063a3f4df7e14610600578063a849d65c1461064d578063aa271e1a1461066d578063b0aa98c71461068d57600080fd5b80638da5cb5b14610538578063906cecc11461055657806391d1485414610576578063983b2d561461059657806398650275146105b657600080fd5b80633f4ba83a116101dd5780635fc1964f116101a15780635fc1964f146104a8578063634486da146104c8578063715018a6146104db57806371e2a657146104f057806381c81d35146105105780638456cb591461052357600080fd5b80633f4ba83a146103f0578063463c4bcb14610405578063572b6c05146104255780635b6fa8db146104735780635c975abb1461049357600080fd5b8063268b15ed11610224578063268b15ed146103385780632f2ff15d146103585780633092afd51461037857806336568abe146103985780633f41b614146103b857600080fd5b806301ffc9a7146102615780630e36a87d1461029657806310921f12146102c35780631459457a146102d8578063248a9ca3146102fa575b600080fd5b34801561026d57600080fd5b5061028161027c366004612f14565b610820565b60405190151581526020015b60405180910390f35b3480156102a257600080fd5b506102b66102b1366004612dce565b610857565b60405161028d9190613224565b3480156102cf57600080fd5b5061028161092e565b3480156102e457600080fd5b506102f86102f3366004612f3c565b61095b565b005b34801561030657600080fd5b5061032a610315366004612ecd565b60009081526097602052604090206001015490565b60405190815260200161028d565b34801561034457600080fd5b506102f8610353366004612fdf565b610cac565b34801561036457600080fd5b506102f8610373366004612ee5565b610dde565b34801561038457600080fd5b506102f8610393366004612be4565b610e08565b3480156103a457600080fd5b506102f86103b3366004612ee5565b610e1c565b3480156103c457600080fd5b5060c9546103d8906001600160a01b031681565b6040516001600160a01b03909116815260200161028d565b3480156103fc57600080fd5b506102f8610eaa565b34801561041157600080fd5b506102f8610420366004612ecd565b610ebc565b34801561043157600080fd5b50610281610440366004612be4565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561047f57600080fd5b5060cc546103d8906001600160a01b031681565b34801561049f57600080fd5b50610281610eec565b3480156104b457600080fd5b506102f86104c3366004612e0d565b610f02565b6102f86104d6366004612be4565b610f58565b3480156104e757600080fd5b506102f861101b565b3480156104fc57600080fd5b506102f861050b366004612e0d565b61102d565b6102f861051e366004612be4565b611083565b34801561052f57600080fd5b506102f8611100565b34801561054457600080fd5b506033546001600160a01b03166103d8565b34801561056257600080fd5b506102f8610571366004612cc4565b611110565b34801561058257600080fd5b50610281610591366004612ee5565b61122e565b3480156105a257600080fd5b506102f86105b1366004612be4565b611259565b3480156105c257600080fd5b506102f861126a565b3480156105d757600080fd5b506102f86105e6366004612fac565b611284565b3480156105f757600080fd5b5061032a600081565b34801561060c57600080fd5b50610640604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b60405161028d91906132cf565b34801561065957600080fd5b5060cb546103d8906001600160a01b031681565b34801561067957600080fd5b50610281610688366004612be4565b611363565b34801561069957600080fd5b506102816106a8366004612ecd565b61137d565b3480156106b957600080fd5b506102f86106c8366004612be4565b6113ea565b3480156106d957600080fd5b506102f86106e8366004612fac565b61142f565b3480156106f957600080fd5b5060ca546103d8906001600160a01b031681565b34801561071957600080fd5b506102f8610728366004612d1d565b611476565b34801561073957600080fd5b506102f8610748366004612dce565b6115b1565b34801561075957600080fd5b506102f8610768366004612c1c565b611676565b34801561077957600080fd5b5061032a6000805160206136ba83398151915281565b34801561079b57600080fd5b506102f86107aa366004612ee5565b6119b4565b3480156107bb57600080fd5b506102f86107ca366004612ecd565b6119d9565b3480156107db57600080fd5b506102f86107ea366004612be4565b611a4b565b3480156107fb57600080fd5b506106406040518060400160405280600581526020016418171a171960d91b81525081565b60006001600160e01b03198216637965db0b60e01b148061085157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060816001600160401b0381111561087f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156108a8578160200160208202803683370190505b50905060005b82811015610927576108e58484838181106108d957634e487b7160e01b600052603260045260246000fd5b9050602002013561137d565b82828151811061090557634e487b7160e01b600052603260045260246000fd5b911515602092830291909101909101528061091f8161361d565b9150506108ae565b5092915050565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b5460ff16919050565b600054610100900460ff161580801561097b5750600054600160ff909116105b806109955750303b158015610995575060005460ff166001145b6109fd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610a20576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc805492861692909116919091179055610a72611a67565b610a7a611a9e565b610a8382611ad7565b610a8b611afe565b610a93611b5a565b604080516101c081018252600661018082018181526563727970746f60d01b6101a0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b8183015261014084015283518085019094529083526535b632bb32b960d11b9083015261016081019190915260005b600c811015610c5c57610c4a8282600c8110610c4057634e487b7160e01b600052603260045260246000fd5b6020020151611b97565b80610c548161361d565b915050610c14565b50508015610ca4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cef9250849150611cb39050565b610d0b5760405162461bcd60e51b81526004016109f490613387565b6000610d3e8260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115610d9657610d69610d5d826000600a611cd9565b80516020909101512090565b60008051602061369a8339815191521415610d965760405162461bcd60e51b81526004016109f4906132e2565b610d9e610eec565b15610dbb5760405162461bcd60e51b81526004016109f49061335d565b610ca4610dc6611d18565b610dd988610dd48989611d27565b611d53565b611e80565b600082815260976020526040902060010154610df981611e8e565b610e038383611e9f565b505050565b610e10611f26565b610e1981611f9f565b50565b610e24611d18565b6001600160a01b0316816001600160a01b031614610e9c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016109f4565b610ea68282611fb7565b5050565b610eb2611f26565b610eba61203c565b565b610ec7610688611d18565b610ee35760405162461bcd60e51b81526004016109f490613328565b610e19816120e4565b600060008051602061367a833981519152610952565b610f0a611f26565b60005b8151811015610ea657610f46828281518110610f3957634e487b7160e01b600052603260045260246000fd5b6020026020010151611f9f565b80610f508161361d565b915050610f0d565b610f63610688611d18565b610f7f5760405162461bcd60e51b81526004016109f490613328565b6001600160a01b038116610fd55760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016109f4565b610fde816121b3565b610fe661126a565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610ea6573d6000803e3d6000fd5b611023611f26565b610eba60006121cb565b611035611f26565b60005b8151811015610ea65761107182828151811061106457634e487b7160e01b600052603260045260246000fd5b60200260200101516121b3565b8061107b8161361d565b915050611038565b61108e610688611d18565b6110aa5760405162461bcd60e51b81526004016109f490613328565b6001600160a01b038116610fde5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016109f4565b611108611f26565b610eba61221d565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111539250849150611cb39050565b61116f5760405162461bcd60e51b81526004016109f490613387565b60006111a28260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a816000015111156111ee576111c1610d5d826000600a611cd9565b60008051602061369a83398151915214156111ee5760405162461bcd60e51b81526004016109f4906132e2565b6111f6610eec565b156112135760405162461bcd60e51b81526004016109f49061335d565b61122587610dd988610dd48989611d27565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b611261611f26565b610e19816121b3565b610eba6000805160206136ba8339815191526103b3611d18565b61128c611f26565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906112be90859085906004016132a0565b600060405180830381600087803b1580156112d857600080fd5b505af11580156112ec573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610ea690505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061133590859085906004016132a0565b600060405180830381600087803b15801561134f57600080fd5b505af1158015610ca4573d6000803e3d6000fd5b60006108516000805160206136ba8339815191528361122e565b600061138761092e565b1580156108515750604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018390526113e0906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6113f2611f26565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b611437611f26565b610ea682828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b9792505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506114b99250849150611cb39050565b6114d55760405162461bcd60e51b81526004016109f490613387565b60006115088260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a8160000151111561155457611527610d5d826000600a611cd9565b60008051602061369a83398151915214156115545760405162461bcd60e51b81526004016109f4906132e2565b61155c610eec565b156115795760405162461bcd60e51b81526004016109f49061335d565b6115a48b61158b8c610dd48d8d611d27565b611595898b6134d6565b61159f888a6134d6565b612285565b5050505050505050505050565b6115b9611f26565b60005b81811015610e035760c9546001600160a01b031663509602398484848181106115f557634e487b7160e01b600052603260045260246000fd5b905060200201602081019061160a9190612be4565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561164b57600080fd5b505af115801561165f573d6000803e3d6000fd5b50505050808061166e9061361d565b9150506115bc565b61168085876134d6565b8051600214156116f257611695610688611d18565b6116ed5760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604482015263272a22a960e11b60648201526084016109f4565b6117ff565b60006116fd82612589565b60c9549092506001600160a01b0316905063430c208161171b611d18565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b15801561176157600080fd5b505afa158015611775573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117999190612ead565b6117fd5760405162461bcd60e51b815260206004820152602f60248201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060448201526e282927ab22a22fa7a92fa7aba722a960891b60648201526084016109f4565b505b61180986886134d6565b6002815110156118695760405162461bcd60e51b815260206004820152602560248201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456044820152642627abaf9960d91b60648201526084016109f4565b6118a6816001835161187b91906134bf565b8151811061189957634e487b7160e01b600052603260045260246000fd5b60200260200101516125ef565b6118c25760405162461bcd60e51b81526004016109f490613387565b600061192982600284516118d691906134bf565b815181106118f457634e487b7160e01b600052603260045260246000fd5b602002602001015160408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a8160000151111561197557611948610d5d826000600a611cd9565b60008051602061369a83398151915214156119755760405162461bcd60e51b81526004016109f4906132e2565b61197d610eec565b1561199a5760405162461bcd60e51b81526004016109f49061335d565b6119a88a61158b8a8c6134d6565b50505050505050505050565b6000828152609760205260409020600101546119cf81611e8e565b610e038383611fb7565b6119e1611f26565b6119ea81611cb3565b611a065760405162461bcd60e51b81526004016109f490613387565b600081815260cd60205260408120611a1d91612a89565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611a53611f26565b611a5c8161260f565b610e19600082612685565b600054610100900460ff16611a8e5760405162461bcd60e51b81526004016109f4906133c9565b610eba611a99611d18565b6121cb565b600054610100900460ff16611ac55760405162461bcd60e51b81526004016109f4906133c9565b610eba6000611ad2611d18565b612685565b600054610100900460ff166113f25760405162461bcd60e51b81526004016109f4906133c9565b600054610100900460ff16611b255760405162461bcd60e51b81526004016109f4906133c9565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b805460ff1916911515919091179055565b600054610100900460ff16611b815760405162461bcd60e51b81526004016109f4906133c9565b600060008051602061367a833981519152611b49565b6000611ba460008361268f565b600081815260cd602090815260409091208451929350611bc8929091850190612ac3565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611bf991906132cf565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611c4557600080fd5b505afa158015611c59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7d9190612ead565b610ea65760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c60906113359084908690600401613414565b600081815260cd602052604081208054829190611ccf906135e2565b9050119050919050565b60408051808201909152600080825260208201526040518060400160405280838152602001848660200151611d0e9190613488565b9052949350505050565b6000611d22612744565b905090565b60608282604051602001611d3c9291906130c4565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611d6d5790505090508281600081518110611da657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611dcf906135e2565b80601f0160208091040260200160405190810160405280929190818152602001828054611dfb906135e2565b8015611e485780601f10611e1d57610100808354040283529160200191611e48565b820191906000526020600020905b815481529060010190602001808311611e2b57829003601f168201915b505050505081600181518110611e6e57634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b6060610e0383838384612285565b610e1981611e9a611d18565b61278b565b611ea9828261122e565b610ea65760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611ee2611d18565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611f2e611d18565b6001600160a01b0316611f496033546001600160a01b031690565b6001600160a01b031614610eba5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109f4565b610e196000805160206136ba833981519152826119b4565b611fc1828261122e565b15610ea65760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055611ff8611d18565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b612044610eec565b6120875760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b60448201526064016109f4565b60008051602061367a833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6120c7611d18565b6040516001600160a01b03909116815260200160405180910390a1565b6120ec61092e565b1561212f5760405162461bcd60e51b8152602060048201526013602482015272109b1bd8dadb1a5cdd0e88111254d050931151606a1b60448201526064016109f4565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061216e906060016113c7565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b610e196000805160206136ba83398151915282612685565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612225610eec565b156122425760405162461bcd60e51b81526004016109f49061335d565b60008051602061367a833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586120c7611d18565b600061229084612589565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b1580156122d657600080fd5b505afa1580156122ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230e9190612ead565b801561239c575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b15801561235957600080fd5b505afa15801561236d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123919190612c00565b6001600160a01b0316145b1561240e5760c95460405163037b8ed760e21b81526001600160a01b0390911690630dee3b5c906123d79088908590889088906004016131eb565b600060405180830381600087803b1580156123f157600080fd5b505af1158015612405573d6000803e3d6000fd5b50505050612582565b612417816127ef565b61242084612851565b801561242d575083516002145b156125195760ca5484516001600160a01b039091169063c36c2125908790879060009061246a57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526124a49392916001600160a01b0316906004016131b6565b600060405180830381600087803b1580156124be57600080fd5b505af11580156124d2573d6000803e3d6000fd5b505050506000835111156125145760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae74906123d79086908690869060040161326a565b612582565b60c954604051637d67df6360e01b81526001600160a01b0390911690637d67df639061254f908890889088908890600401613161565b600060405180830381600087803b15801561256957600080fd5b505af115801561257d573d6000803e3d6000fd5b505050505b5050505050565b805160009081905b80156125e9578291506125d582856125aa6001856134bf565b815181106125c857634e487b7160e01b600052603260045260246000fd5b602002602001015161268f565b9250806125e1816135cb565b915050612591565b50915091565b6000806125fd60008461268f565b905061260881611cb3565b9392505050565b612617611f26565b6001600160a01b03811661267c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016109f4565b610e19816121cb565b610ea68282611e9f565b60008151600014156126e35760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d505459000000000060448201526064016109f4565b82826040516020016126f591906130a8565b60405160208183030381529060405280519060200120604051602001612725929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b0316331415612786575060331936013560601c90565b503390565b612795828261122e565b610ea6576127ad816001600160a01b031660146128a8565b6127b88360206128a8565b6040516020016127c99291906130ec565b60408051601f198184030181529082905262461bcd60e51b82526109f4916004016132cf565b6127f761092e565b610e19576128048161137d565b15610ee35760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b454400000060448201526064016109f4565b600080612868600084600186516125aa91906134bf565b60ca549091506001600160a01b03161580159061260857507f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f1492915050565b606060006128b78360026134a0565b6128c2906002613488565b6001600160401b038111156128e757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612911576020820181803683370190505b509050600360fc1b8160008151811061293a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061297757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600061299b8460026134a0565b6129a6906001613488565b90505b6001811115612a3a576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106129e857634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612a0c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612a33816135cb565b90506129a9565b5083156126085760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016109f4565b508054612a95906135e2565b6000825580601f10612aa5575050565b601f016020900490600052602060002090810190610e199190612b47565b828054612acf906135e2565b90600052602060002090601f016020900481019282612af15760008555612b37565b82601f10612b0a57805160ff1916838001178555612b37565b82800160010185558215612b37579182015b82811115612b37578251825591602001919060010190612b1c565b50612b43929150612b47565b5090565b5b80821115612b435760008155600101612b48565b60008083601f840112612b6d578182fd5b5081356001600160401b03811115612b83578182fd5b6020830191508360208260051b8501011115612b9e57600080fd5b9250929050565b60008083601f840112612bb6578182fd5b5081356001600160401b03811115612bcc578182fd5b602083019150836020828501011115612b9e57600080fd5b600060208284031215612bf5578081fd5b813561260881613664565b600060208284031215612c11578081fd5b815161260881613664565b60008060008060008060006080888a031215612c36578283fd5b8735612c4181613664565b965060208801356001600160401b0380821115612c5c578485fd5b612c688b838c01612b5c565b909850965060408a0135915080821115612c80578485fd5b612c8c8b838c01612b5c565b909650945060608a0135915080821115612ca4578384fd5b50612cb18a828b01612b5c565b989b979a50959850939692959293505050565b60008060008060608587031215612cd9578384fd5b8435612ce481613664565b93506020850135925060408501356001600160401b03811115612d05578283fd5b612d1187828801612ba5565b95989497509550505050565b60008060008060008060008060a0898b031215612d38578182fd5b8835612d4381613664565b97506020890135965060408901356001600160401b0380821115612d65578384fd5b612d718c838d01612ba5565b909850965060608b0135915080821115612d89578384fd5b612d958c838d01612b5c565b909650945060808b0135915080821115612dad578384fd5b50612dba8b828c01612b5c565b999c989b5096995094979396929594505050565b60008060208385031215612de0578182fd5b82356001600160401b03811115612df5578283fd5b612e0185828601612b5c565b90969095509350505050565b60006020808385031215612e1f578182fd5b82356001600160401b03811115612e34578283fd5b8301601f81018513612e44578283fd5b8035612e57612e5282613465565b613435565b80828252848201915084840188868560051b8701011115612e76578687fd5b8694505b83851015612ea1578035612e8d81613664565b835260019490940193918501918501612e7a565b50979650505050505050565b600060208284031215612ebe578081fd5b81518015158114612608578182fd5b600060208284031215612ede578081fd5b5035919050565b60008060408385031215612ef7578182fd5b823591506020830135612f0981613664565b809150509250929050565b600060208284031215612f25578081fd5b81356001600160e01b031981168114612608578182fd5b600080600080600060a08688031215612f53578283fd5b8535612f5e81613664565b94506020860135612f6e81613664565b93506040860135612f7e81613664565b92506060860135612f8e81613664565b91506080860135612f9e81613664565b809150509295509295909350565b60008060208385031215612fbe578182fd5b82356001600160401b03811115612fd3578283fd5b612e0185828601612ba5565b600080600060408486031215612ff3578081fd5b8335925060208401356001600160401b0381111561300f578182fd5b61301b86828701612ba5565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b8581101561306f57828403895261305d84835161307c565b98850198935090840190600101613045565b5091979650505050505050565b6000815180845261309481602086016020860161359b565b601f01601f19169290920160200192915050565b600082516130ba81846020870161359b565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161312481601785016020880161359b565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161315581602884016020880161359b565b01602801949350505050565b6001600160a01b038516815260806020820181905260009061318590830186613028565b82810360408401526131978186613028565b905082810360608401526131ab8185613028565b979650505050505050565b600060018060a01b038086168352606060208401526131d8606084018661307c565b9150808416604084015250949350505050565b60018060a01b03851681528360208201526080604082015260006132126080830185613028565b82810360608401526131ab8185613028565b6020808252825182820181905260009190848201906040850190845b8181101561325e578351151583529284019291840191600101613240565b50909695505050505050565b60608152600061327d6060830186613028565b828103602084015261328f8186613028565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b602081526000612608602083018461307c565b60208082526026908201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860408201526512509255115160d21b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b82815260406020820152600061342d604083018461307c565b949350505050565b604051601f8201601f191681016001600160401b038111828210171561345d5761345d61364e565b604052919050565b60006001600160401b0382111561347e5761347e61364e565b5060051b60200190565b6000821982111561349b5761349b613638565b500190565b60008160001904831182151516156134ba576134ba613638565b500290565b6000828210156134d1576134d1613638565b500390565b60006134e4612e5284613465565b808482526020808301925084368760051b87011115613501578485fd5b845b8781101561358f5781356001600160401b0380821115613521578788fd5b90880190601f3681840112613534578889fd5b8235828111156135465761354661364e565b613557818301601f19168801613435565b9250808352368782860101111561356c57898afd5b808785018885013782018601899052508652509382019390820190600101613503565b50919695505050505050565b60005b838110156135b657818101518382015260200161359e565b838111156135c5576000848401525b50505050565b6000816135da576135da613638565b506000190190565b600181811c908216806135f657607f821691505b6020821081141561361757634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561363157613631613638565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610e1957600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd622b551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b89f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
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
