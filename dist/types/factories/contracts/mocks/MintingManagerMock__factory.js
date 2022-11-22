"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManagerMock__factory = void 0;
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
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "upgradeAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50613ce0806100206000396000f3fe60806040526004361061027d5760003560e01c8063906cecc11161014f578063b9998a24116100c1578063d53913931161007a578063d5391393146107ce578063d547741f146107f0578063d6ab22ed14610810578063ec52738914610830578063f2fde38b14610850578063ffa1ad741461087057600080fd5b8063b9998a241461070e578063c3a3bc001461072e578063cc2c3fc41461074e578063ceeb4f501461076e578063d1f5692c1461078e578063d4a32ad6146107ae57600080fd5b8063a217fddf11610113578063a217fddf1461062c578063a3f4df7e14610641578063a849d65c1461068e578063aa271e1a146106ae578063ae31844a146106ce578063b0aa98c7146106ee57600080fd5b8063906cecc11461059757806391d14854146105b7578063983b2d56146105d757806398650275146105f757806399e0dd7c1461060c57600080fd5b8063463c4bcb116101f3578063634486da116101ac578063634486da14610509578063715018a61461051c57806371e2a6571461053157806381c81d35146105515780638456cb59146105645780638da5cb5b1461057957600080fd5b8063463c4bcb14610426578063572b6c05146104465780635b6fa8db146104945780635c975abb146104b45780635cd7e3b3146104c95780635fc1964f146104e957600080fd5b8063268b15ed11610245578063268b15ed146103595780632f2ff15d146103795780633092afd51461039957806336568abe146103b95780633f41b614146103d95780633f4ba83a1461041157600080fd5b806301ffc9a7146102825780630e36a87d146102b757806310921f12146102e45780631459457a146102f9578063248a9ca31461031b575b600080fd5b34801561028e57600080fd5b506102a261029d3660046133f1565b6108a1565b60405190151581526020015b60405180910390f35b3480156102c357600080fd5b506102d76102d23660046132af565b6108d8565b6040516102ae919061370b565b3480156102f057600080fd5b506102a26109af565b34801561030557600080fd5b50610319610314366004613419565b6109dc565b005b34801561032757600080fd5b5061034b6103363660046133aa565b60009081526097602052604090206001015490565b6040519081526020016102ae565b34801561036557600080fd5b506103196103743660046134bc565b610d2d565b34801561038557600080fd5b506103196103943660046133c2565b610dbf565b3480156103a557600080fd5b506103196103b436600461300a565b610de9565b3480156103c557600080fd5b506103196103d43660046133c2565b610dfd565b3480156103e557600080fd5b5060c9546103f9906001600160a01b031681565b6040516001600160a01b0390911681526020016102ae565b34801561041d57600080fd5b50610319610e8b565b34801561043257600080fd5b506103196104413660046133aa565b610e9d565b34801561045257600080fd5b506102a261046136600461300a565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156104a057600080fd5b5060cc546103f9906001600160a01b031681565b3480156104c057600080fd5b506102a2610ecd565b3480156104d557600080fd5b506103196104e43660046130ea565b610ee3565b3480156104f557600080fd5b506103196105043660046132ee565b6110dd565b61031961051736600461300a565b611133565b34801561052857600080fd5b506103196111f6565b34801561053d57600080fd5b5061031961054c3660046132ee565b611208565b61031961055f36600461300a565b61125e565b34801561057057600080fd5b506103196112db565b34801561058557600080fd5b506033546001600160a01b03166103f9565b3480156105a357600080fd5b506103196105b23660046131a5565b6112eb565b3480156105c357600080fd5b506102a26105d23660046133c2565b611371565b3480156105e357600080fd5b506103196105f236600461300a565b61139c565b34801561060357600080fd5b506103196113ad565b34801561061857600080fd5b50610319610627366004613489565b6113c7565b34801561063857600080fd5b5061034b600081565b34801561064d57600080fd5b50610681604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102ae91906137f0565b34801561069a57600080fd5b5060cb546103f9906001600160a01b031681565b3480156106ba57600080fd5b506102a26106c936600461300a565b6114a6565b3480156106da57600080fd5b506103196106e93660046132af565b6114c0565b3480156106fa57600080fd5b506102a26107093660046133aa565b6115cb565b34801561071a57600080fd5b5061031961072936600461300a565b611638565b34801561073a57600080fd5b50610319610749366004613489565b61167d565b34801561075a57600080fd5b5060ca546103f9906001600160a01b031681565b34801561077a57600080fd5b506103196107893660046131fe565b6116c4565b34801561079a57600080fd5b506103196107a93660046132af565b61175a565b3480156107ba57600080fd5b506103196107c9366004613042565b61181f565b3480156107da57600080fd5b5061034b600080516020613cb483398151915281565b3480156107fc57600080fd5b5061031961080b3660046133c2565b6119a5565b34801561081c57600080fd5b5061031961082b3660046132af565b6119ca565b34801561083c57600080fd5b5061031961084b3660046133aa565b611c5b565b34801561085c57600080fd5b5061031961086b36600461300a565b611ccd565b34801561087c57600080fd5b5061068160405180604001604052806005815260200164302e342e3560d81b81525081565b60006001600160e01b03198216637965db0b60e01b14806108d257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060816001600160401b0381111561090057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610929578160200160208202803683370190505b50905060005b828110156109a85761096684848381811061095a57634e487b7160e01b600052603260045260246000fd5b905060200201356115cb565b82828151811061098657634e487b7160e01b600052603260045260246000fd5b91151560209283029190910190910152806109a081613c29565b91505061092f565b5092915050565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b5460ff16919050565b600054610100900460ff16158080156109fc5750600054600160ff909116105b80610a165750303b158015610a16575060005460ff166001145b610a7e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610aa1576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc805492861692909116919091179055610af3611ce9565b610afb611d20565b610b0482611d59565b610b0c611d80565b610b14611ddc565b604080516101c081018252600661018082018181526563727970746f60d01b6101a0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b8183015261014084015283518085019094529083526535b632bb32b960d11b9083015261016081019190915260005b600c811015610cdd57610ccb8282600c8110610cc157634e487b7160e01b600052603260045260246000fd5b6020020151611e19565b80610cd581613c29565b915050610c95565b50508015610d25576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d719250849150839050611f35565b610d79610ecd565b15610d965760405162461bcd60e51b8152600401610a759061387d565b6060610d25610da361208b565b610db688610db1898961209a565b6120c6565b838460016121f3565b600082815260976020526040902060010154610dda816124ef565b610de48383612500565b505050565b610df1612587565b610dfa81612600565b50565b610e0561208b565b6001600160a01b0316816001600160a01b031614610e7d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610a75565b610e878282612618565b5050565b610e93612587565b610e9b61269d565b565b610ea86106c961208b565b610ec45760405162461bcd60e51b8152600401610a7590613848565b610dfa81612745565b6000600080516020613c948339815191526109d3565b610eed8688613ae2565b805160021415610f2357610f026106c961208b565b610f1e5760405162461bcd60e51b8152600401610a75906138a7565b610fe8565b6000610f2e82612814565b60c9549092506001600160a01b0316905063430c2081610f4c61208b565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610f9257600080fd5b505afa158015610fa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fca919061338e565b610fe65760405162461bcd60e51b8152600401610a7590613978565b505b610ff28789613ae2565b6002815110156110145760405162461bcd60e51b8152600401610a7590613803565b6110846110566000836001855161102b9190613acb565b8151811061104957634e487b7160e01b600052603260045260246000fd5b602002602001015161284f565b8260008151811061107757634e487b7160e01b600052603260045260246000fd5b6020026020010151611f35565b61108c610ecd565b156110a95760405162461bcd60e51b8152600401610a759061387d565b6110d18a6110b78a8c613ae2565b6110c1898b613ae2565b6110cb888a613ae2565b876121f3565b50505050505050505050565b6110e5612587565b60005b8151811015610e875761112182828151811061111457634e487b7160e01b600052603260045260246000fd5b6020026020010151612600565b8061112b81613c29565b9150506110e8565b61113e6106c961208b565b61115a5760405162461bcd60e51b8152600401610a7590613848565b6001600160a01b0381166111b05760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610a75565b6111b981612904565b6111c16113ad565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610e87573d6000803e3d6000fd5b6111fe612587565b610e9b600061291c565b611210612587565b60005b8151811015610e875761124c82828151811061123f57634e487b7160e01b600052603260045260246000fd5b6020026020010151612904565b8061125681613c29565b915050611213565b6112696106c961208b565b6112855760405162461bcd60e51b8152600401610a7590613848565b6001600160a01b0381166111b95760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610a75565b6112e3612587565b610e9b61296e565b8282828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061132f9250849150839050611f35565b611337610ecd565b156113545760405162461bcd60e51b8152600401610a759061387d565b606061136887610db688610db1898961209a565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6113a4612587565b610dfa81612904565b610e9b600080516020613cb48339815191526103d461208b565b6113cf612587565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061140190859085906004016137c1565b600060405180830381600087803b15801561141b57600080fd5b505af115801561142f573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610e8790505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061147890859085906004016137c1565b600060405180830381600087803b15801561149257600080fd5b505af1158015610d25573d6000803e3d6000fd5b60006108d2600080516020613cb483398151915283611371565b6114cb6106c961208b565b6114e75760405162461bcd60e51b8152600401610a7590613848565b60c9546040516000916001600160a01b03169061150a9085908590602401613787565b60408051601f198184030181529181526020820180516001600160e01b0316635718c22560e11b1790525161153f9190613585565b6000604051808303816000865af19150503d806000811461157c576040519150601f19603f3d011682016040523d82523d6000602084013e611581565b606091505b5050905080610de45760405162461bcd60e51b81526020600482015260166024820152751d5c19dc985919505b1b081b5bd8dac819985a5b195960521b6044820152606401610a75565b60006115d56109af565b1580156108d25750604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810183905261162e906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b611640612587565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b611685612587565b610e8782828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e1992505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117089250849150839050611f35565b611710610ecd565b1561172d5760405162461bcd60e51b8152600401610a759061387d565b6110d18a61173f8b610db18c8c61209a565b611749888a613ae2565b6117538789613ae2565b60016121f3565b611762612587565b60005b81811015610de45760c9546001600160a01b0316635096023984848481811061179e57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906117b3919061300a565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156117f457600080fd5b505af1158015611808573d6000803e3d6000fd5b50505050808061181790613c29565b915050611765565b6118298587613ae2565b80516002141561185f5761183e6106c961208b565b61185a5760405162461bcd60e51b8152600401610a75906138a7565b611924565b600061186a82612814565b60c9549092506001600160a01b0316905063430c208161188861208b565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b1580156118ce57600080fd5b505afa1580156118e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611906919061338e565b6119225760405162461bcd60e51b8152600401610a7590613978565b505b61192e8688613ae2565b6002815110156119505760405162461bcd60e51b8152600401610a7590613803565b6119676110566000836001855161102b9190613acb565b61196f610ecd565b1561198c5760405162461bcd60e51b8152600401610a759061387d565b61199a8961173f898b613ae2565b505050505050505050565b6000828152609760205260409020600101546119c0816124ef565b610de48383612618565b6119d56106c961208b565b6119f15760405162461bcd60e51b8152600401610a7590613848565b60005b81811015610de457611aaf838383818110611a1f57634e487b7160e01b600052603260045260246000fd5b9050602002810190611a319190613a2c565b60400135848484818110611a5557634e487b7160e01b600052603260045260246000fd5b9050602002810190611a679190613a2c565b611a759060208101906139e8565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f3592505050565b6000611b64848484818110611ad457634e487b7160e01b600052603260045260246000fd5b9050602002810190611ae69190613a2c565b60400135858585818110611b0a57634e487b7160e01b600052603260045260246000fd5b9050602002810190611b1c9190613a2c565b611b2a9060208101906139e8565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506120c692505050565b90506000611b7182612814565b5060c954604051634f558e7960e01b8152600481018390529192506060916001600160a01b0390911690634f558e799060240160206040518083038186803b158015611bbc57600080fd5b505afa158015611bd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf4919061338e565b611c4557611c45868686818110611c1b57634e487b7160e01b600052603260045260246000fd5b9050602002810190611c2d9190613a2c565b611c3b90602081019061300a565b84838460006121f3565b5050508080611c5390613c29565b9150506119f4565b611c63612587565b611c6c816129d6565b611c885760405162461bcd60e51b8152600401610a75906138eb565b600081815260cd60205260408120611c9f91612eaf565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611cd5612587565b611cde816129fc565b610dfa600082612a72565b600054610100900460ff16611d105760405162461bcd60e51b8152600401610a759061392d565b610e9b611d1b61208b565b61291c565b600054610100900460ff16611d475760405162461bcd60e51b8152600401610a759061392d565b610e9b6000611d5461208b565b612a72565b600054610100900460ff166116405760405162461bcd60e51b8152600401610a759061392d565b600054610100900460ff16611da75760405162461bcd60e51b8152600401610a759061392d565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b805460ff1916911515919091179055565b600054610100900460ff16611e035760405162461bcd60e51b8152600401610a759061392d565b6000600080516020613c94833981519152611dcb565b6000611e2660008361284f565b600081815260cd602090815260409091208451929350611e4a929091850190612ee9565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611e7b91906137f0565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611ec757600080fd5b505afa158015611edb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eff919061338e565b610e875760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c609061147890849086906004016139c7565b611f3e826129d6565b611f5a5760405162461bcd60e51b8152600401610a75906138eb565b6000611f8d8260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a8160000151111561203657611fb8611fac826000600a612a7c565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b814156120365760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610a75565b61203f82612abb565b610de45760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610a75565b6000612095612b67565b905090565b606082826040516020016120af9291906135a1565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816120e0579050509050828160008151811061211957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd6000858152602001908152602001600020805461214290613bee565b80601f016020809104026020016040519081016040528092919081815260200182805461216e90613bee565b80156121bb5780601f10612190576101008083540402835291602001916121bb565b820191906000526020600020905b81548152906001019060200180831161219e57829003601f168201915b5050505050816001815181106121e157634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b60006121fe85612814565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b15801561224457600080fd5b505afa158015612258573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061227c919061338e565b801561230a575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b1580156122c757600080fd5b505afa1580156122db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ff9190613026565b6001600160a01b0316145b1561237e5760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f9061234790899085908990899089906004016136d2565b600060405180830381600087803b15801561236157600080fd5b505af1158015612375573d6000803e3d6000fd5b50505050610d25565b61238781612bae565b61239085612c10565b801561239d575084516002145b156124895760ca5485516001600160a01b039091169063c36c212590889088906000906123da57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526124149392916001600160a01b03169060040161369d565b600060405180830381600087803b15801561242e57600080fd5b505af1158015612442573d6000803e3d6000fd5b505050506000845111156124845760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae749061234790879087908690600401613751565b610d25565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b7906124c1908990899089908990899060040161363e565b600060405180830381600087803b1580156124db57600080fd5b505af11580156110d1573d6000803e3d6000fd5b610dfa816124fb61208b565b612c6a565b61250a8282611371565b610e875760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561254361208b565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61258f61208b565b6001600160a01b03166125aa6033546001600160a01b031690565b6001600160a01b031614610e9b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a75565b610dfa600080516020613cb4833981519152826119a5565b6126228282611371565b15610e875760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916905561265961208b565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6126a5610ecd565b6126e85760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610a75565b600080516020613c94833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61272861208b565b6040516001600160a01b03909116815260200160405180910390a1565b61274d6109af565b156127905760405162461bcd60e51b8152602060048201526013602482015272109b1bd8dadb1a5cdd0e88111254d050931151606a1b6044820152606401610a75565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526001906127cf90606001611615565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b801561284957829150612835828561102b600185613acb565b92508061284181613bd7565b91505061281c565b50915091565b60008151600014156128a35760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610a75565b82826040516020016128b59190613585565b604051602081830303815290604052805190602001206040516020016128e5929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610dfa600080516020613cb483398151915282612a72565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612976610ecd565b156129935760405162461bcd60e51b8152600401610a759061387d565b600080516020613c94833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861272861208b565b600081815260cd6020526040812080548291906129f290613bee565b9050119050919050565b612a04612587565b6001600160a01b038116612a695760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a75565b610dfa8161291c565b610e878282612500565b60408051808201909152600080825260208201526040518060400160405280838152602001848660200151612ab19190613a94565b9052949350505050565b6000815160001415612acf57506000919050565b6020820160005b8351811015612b5d576000612aee8383015160f81c90565b90508060ff16602d14158015612b19575060308160ff1610158015612b17575060398160ff1611155b155b8015612b3a575060618160ff1610158015612b385750607a8160ff1611155b155b15612b4a57506000949350505050565b5080612b5581613c29565b915050612ad6565b5060019392505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b0316331415612ba9575060331936013560601c90565b503390565b612bb66109af565b610dfa57612bc3816115cb565b15610ec45760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610a75565b600080612c276000846001865161102b9190613acb565b60ca549091506001600160a01b031615801590612c635750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b612c748282611371565b610e8757612c8c816001600160a01b03166014612cce565b612c97836020612cce565b604051602001612ca89291906135c9565b60408051601f198184030181529082905262461bcd60e51b8252610a75916004016137f0565b60606000612cdd836002613aac565b612ce8906002613a94565b6001600160401b03811115612d0d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612d37576020820181803683370190505b509050600360fc1b81600081518110612d6057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612d9d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612dc1846002613aac565b612dcc906001613a94565b90505b6001811115612e60576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612e0e57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612e3257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612e5981613bd7565b9050612dcf565b508315612c635760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610a75565b508054612ebb90613bee565b6000825580601f10612ecb575050565b601f016020900490600052602060002090810190610dfa9190612f6d565b828054612ef590613bee565b90600052602060002090601f016020900481019282612f175760008555612f5d565b82601f10612f3057805160ff1916838001178555612f5d565b82800160010185558215612f5d579182015b82811115612f5d578251825591602001919060010190612f42565b50612f69929150612f6d565b5090565b5b80821115612f695760008155600101612f6e565b60008083601f840112612f93578182fd5b5081356001600160401b03811115612fa9578182fd5b6020830191508360208260051b8501011115612fc457600080fd5b9250929050565b60008083601f840112612fdc578182fd5b5081356001600160401b03811115612ff2578182fd5b602083019150836020828501011115612fc457600080fd5b60006020828403121561301b578081fd5b8135612c6381613c70565b600060208284031215613037578081fd5b8151612c6381613c70565b60008060008060008060006080888a03121561305c578283fd5b873561306781613c70565b965060208801356001600160401b0380821115613082578485fd5b61308e8b838c01612f82565b909850965060408a01359150808211156130a6578485fd5b6130b28b838c01612f82565b909650945060608a01359150808211156130ca578384fd5b506130d78a828b01612f82565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215613105578182fd5b883561311081613c70565b975060208901356001600160401b038082111561312b578384fd5b6131378c838d01612f82565b909950975060408b013591508082111561314f578384fd5b61315b8c838d01612f82565b909750955060608b0135915080821115613173578384fd5b506131808b828c01612f82565b909450925050608089013561319481613c85565b809150509295985092959890939650565b600080600080606085870312156131ba578182fd5b84356131c581613c70565b93506020850135925060408501356001600160401b038111156131e6578283fd5b6131f287828801612fcb565b95989497509550505050565b60008060008060008060008060a0898b031215613219578182fd5b883561322481613c70565b97506020890135965060408901356001600160401b0380821115613246578384fd5b6132528c838d01612fcb565b909850965060608b013591508082111561326a578384fd5b6132768c838d01612f82565b909650945060808b013591508082111561328e578384fd5b5061329b8b828c01612f82565b999c989b5096995094979396929594505050565b600080602083850312156132c1578182fd5b82356001600160401b038111156132d6578283fd5b6132e285828601612f82565b90969095509350505050565b60006020808385031215613300578182fd5b82356001600160401b03811115613315578283fd5b8301601f81018513613325578283fd5b803561333861333382613a71565b613a41565b80828252848201915084840188868560051b8701011115613357578687fd5b8694505b8385101561338257803561336e81613c70565b83526001949094019391850191850161335b565b50979650505050505050565b60006020828403121561339f578081fd5b8151612c6381613c85565b6000602082840312156133bb578081fd5b5035919050565b600080604083850312156133d4578182fd5b8235915060208301356133e681613c70565b809150509250929050565b600060208284031215613402578081fd5b81356001600160e01b031981168114612c63578182fd5b600080600080600060a08688031215613430578283fd5b853561343b81613c70565b9450602086013561344b81613c70565b9350604086013561345b81613c70565b9250606086013561346b81613c70565b9150608086013561347b81613c70565b809150509295509295909350565b6000806020838503121561349b578182fd5b82356001600160401b038111156134b0578283fd5b6132e285828601612fcb565b6000806000604084860312156134d0578081fd5b8335925060208401356001600160401b038111156134ec578182fd5b6134f886828701612fcb565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b8581101561354c57828403895261353a848351613559565b98850198935090840190600101613522565b5091979650505050505050565b60008151808452613571816020860160208601613ba7565b601f01601f19169290920160200192915050565b60008251613597818460208701613ba7565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351613601816017850160208801613ba7565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351613632816028840160208801613ba7565b01602801949350505050565b6001600160a01b038616815260a06020820181905260009061366290830187613505565b82810360408401526136748187613505565b905082810360608401526136888186613505565b91505082151560808301529695505050505050565b600060018060a01b038086168352606060208401526136bf6060840186613559565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a0604082015260006136f960a0830186613505565b82810360608401526136888186613505565b6020808252825182820181905260009190848201906040850190845b81811015613745578351151583529284019291840191600101613727565b50909695505050505050565b6060815260006137646060830186613505565b82810360208401526137768186613505565b915050826040830152949350505050565b6020808252810182905260006001600160fb1b038311156137a6578081fd5b8260051b808560408501379190910160400190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b602081526000612c636020830184613559565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b8281526040602082015260006139e06040830184613559565b949350505050565b6000808335601e198436030181126139fe578283fd5b8301803591506001600160401b03821115613a17578283fd5b602001915036819003821315612fc457600080fd5b60008235605e19833603018112613597578182fd5b604051601f8201601f191681016001600160401b0381118282101715613a6957613a69613c5a565b604052919050565b60006001600160401b03821115613a8a57613a8a613c5a565b5060051b60200190565b60008219821115613aa757613aa7613c44565b500190565b6000816000190483118215151615613ac657613ac6613c44565b500290565b600082821015613add57613add613c44565b500390565b6000613af061333384613a71565b808482526020808301925084368760051b87011115613b0d578485fd5b845b87811015613b9b5781356001600160401b0380821115613b2d578788fd5b90880190601f3681840112613b40578889fd5b823582811115613b5257613b52613c5a565b613b63818301601f19168801613a41565b92508083523687828601011115613b7857898afd5b808785018885013782018601899052508652509382019390820190600101613b0f565b50919695505050505050565b60005b83811015613bc2578181015183820152602001613baa565b83811115613bd1576000848401525b50505050565b600081613be657613be6613c44565b506000190190565b600181811c90821680613c0257607f821691505b60208210811415613c2357634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613c3d57613c3d613c44565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610dfa57600080fd5b8015158114610dfa57600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManagerMock__factory extends ethers_1.ContractFactory {
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
exports.MintingManagerMock__factory = MintingManagerMock__factory;
MintingManagerMock__factory.bytecode = _bytecode;
MintingManagerMock__factory.abi = _abi;
