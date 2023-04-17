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
                name: "unsOperator_",
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
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "setOperator",
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
        name: "unsOperator",
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
const _bytecode = "0x608060405234801561001057600080fd5b506136ad806100206000396000f3fe6080604052600436106102515760003560e01c806391d1485411610139578063b9998a24116100b6578063d1f5692c1161007a578063d1f5692c14610720578063d539139314610740578063d547741f14610762578063ec52738914610782578063f2fde38b146107a2578063ffa1ad74146107c257600080fd5b8063b9998a2414610680578063c3a3bc00146106a0578063cc2a9a5b146106c0578063cc2c3fc4146106e0578063ceeb4f501461070057600080fd5b8063a3f4df7e116100fd578063a3f4df7e146105b3578063a849d65c14610600578063aa271e1a14610620578063b0aa98c714610640578063b3ab15fb1461066057600080fd5b806391d1485414610529578063983b2d5614610549578063986502751461056957806399e0dd7c1461057e578063a217fddf1461059e57600080fd5b80635c975abb116101d257806371e2a6571161019657806371e2a6571461048357806377a2a589146104a357806381c81d35146104c35780638456cb59146104d65780638da5cb5b146104eb578063906cecc11461050957600080fd5b80635c975abb146104065780635cd7e3b31461041b5780635fc1964f1461043b578063634486da1461045b578063715018a61461046e57600080fd5b806336568abe1161021957806336568abe1461032b5780633f41b6141461034b5780633f4ba83a14610383578063572b6c05146103985780635b6fa8db146103e657600080fd5b806301ffc9a714610256578063248a9ca31461028b578063268b15ed146102c95780632f2ff15d146102eb5780633092afd51461030b575b600080fd5b34801561026257600080fd5b50610276610271366004612fcc565b6107f4565b60405190151581526020015b60405180910390f35b34801561029757600080fd5b506102bb6102a6366004612f85565b60009081526097602052604090206001015490565b604051908152602001610282565b3480156102d557600080fd5b506102e96102e43660046130a8565b61082b565b005b3480156102f757600080fd5b506102e9610306366004612f9d565b6108ce565b34801561031757600080fd5b506102e9610326366004612c8d565b6108f8565b34801561033757600080fd5b506102e9610346366004612f9d565b61090c565b34801561035757600080fd5b5060c95461036b906001600160a01b031681565b6040516001600160a01b039091168152602001610282565b34801561038f57600080fd5b506102e961099a565b3480156103a457600080fd5b506102766103b3366004612c8d565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156103f257600080fd5b5060cc5461036b906001600160a01b031681565b34801561041257600080fd5b506102766109ac565b34801561042757600080fd5b506102e9610436366004612cc5565b6109c2565b34801561044757600080fd5b506102e9610456366004612ec9565b610d1c565b6102e9610469366004612c8d565b610d72565b34801561047a57600080fd5b506102e9610e65565b34801561048f57600080fd5b506102e961049e366004612ec9565b610e77565b3480156104af57600080fd5b5060ce5461036b906001600160a01b031681565b6102e96104d1366004612c8d565b610ecd565b3480156104e257600080fd5b506102e9610f7a565b3480156104f757600080fd5b506033546001600160a01b031661036b565b34801561051557600080fd5b506102e9610524366004612d80565b610f8a565b34801561053557600080fd5b50610276610544366004612f9d565b611010565b34801561055557600080fd5b506102e9610564366004612c8d565b61103b565b34801561057557600080fd5b506102e961104c565b34801561058a57600080fd5b506102e9610599366004613075565b611066565b3480156105aa57600080fd5b506102bb600081565b3480156105bf57600080fd5b506105f3604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102829190613323565b34801561060c57600080fd5b5060cb5461036b906001600160a01b031681565b34801561062c57600080fd5b5061027661063b366004612c8d565b611145565b34801561064c57600080fd5b5061027661065b366004612f85565b61115f565b34801561066c57600080fd5b506102e961067b366004612c8d565b6111bd565b34801561068c57600080fd5b506102e961069b366004612c8d565b6111e7565b3480156106ac57600080fd5b506102e96106bb366004613075565b61122c565b3480156106cc57600080fd5b506102e96106db366004612ff4565b611273565b3480156106ec57600080fd5b5060ca5461036b906001600160a01b031681565b34801561070c57600080fd5b506102e961071b366004612dd9565b61163d565b34801561072c57600080fd5b506102e961073b366004612e8a565b6116d3565b34801561074c57600080fd5b506102bb60008051602061368183398151915281565b34801561076e57600080fd5b506102e961077d366004612f9d565b611798565b34801561078e57600080fd5b506102e961079d366004612f85565b6117bd565b3480156107ae57600080fd5b506102e96107bd366004612c8d565b61182f565b3480156107ce57600080fd5b506105f360405180604001604052806006815260200165302e342e313360d01b81525081565b60006001600160e01b03198216637965db0b60e01b148061082557506301ffc9a760e01b6001600160e01b03198316145b92915050565b8282828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061086f925084915083905061184b565b6108776109ac565b1561089d5760405162461bcd60e51b815260040161089490613336565b60405180910390fd5b60606108c66108aa6119a1565b6108bd886108b889896119b0565b6119dc565b83846001611b09565b505050505050565b6000828152609760205260409020600101546108e981611f14565b6108f38383611f25565b505050565b610900611fac565b61090981612025565b50565b6109146119a1565b6001600160a01b0316816001600160a01b03161461098c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610894565b610996828261203d565b5050565b6109a2611fac565b6109aa6120c2565b565b6000805160206136618339815191525460ff1690565b6109cc86886134af565b805160021415610a3e576109e161063b6119a1565b610a395760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604482015263272a22a960e11b6064820152608401610894565b610be9565b6000610a498261216a565b60c9549092506001600160a01b0316905063430c2081610a676119a1565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610aad57600080fd5b505afa158015610ac1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae59190612f69565b80610b83575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c20819060440160206040518083038186803b158015610b3957600080fd5b505afa158015610b4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b719190612f69565b8015610b835750610b8361063b6119a1565b610be75760405162461bcd60e51b815260206004820152602f60248201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060448201526e282927ab22a22fa7a92fa7aba722a960891b6064820152608401610894565b505b610bf387896134af565b600281511015610c535760405162461bcd60e51b815260206004820152602560248201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456044820152642627abaf9960d91b6064820152608401610894565b610cc3610c9560008360018551610c6a9190613498565b81518110610c8857634e487b7160e01b600052603260045260246000fd5b60200260200101516121a5565b82600081518110610cb657634e487b7160e01b600052603260045260246000fd5b602002602001015161184b565b610ccb6109ac565b15610ce85760405162461bcd60e51b815260040161089490613336565b610d108a610cf68a8c6134af565b610d00898b6134af565b610d0a888a6134af565b87611b09565b50505050505050505050565b610d24611fac565b60005b815181101561099657610d60828281518110610d5357634e487b7160e01b600052603260045260246000fd5b6020026020010151612025565b80610d6a816135f6565b915050610d27565b610d7d61063b6119a1565b610dc95760405162461bcd60e51b815260206004820181905260248201527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e5445526044820152606401610894565b6001600160a01b038116610e1f5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610894565b610e288161225a565b610e3061104c565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610996573d6000803e3d6000fd5b610e6d611fac565b6109aa6000612272565b610e7f611fac565b60005b815181101561099657610ebb828281518110610eae57634e487b7160e01b600052603260045260246000fd5b602002602001015161225a565b80610ec5816135f6565b915050610e82565b610ed861063b6119a1565b610f245760405162461bcd60e51b815260206004820181905260248201527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e5445526044820152606401610894565b6001600160a01b038116610e285760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610894565b610f82611fac565b6109aa6122c4565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fce925084915083905061184b565b610fd66109ac565b15610ff35760405162461bcd60e51b815260040161089490613336565b6060611007876108bd886108b889896119b0565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b611043611fac565b6109098161225a565b6109aa6000805160206136818339815191526103466119a1565b61106e611fac565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906110a090859085906004016132f4565b600060405180830381600087803b1580156110ba57600080fd5b505af11580156110ce573d6000803e3d6000fd5b505060cb546001600160a01b031615915061099690505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061111790859085906004016132f4565b600060405180830381600087803b15801561113157600080fd5b505af11580156108c6573d6000803e3d6000fd5b600061082560008051602061368183398151915283611010565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526000906111b3906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6111c5611fac565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b6111ef611fac565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b611234611fac565b61099682828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061232c92505050565b600054610100900460ff16158080156112935750600054600160ff909116105b806112ad5750303b1580156112ad575060005460ff166001145b6113105760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610894565b6000805460ff191660011790558015611333576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce8054909116918516919091179055611391612448565b61139961247f565b6113a2826124b8565b6113aa6124df565b6040805161024081018252600661020082018181526563727970746f60d01b610220840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185528281526535b632bb32b960d11b81830152610160840152835180850185526002815261686960f01b8183015261018084015283518085018552918252656b726573757360d01b828201526101a083019190915282518084018452600580825264616e696d6560d81b828401526101c084019190915283518085019094528352646d616e676160d81b908301526101e081019190915260005b60108110156115ed576115db8282601081106115d157634e487b7160e01b600052603260045260246000fd5b602002015161232c565b806115e5816135f6565b9150506115a5565b50508015611007576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611681925084915083905061184b565b6116896109ac565b156116a65760405162461bcd60e51b815260040161089490613336565b610d108a6116b88b6108b88c8c6119b0565b6116c2888a6134af565b6116cc87896134af565b6001611b09565b6116db611fac565b60005b818110156108f35760c9546001600160a01b0316635096023984848481811061171757634e487b7160e01b600052603260045260246000fd5b905060200201602081019061172c9190612c8d565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561176d57600080fd5b505af1158015611781573d6000803e3d6000fd5b505050508080611790906135f6565b9150506116de565b6000828152609760205260409020600101546117b381611f14565b6108f3838361203d565b6117c5611fac565b6117ce8161251f565b6117ea5760405162461bcd60e51b815260040161089490613360565b600081815260cd6020526040812061180191612b32565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611837611fac565b61184081612545565b6109096000826125bb565b6118548261251f565b6118705760405162461bcd60e51b815260040161089490613360565b60006118a38260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a8160000151111561194c576118ce6118c2826000600a6125c5565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b8141561194c5760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610894565b61195582612604565b6108f35760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610894565b60006119ab612769565b905090565b606082826040516020016119c592919061318d565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816119f65790505090508281600081518110611a2f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611a58906135bb565b80601f0160208091040260200160405190810160405280929190818152602001828054611a84906135bb565b8015611ad15780601f10611aa657610100808354040283529160200191611ad1565b820191906000526020600020905b815481529060010190602001808311611ab457829003601f168201915b505050505081600181518110611af757634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b600080611b158661216a565b91509150828015611b27575060028651115b8015611bb8575060c9546040516331a9108f60e11b8152600481018390526001600160a01b03898116921690636352211e9060240160206040518083038186803b158015611b7457600080fd5b505afa158015611b88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bac9190612ca9565b6001600160a01b031614155b15611c185760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e616765723a20524556455253455f5245434f52445f4e60448201526913d517d0531313d5d15160b21b6064820152608401610894565b60c954604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611c5c57600080fd5b505afa158015611c70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c949190612f69565b8015611d22575060c9546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e9060240160206040518083038186803b158015611cdf57600080fd5b505afa158015611cf3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d179190612ca9565b6001600160a01b0316145b15611d965760c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690611d5f908a908a908a908a908a9060040161322a565b600060405180830381600087803b158015611d7957600080fd5b505af1158015611d8d573d6000803e3d6000fd5b50505050611007565b611d9f826127b0565b611da88661280f565b8015611db5575085516002145b15611ea15760ca5486516001600160a01b039091169063c36c21259089908990600090611df257634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b168152611e2c9392916001600160a01b031690600401613289565b600060405180830381600087803b158015611e4657600080fd5b505af1158015611e5a573d6000803e3d6000fd5b50505050600085511115611e9c5760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490611d5f908890889087906004016132be565b611007565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790611ed9908a908a908a908a908a9060040161322a565b600060405180830381600087803b158015611ef357600080fd5b505af1158015611f07573d6000803e3d6000fd5b5050505050505050505050565b61090981611f206119a1565b612869565b611f2f8282611010565b6109965760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611f686119a1565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611fb46119a1565b6001600160a01b0316611fcf6033546001600160a01b031690565b6001600160a01b0316146109aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610894565b61090960008051602061368183398151915282611798565b6120478282611010565b156109965760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916905561207e6119a1565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6120ca6109ac565b61210d5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610894565b600080516020613661833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61214d6119a1565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b801561219f5782915061218b8285610c6a600185613498565b925080612197816135a4565b915050612172565b50915091565b60008151600014156121f95760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610894565b828260405160200161220b9190613171565b6040516020818303038152906040528051906020012060405160200161223b929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610909600080516020613681833981519152826125bb565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6122cc6109ac565b156122e95760405162461bcd60e51b815260040161089490613336565b600080516020613661833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861214d6119a1565b60006123396000836121a5565b600081815260cd60209081526040909120845192935061235d929091850190612b6c565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf89808360405161238e9190613323565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b1580156123da57600080fd5b505afa1580156123ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124129190612f69565b6109965760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c609061111790849086906004016133ed565b600054610100900460ff1661246f5760405162461bcd60e51b8152600401610894906133a2565b6109aa61247a6119a1565b612272565b600054610100900460ff166124a65760405162461bcd60e51b8152600401610894906133a2565b6109aa60006124b36119a1565b6125bb565b600054610100900460ff166111ef5760405162461bcd60e51b8152600401610894906133a2565b600054610100900460ff166125065760405162461bcd60e51b8152600401610894906133a2565b600080516020613661833981519152805460ff19169055565b600081815260cd60205260408120805482919061253b906135bb565b9050119050919050565b61254d611fac565b6001600160a01b0381166125b25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610894565b61090981612272565b6109968282611f25565b604080518082019091526000808252602082015260405180604001604052808381526020018486602001516125fa9190613461565b9052949350505050565b600081516000141561261857506000919050565b60208201805160f81c60308110801590612636575060398160ff1611155b158015612658575060618160ff16101580156126565750607a8160ff1611155b155b15612667575060009392505050565b835160018111156126d55761268983612681600184613498565b015160f81c90565b915060308260ff16101580156126a3575060398260ff1611155b1580156126c5575060618260ff16101580156126c35750607a8260ff1611155b155b156126d557506000949350505050565b60015b6126e3600183613498565b81101561275d578381015160f81c9250602d8314801590612719575060308360ff1610158015612717575060398360ff1611155b155b801561273a575060618360ff16101580156127385750607a8360ff1611155b155b1561274b5750600095945050505050565b80612755816135f6565b9150506126d8565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b03163314156127ab575060331936013560601c90565b503390565b6127b98161115f565b156128065760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610894565b610909816128cd565b60008061282660008460018651610c6a9190613498565b60ca549091506001600160a01b0316158015906128625750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6128738282611010565b6109965761288b816001600160a01b03166014612951565b612896836020612951565b6040516020016128a79291906131b5565b60408051601f198184030181529082905262461bcd60e51b825261089491600401613323565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061290c9060600161119a565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b60606000612960836002613479565b61296b906002613461565b6001600160401b0381111561299057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156129ba576020820181803683370190505b509050600360fc1b816000815181106129e357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612a2057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612a44846002613479565b612a4f906001613461565b90505b6001811115612ae3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612a9157634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612ab557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612adc816135a4565b9050612a52565b5083156128625760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610894565b508054612b3e906135bb565b6000825580601f10612b4e575050565b601f0160209004906000526020600020908101906109099190612bf0565b828054612b78906135bb565b90600052602060002090601f016020900481019282612b9a5760008555612be0565b82601f10612bb357805160ff1916838001178555612be0565b82800160010185558215612be0579182015b82811115612be0578251825591602001919060010190612bc5565b50612bec929150612bf0565b5090565b5b80821115612bec5760008155600101612bf1565b60008083601f840112612c16578182fd5b5081356001600160401b03811115612c2c578182fd5b6020830191508360208260051b8501011115612c4757600080fd5b9250929050565b60008083601f840112612c5f578182fd5b5081356001600160401b03811115612c75578182fd5b602083019150836020828501011115612c4757600080fd5b600060208284031215612c9e578081fd5b81356128628161363d565b600060208284031215612cba578081fd5b81516128628161363d565b60008060008060008060008060a0898b031215612ce0578384fd5b8835612ceb8161363d565b975060208901356001600160401b0380821115612d06578586fd5b612d128c838d01612c05565b909950975060408b0135915080821115612d2a578586fd5b612d368c838d01612c05565b909750955060608b0135915080821115612d4e578485fd5b50612d5b8b828c01612c05565b9094509250506080890135612d6f81613652565b809150509295985092959890939650565b60008060008060608587031215612d95578384fd5b8435612da08161363d565b93506020850135925060408501356001600160401b03811115612dc1578283fd5b612dcd87828801612c4e565b95989497509550505050565b60008060008060008060008060a0898b031215612df4578182fd5b8835612dff8161363d565b97506020890135965060408901356001600160401b0380821115612e21578384fd5b612e2d8c838d01612c4e565b909850965060608b0135915080821115612e45578384fd5b612e518c838d01612c05565b909650945060808b0135915080821115612e69578384fd5b50612e768b828c01612c05565b999c989b5096995094979396929594505050565b60008060208385031215612e9c578182fd5b82356001600160401b03811115612eb1578283fd5b612ebd85828601612c05565b90969095509350505050565b60006020808385031215612edb578182fd5b82356001600160401b03811115612ef0578283fd5b8301601f81018513612f00578283fd5b8035612f13612f0e8261343e565b61340e565b80828252848201915084840188868560051b8701011115612f32578687fd5b8694505b83851015612f5d578035612f498161363d565b835260019490940193918501918501612f36565b50979650505050505050565b600060208284031215612f7a578081fd5b815161286281613652565b600060208284031215612f96578081fd5b5035919050565b60008060408385031215612faf578182fd5b823591506020830135612fc18161363d565b809150509250929050565b600060208284031215612fdd578081fd5b81356001600160e01b031981168114612862578182fd5b60008060008060008060c0878903121561300c578384fd5b86356130178161363d565b955060208701356130278161363d565b945060408701356130378161363d565b935060608701356130478161363d565b925060808701356130578161363d565b915060a08701356130678161363d565b809150509295509295509295565b60008060208385031215613087578182fd5b82356001600160401b0381111561309c578283fd5b612ebd85828601612c4e565b6000806000604084860312156130bc578081fd5b8335925060208401356001600160401b038111156130d8578182fd5b6130e486828701612c4e565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b85811015613138578284038952613126848351613145565b9885019893509084019060010161310e565b5091979650505050505050565b6000815180845261315d816020860160208601613574565b601f01601f19169290920160200192915050565b60008251613183818460208701613574565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516131ed816017850160208801613574565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161321e816028840160208801613574565b01602801949350505050565b6001600160a01b038616815260a06020820181905260009061324e908301876130f1565b828103604084015261326081876130f1565b9050828103606084015261327481866130f1565b91505082151560808301529695505050505050565b600060018060a01b038086168352606060208401526132ab6060840186613145565b9150808416604084015250949350505050565b6060815260006132d160608301866130f1565b82810360208401526132e381866130f1565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020815260006128626020830184613145565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8281526040602082015260006134066040830184613145565b949350505050565b604051601f8201601f191681016001600160401b038111828210171561343657613436613627565b604052919050565b60006001600160401b0382111561345757613457613627565b5060051b60200190565b6000821982111561347457613474613611565b500190565b600081600019048311821515161561349357613493613611565b500290565b6000828210156134aa576134aa613611565b500390565b60006134bd612f0e8461343e565b808482526020808301925084368760051b870111156134da578485fd5b845b878110156135685781356001600160401b03808211156134fa578788fd5b90880190601f368184011261350d578889fd5b82358281111561351f5761351f613627565b613530818301601f1916880161340e565b9250808352368782860101111561354557898afd5b8087850188850137820186018990525086525093820193908201906001016134dc565b50919695505050505050565b60005b8381101561358f578181015183820152602001613577565b8381111561359e576000848401525b50505050565b6000816135b3576135b3613611565b506000190190565b600181811c908216806135cf57607f821691505b602082108114156135f057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561360a5761360a613611565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461090957600080fd5b801515811461090957600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
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
