"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistry__factory = void 0;
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
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
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
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
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
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
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
        name: "ResetRecords",
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
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
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
        name: "BATCH_LIMIT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
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
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[][]",
                name: "domains",
                type: "string[][]",
            },
        ],
        name: "backfillReverseNames",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
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
        name: "depositToPolygon",
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
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
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
        name: "exists",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
                type: "string",
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
        name: "getApproved",
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
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
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
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
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
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
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
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
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
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "mintWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
        name: "nonceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
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
        name: "ownerOf",
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
        inputs: [
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
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
        name: "reset",
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
        name: "resolverOf",
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
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseNameOf",
        outputs: [
            {
                internalType: "string",
                name: "reverseUri",
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
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
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
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
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
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "setReverse",
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
        inputs: [],
        name: "symbol",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
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
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "unlockWithRecords",
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
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
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
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
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
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614ea4806100206000396000f3fe608060405234801561001057600080fd5b50600436106103835760003560e01c80636ccbae5f116101de578063b88d4fde1161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610824578063f7df5c6014610837578063f8c8765e1461084a578063ffa1ad741461085d57600080fd5b8063e985e9c5146107c6578063ebf0c71714610802578063ec129eea14610809578063f25eb5c11461081c57600080fd5b8063bebec6b4116100e9578063bebec6b41461077a578063c87b56dd1461078d578063ce92b33e146107a0578063cf2c52cb146107b357600080fd5b8063b88d4fde14610741578063ba5d40b714610754578063bb5b27e11461076757600080fd5b806399e0dd7c1161017c578063a424740011610156578063a4247400146106e7578063ab3b87fe146106fa578063b3f9e4cb1461070d578063b85afd281461072057600080fd5b806399e0dd7c14610695578063a22cb465146106a8578063a3f4df7e146106bb57600080fd5b806394d008ef116101b857806394d008ef1461065f5780639508b1c4146106725780639559c0bd1461068557806395d89b411461068d57600080fd5b80636ccbae5f1461061857806370a08231146106395780637e37479e1461064c57600080fd5b806342842e0e116102b857806350382c1a116102565780636352211e116102305780636352211e146105be578063638e5c78146105d1578063663f7b2a146105e4578063672b9f81146105f757600080fd5b806350382c1a1461057c578063509602391461058f578063572b6c05146105a257600080fd5b806344d5f66c1161029257806344d5f66c1461053057806347c81699146105435780634a72584d146105565780634f558e791461056957600080fd5b806342842e0e146104f757806342966c681461050a578063430c20811461051d57600080fd5b80631bf7e13e11610325578063276fabb1116102ff578063276fabb11461049d57806327f18975146104be578063310bd74b146104d157806340c10f19146104e457600080fd5b80631bf7e13e146104645780631f71be061461047757806323b872dd1461048a57600080fd5b8063095ea7b311610361578063095ea7b3146103f0578063150b7a02146104055780631bd8cc1a146104315780631be5e7ed1461045157600080fd5b806301ffc9a71461038857806306fdde03146103b0578063081812fc146103c5575b600080fd5b61039b610396366004614520565b610881565b60405190151581526020015b60405180910390f35b6103b8610892565b6040516103a79190614a4d565b6103d86103d336600461474e565b610924565b6040516001600160a01b0390911681526020016103a7565b6104036103fe3660046141fe565b61094b565b005b610418610413366004613ff0565b610964565b6040516001600160e01b031990911681526020016103a7565b61044461043f3660046143e1565b610abf565b6040516103a791906149e8565b6103b861045f366004614688565b610bdf565b6103b86104723660046146ef565b610c2a565b6104036104853660046140c9565b610d35565b610403610498366004613fb0565b610ddc565b6104b06104ab366004614332565b610e2f565b6040519081526020016103a7565b6104036104cc366004614371565b610e3e565b6104036104df36600461474e565b610e86565b6104036104f23660046141fe565b610ec1565b610403610505366004613fb0565b610f0e565b61040361051836600461474e565b610f29565b61039b61052b3660046141fe565b610f6d565b61040361053e366004614282565b610f79565b61040361055136600461462a565b611059565b610403610564366004614796565b611098565b61039b61057736600461474e565b6110de565b61040361058a3660046146bd565b6110fd565b61040361059d366004613ee5565b611133565b61039b6105b0366004613ee5565b6001600160a01b0316301490565b6103d86105cc36600461474e565b611193565b6104036105df36600461474e565b6111f3565b6104036105f236600461442a565b61123e565b61060a6106053660046147e6565b611277565b6040516103a7929190614a60565b6104b061062636600461474e565b6000908152610100602052604090205490565b6104b0610647366004613ee5565b61128f565b6104b061065a366004613ee5565b611315565b61040361066d366004614229565b611346565b610403610680366004614558565b611395565b6104b0601481565b6103b861141c565b6104036106a33660046145f7565b61142b565b6104036106b6366004614181565b6114b1565b6103b86040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b61039b6106f53660046146ef565b6114c3565b6104036107083660046141fe565b61150e565b6103d861071b36600461474e565b611553565b61073361072e3660046143e1565b61157d565b6040516103a79291906149fb565b61040361074f366004614060565b6116e5565b6104036107623660046140c9565b61172c565b6103b861077536600461474e565b61179d565b6103b8610788366004613ee5565b61183f565b6103b861079b36600461474e565b611909565b6104036107ae366004614371565b61196f565b6104036107c13660046141ac565b6119ae565b61039b6107d4366004613f1d565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104b0565b610403610817366004614371565b611a8b565b610403611aca565b610444610832366004614332565b611b50565b610403610845366004614766565b611c2d565b610403610858366004613f55565b611cbe565b6103b8604051806040016040528060058152602001640302e372e360dc1b81525081565b600061088c82611e94565b92915050565b6060606580546108a190614da6565b80601f01602080910402602001604051908101604052809291908181526020018280546108cd90614da6565b801561091a5780601f106108ef5761010080835404028352916020019161091a565b820191906000526020600020905b8154815290600101906020018083116108fd57829003601f168201915b5050505050905090565b600061092f82611ee4565b506000908152606960205260409020546001600160a01b031690565b8061095581611f43565b61095f8383611faa565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109996120cd565b6001600160a01b03161415610a5b576109b06120cd565b6001600160a01b03166342966c68856040518263ffffffff1660e01b81526004016109dd91815260200190565b600060405180830381600087803b1580156109f757600080fd5b505af1158015610a0b573d6000803e3d6000fd5b505050821580159150610a255750610a25828401846144ee565b15610a4357610a3430856120dc565b610a3e858561222a565b610a4d565b610a4d85856120dc565b50630a85bd0160e11b610ab6565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610ae757634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b1a57816020015b6060815260200190600190039081610b055790505b50905060005b83811015610bd757610b99858583818110610b4b57634e487b7160e01b600052603260045260246000fd5b9050602002810190610b5d9190614bf4565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506122d5915050565b828281518110610bb957634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610bcf90614ddb565b915050610b20565b509392505050565b6060610c2284848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508692506122d5915050565b949350505050565b606060005a9050610c3c8585856114c3565b610c985760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610aad565b610d2a610ca86020870187613ee5565b30604088013584610cbc60608b018b614bf4565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061230a92505050565b9150505b9392505050565b610134546001600160a01b0316610d4a6120cd565b6001600160a01b031614610d705760405162461bcd60e51b8152600401610aad90614b20565b6000610d84610d7f888a614cce565b6123f9565b9050610d8f81612456565b610da2610d9b82611193565b8a836124c3565b610daf868686868561266a565b8115610dd157610dd18982610dcc610dc78b8d614cce565b6126f4565b612791565b505050505050505050565b80610dee610de86120cd565b826127d3565b610e0a5760405162461bcd60e51b8152600401610aad90614a85565b81610e1481611f43565b610e1d83612456565b610e288585856124c3565b5050505050565b6000610d2e610d7f8385614cce565b80610e4a610de86120cd565b610e665760405162461bcd60e51b8152600401610aad90614a85565b81610e7081611f43565b610e7d8787878787612851565b50505050505050565b80610e92610de86120cd565b610eae5760405162461bcd60e51b8152600401610aad90614a85565b81610eb881611f43565b61095f83612456565b610ec96128d0565b6001600160a01b0316610eda6120cd565b6001600160a01b031614610f005760405162461bcd60e51b8152600401610aad90614bb2565b610f0a82826120dc565b5050565b61095f838383604051806020016040528060008152506116e5565b80610f35610de86120cd565b610f515760405162461bcd60e51b8152600401610aad90614a85565b81610f5b81611f43565b610f6483612456565b61095f836129e3565b6000610d2e83836127d3565b610134546001600160a01b0316610f8e6120cd565b6001600160a01b031614610fb45760405162461bcd60e51b8152600401610aad90614b20565b60005b8151811015610f0a57610ff0828281518110610fe357634e487b7160e01b600052603260045260246000fd5b60200260200101516126f4565b610138600061102585858151811061101857634e487b7160e01b600052603260045260246000fd5b60200260200101516123f9565b81526020019081526020016000209080519060200190611046929190613c3e565b508061105181614ddb565b915050610fb7565b80611065610de86120cd565b6110815760405162461bcd60e51b8152600401610aad90614a85565b8161108b81611f43565b610e7d8787878787612a8a565b806110a4610de86120cd565b6110c05760405162461bcd60e51b8152600401610aad90614a85565b816110ca81611f43565b6110d686868686612b69565b505050505050565b6000818152606760205260408120546001600160a01b0316151561088c565b6111308160405160200161111191906148b3565b6040516020818303038152906040528051906020012060001c82612c09565b50565b610134546001600160a01b03166111486120cd565b6001600160a01b03161461116e5760405162461bcd60e51b8152600401610aad90614b20565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b03168061088c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610aad565b806111ff610de86120cd565b61121b5760405162461bcd60e51b8152600401610aad90614a85565b61122d6112266120cd565b30846124c3565b610f0a6112386120cd565b8361222a565b6000611249826123f9565b905061125481612c35565b61125d81611f43565b610f0a6112686120cd565b82611272856126f4565b612ca5565b6060806112848484612d32565b909590945092505050565b60006001600160a01b0382166112f95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610aad565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461133881612d53565b611340578091505b50919050565b61134e6128d0565b6001600160a01b031661135f6120cd565b6001600160a01b0316146113855760405162461bcd60e51b8152600401610aad90614bb2565b61138f84846120dc565b50505050565b61139f8787612d9d565b6113a76120cd565b6001600160a01b03166113b986611193565b6001600160a01b03161461140f5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610aad565b610e7d848484848961266a565b6060606680546108a190614da6565b610134546001600160a01b03166114406120cd565b6001600160a01b0316146114665760405162461bcd60e51b8152600401610aad90614b20565b6114736101338383613cbe565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516114a5929190614a39565b60405180910390a15050565b610f0a6114bc6120cd565b8383612e0c565b6000610c226114d185614cdb565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612edb92505050565b8061151a610de86120cd565b6115365760405162461bcd60e51b8152600401610aad90614a85565b8161154081611f43565b61138f61154c84611193565b85856124c3565b6000818152606760205260408120546001600160a01b031661157657600061088c565b3092915050565b606080836001600160401b038111156115a657634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156115d957816020015b60608152602001906001900390816115c45790505b509150836001600160401b0381111561160257634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561163557816020015b60608152602001906001900390816116205790505b50905060005b848110156116dc5761167386868381811061166657634e487b7160e01b600052603260045260246000fd5b9050602002013585612d32565b84838151811061169357634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106116ba57634e487b7160e01b600052603260045260246000fd5b60200260200101829052829052505080806116d490614ddb565b91505061163b565b50935093915050565b816116f1610de86120cd565b61170d5760405162461bcd60e51b8152600401610aad90614a85565b8261171781611f43565b61172084612456565b6110d686868686613033565b610134546001600160a01b03166117416120cd565b6001600160a01b0316146117675760405162461bcd60e51b8152600401610aad90614b20565b6000611776610d7f888a614cce565b9050611790898261178a610dc78b8d614cce565b85613066565b610dd1868686868561266a565b600081815260c9602052604090208054606091906117ba90614da6565b80601f01602080910402602001604051908101604052809291908181526020018280546117e690614da6565b80156118335780601f1061180857610100808354040283529160200191611833565b820191906000526020600020905b81548152906001019060200180831161181657829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061186581612d53565b61134057600081815261013860205260409020805461188390614da6565b80601f01602080910402602001604051908101604052809291908181526020018280546118af90614da6565b80156118fc5780601f106118d1576101008083540402835291602001916118fc565b820191906000526020600020905b8154815290600101906020018083116118df57829003601f168201915b5050505050915050919050565b606061191482611ee4565b600061191e6130b9565b9050600081511161193e5760405180602001604052806000815250610d2e565b80611948846130c9565b60405160200161195992919061495a565b6040516020818303038152906040529392505050565b8061197b610de86120cd565b6119975760405162461bcd60e51b8152600401610aad90614a85565b816119a181611f43565b610e7d878787878761266a565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b03166119e16120cd565b6001600160a01b031614611a075760405162461bcd60e51b8152600401610aad90614bb2565b6020811415611a2a576000611a1e8284018461474e565b905061138f84826120dc565b6000611a388284018461445c565b805190915060005b818110156110d657611a7986848381518110611a6c57634e487b7160e01b600052603260045260246000fd5b60200260200101516120dc565b80611a8381614ddb565b915050611a40565b80611a97610de86120cd565b611ab35760405162461bcd60e51b8152600401610aad90614a85565b81611abd81611f43565b610e7d87878787876131e2565b6000611ad46120cd565b6001600160a01b03811660009081526101356020526040902054909150611b475760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610aad565b611130816131f8565b6060816001600160401b03811115611b7857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611bab57816020015b6060815260200190600190039081611b965790505b50905060005b82811015611c2657611be8848483818110611bdc57634e487b7160e01b600052603260045260246000fd5b9050602002013561179d565b828281518110611c0857634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611c1e90614ddb565b915050611bb1565b5092915050565b610134546001600160a01b0316611c426120cd565b6001600160a01b031614611c685760405162461bcd60e51b8152600401610aad90614b20565b61013454611c7f906001600160a01b0316846120dc565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611cb1929190614a39565b60405180910390a2505050565b600054610100900460ff1615808015611cde5750600054600160ff909116105b80611cf85750303b158015611cf8575060005460ff166001145b611d5b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610aad565b6000805460ff191660011790558015611d7e576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611e269161323d565b611e2e61328b565b611e3661328b565b611e3f836132b4565b611e48826132e4565b8015610e28576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611ec557506001600160e01b03198216635b5e139f60e01b145b8061088c57506301ffc9a760e01b6001600160e01b031983161461088c565b6000818152606760205260409020546001600160a01b03166111305760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610aad565b30331415611fa157611f53613314565b81146111305760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610aad565b61113081613329565b6000611fb582611193565b9050806001600160a01b0316836001600160a01b031614156120235760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610aad565b806001600160a01b03166120356120cd565b6001600160a01b031614806120515750612051816107d46120cd565b6120c35760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610aad565b61095f8383613357565b60006120d76133c5565b905090565b6001600160a01b0382166121325760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610aad565b6000818152606760205260409020546001600160a01b0316156121975760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610aad565b6121a3600083836133e1565b6001600160a01b03821660009081526068602052604081208054600192906121cc908490614c8b565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006122346128d0565b90506122408183613357565b600080516020614e7883398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb9161229d918891309190604401614989565b600060405180830381600087803b1580156122b757600080fd5b505af11580156122cb573d6000803e3d6000fd5b5050505050505050565b6060610d2e836040516020016122eb91906148b3565b6040516020818303038152906040528051906020012060001c8361347e565b606061231585613329565b600080876001600160a01b03168661232f8b8a8989613560565b60405161233c91906148b3565b60006040518083038160008787f1925050503d806000811461237a576040519150601f19603f3d011682016040523d82523d6000602084013e61237f565b606091505b509092509050612390603f87614ca3565b5a116123ac57634e487b7160e01b600052600160045260246000fd5b6123ec82826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613590565b9998505050505050505050565b805160009081905b8015611c26576124428285612417600185614cb7565b8151811061243557634e487b7160e01b600052603260045260246000fd5b60200260200101516135c9565b91508061244e81614d8f565b915050612401565b61245f81613676565b60405160200161247191815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b03166124d682611193565b6001600160a01b03161461253a5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610aad565b6001600160a01b03821661259c5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610aad565b6125a78383836133e1565b6125b2600082613357565b6001600160a01b03831660009081526068602052604081208054600192906125db908490614cb7565b90915550506001600160a01b0382166000908152606860205260408120805460019290612609908490614c8b565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b848110156110d6576126e286868381811061269857634e487b7160e01b600052603260045260246000fd5b90506020028101906126aa9190614bf4565b8686858181106126ca57634e487b7160e01b600052603260045260246000fd5b90506020028101906126dc9190614bf4565b86612a8a565b806126ec81614ddb565b91505061266d565b606060008260008151811061271957634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611c26578184828151811061275457634e487b7160e01b600052603260045260246000fd5b602002602001015160405160200161276d92919061490e565b6040516020818303038152906040529150808061278990614ddb565b91505061272a565b61dead6001600160a01b038416148015906127c357506001600160a01b03831660009081526101356020526040902054155b1561095f5761095f838383612ca5565b6000806127df83611193565b9050806001600160a01b0316846001600160a01b0316148061282657506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c225750836001600160a01b031661283f84610924565b6001600160a01b031614949350505050565b60005b848110156110d6576128be86868381811061287f57634e487b7160e01b600052603260045260246000fd5b905060200201358585848181106128a657634e487b7160e01b600052603260045260246000fd5b90506020028101906128b89190614bf4565b85612b69565b806128c881614ddb565b915050612854565b600080600080516020614e788339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b15801561292957600080fd5b505afa15801561293d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129619190614508565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b1580156129a457600080fd5b505afa1580156129b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129dc9190613f01565b9250505090565b60006129ee82611193565b90506129fc816000846133e1565b612a07600083613357565b6001600160a01b0381166000908152606860205260408120805460019290612a30908490614cb7565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612a9f92919061494a565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612af39183918990899081908401838280828437600092019190915250612c0992505050565b6110d68187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892506136a2915050565b612b72846137dd565b612bbe5760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610aad565b61138f84612bcb8661179d565b85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506136a2915050565b612c12826137dd565b610f0a57600082815260c960209081526040909120825161095f92840190613c3e565b612c3d6120cd565b6001600160a01b0316612c4f82611193565b6001600160a01b0316146111305760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610aad565b6000828152610138602052604090208054612cbf90614da6565b15159050612ce9576000828152610138602090815260409091208251612ce792840190613c3e565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612d3e8461179d565b9150612d4a848461347e565b90509250929050565b6000818152610137602052604081205460ff16801561088c57506101366000612d7a6120cd565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614e7883398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612dde9086908690600401614a39565b600060405180830381600087803b158015612df857600080fd5b505af1158015610e7d573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612e6e5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610aad565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612f1d57600080fd5b505afa158015612f31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f559190614508565b90506000613003866060015180519060200120868860200151604051602001612fa39392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561302957508551613029906001600160a01b03168286613803565b9695505050505050565b61303e8484846124c3565b61304a84848484613953565b61138f5760405162461bcd60e51b8152600401610aad90614ace565b61307084846120dc565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516130a09190614a4d565b60405180910390a2801561138f5761138f848484612791565b606061013380546108a190614da6565b6060816130ed5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115613117578061310181614ddb565b91506131109050600a83614ca3565b91506130f1565b6000816001600160401b0381111561313f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613169576020820181803683370190505b5090505b8415610c225761317e600183614cb7565b915061318b600a86614df6565b613196906030614c8b565b60f81b8183815181106131b957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506131db600a86614ca3565b945061316d565b6131eb81612456565b610e28858585858561266a565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166132645760405162461bcd60e51b8152600401610aad90614b67565b8151613277906065906020850190613c3e565b50805161095f906066906020840190613c3e565b600054610100900460ff166132b25760405162461bcd60e51b8152600401610aad90614b67565b565b600054610100900460ff166132db5760405162461bcd60e51b8152600401610aad90614b67565b61113081613a64565b600054610100900460ff1661330b5760405162461bcd60e51b8152600401610aad90614b67565b61113081613abd565b6000303314156133265750601f193601355b90565b60008181526101006020526040902054613344906001614c8b565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061338c82611193565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000303314156133dc575060331936013560601c90565b503390565b6000818152610137602052604090205460ff16158061340857506001600160a01b03821615155b6134545760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610aad565b6001600160a01b0383166000908152610135602052604090205481141561095f5761095f836131f8565b606061348982612d53565b156134a3575060408051602081019091526000815261088c565b60ca60006134b084613676565b8152602001908152602001600020600084815260200190815260200160002080546134da90614da6565b80601f016020809104026020016040519081016040528092919081815260200182805461350690614da6565b80156135535780601f1061352857610100808354040283529160200191613553565b820191906000526020600020905b81548152906001019060200180831161353657829003601f168201915b5050505050905092915050565b6060828585604051602001613577939291906148cf565b6040516020818303038152906040529050949350505050565b6060831561359f575081610d2e565b8251156135af5782518084602001fd5b8160405162461bcd60e51b8152600401610aad9190614a4d565b60008151600014156136155760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610aad565b828260405160200161362791906148b3565b60405160208183030381529060405280519060200120604051602001613657929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561369e57600082815260cb602052604090205461088c565b5090565b60ca60006136af83613676565b8152602001908152602001600020600085815260200190815260200160002080546136d990614da6565b1515905061373057826040516136ef91906148b3565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516137279190614a4d565b60405180910390a35b8160ca600061373e84613676565b815260200190815260200160002060008681526020019081526020016000209080519060200190613770929190613c3e565b508160405161377f91906148b3565b60405180910390208360405161379591906148b3565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d9286866040516137cf929190614a60565b60405180910390a450505050565b600081815260c96020526040812080548291906137f990614da6565b9050119050919050565b60008060006138128585613b0b565b9092509050600081600481111561383957634e487b7160e01b600052602160045260246000fd5b1480156138575750856001600160a01b0316826001600160a01b0316145b1561386757600192505050610d2e565b600080876001600160a01b0316631626ba7e60e01b888860405160240161388f929190614a20565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516138cd91906148b3565b600060405180830381855afa9150503d8060008114613908576040519150601f19603f3d011682016040523d82523d6000602084013e61390d565b606091505b5091509150818015613920575080516020145b801561394757508051630b135d3f60e11b906139459083016020908101908401614508565b145b98975050505050505050565b60006001600160a01b0384163b15613a5c57836001600160a01b031663150b7a0261397c6120cd565b8786866040518563ffffffff1660e01b815260040161399e94939291906149b5565b602060405180830381600087803b1580156139b857600080fd5b505af19250505080156139e8575060408051601f3d908101601f191682019092526139e59181019061453c565b60015b613a42573d808015613a16576040519150601f19603f3d011682016040523d82523d6000602084013e613a1b565b606091505b508051613a3a5760405162461bcd60e51b8152600401610aad90614ace565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c22565b506001610c22565b600054610100900460ff16613a8b5760405162461bcd60e51b8152600401610aad90614b67565b80600080516020614e788339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613ae45760405162461bcd60e51b8152600401610aad90614b67565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613a9c565b600080825160411415613b425760208301516040840151606085015160001a613b3687828585613b51565b94509450505050613b4a565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613b885750600090506003613c35565b8460ff16601b14158015613ba057508460ff16601c14155b15613bb15750600090506004613c35565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613c05573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613c2e57600060019250925050613c35565b9150600090505b94509492505050565b828054613c4a90614da6565b90600052602060002090601f016020900481019282613c6c5760008555613cb2565b82601f10613c8557805160ff1916838001178555613cb2565b82800160010185558215613cb2579182015b82811115613cb2578251825591602001919060010190613c97565b5061369e929150613d32565b828054613cca90614da6565b90600052602060002090601f016020900481019282613cec5760008555613cb2565b82601f10613d055782800160ff19823516178555613cb2565b82800160010185558215613cb2579182015b82811115613cb2578235825591602001919060010190613d17565b5b8082111561369e5760008155600101613d33565b6000613d5a613d5584614c68565b614c38565b9050808382526020808301915083868660051b86011115613d7a57600080fd5b6000805b87811015613dba5782356001600160401b03811115613d9b578283fd5b613da78a828a01613e7b565b8652509383019391830191600101613d7e565b50505050509392505050565b60008083601f840112613dd7578182fd5b5081356001600160401b03811115613ded578182fd5b6020830191508360208260051b8501011115613b4a57600080fd5b600082601f830112613e18578081fd5b610d2e83833560208501613d47565b80358015158114613e3757600080fd5b919050565b60008083601f840112613e4d578182fd5b5081356001600160401b03811115613e63578182fd5b602083019150836020828501011115613b4a57600080fd5b600082601f830112613e8b578081fd5b81356001600160401b03811115613ea457613ea4614e36565b613eb7601f8201601f1916602001614c38565b818152846020838601011115613ecb578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613ef6578081fd5b8135610d2e81614e4c565b600060208284031215613f12578081fd5b8151610d2e81614e4c565b60008060408385031215613f2f578081fd5b8235613f3a81614e4c565b91506020830135613f4a81614e4c565b809150509250929050565b60008060008060808587031215613f6a578182fd5b8435613f7581614e4c565b93506020850135613f8581614e4c565b92506040850135613f9581614e4c565b91506060850135613fa581614e4c565b939692955090935050565b600080600060608486031215613fc4578081fd5b8335613fcf81614e4c565b92506020840135613fdf81614e4c565b929592945050506040919091013590565b600080600080600060808688031215614007578283fd5b853561401281614e4c565b9450602086013561402281614e4c565b93506040860135925060608601356001600160401b03811115614043578182fd5b61404f88828901613e3c565b969995985093965092949392505050565b60008060008060808587031215614075578182fd5b843561408081614e4c565b9350602085013561409081614e4c565b92506040850135915060608501356001600160401b038111156140b1578182fd5b6140bd87828801613e7b565b91505092959194509250565b60008060008060008060008060a0898b0312156140e4578586fd5b88356140ef81614e4c565b975060208901356001600160401b038082111561410a578788fd5b6141168c838d01613dc6565b909950975060408b013591508082111561412e578485fd5b61413a8c838d01613dc6565b909750955060608b0135915080821115614152578485fd5b5061415f8b828c01613dc6565b9094509250614172905060808a01613e27565b90509295985092959890939650565b60008060408385031215614193578182fd5b823561419e81614e4c565b9150612d4a60208401613e27565b6000806000604084860312156141c0578081fd5b83356141cb81614e4c565b925060208401356001600160401b038111156141e5578182fd5b6141f186828701613e3c565b9497909650939450505050565b60008060408385031215614210578182fd5b823561421b81614e4c565b946020939093013593505050565b6000806000806060858703121561423e578182fd5b843561424981614e4c565b93506020850135925060408501356001600160401b0381111561426a578283fd5b61427687828801613e3c565b95989497509550505050565b60006020808385031215614294578182fd5b82356001600160401b03808211156142aa578384fd5b818501915085601f8301126142bd578384fd5b81356142cb613d5582614c68565b80828252858201915085850189878560051b88010111156142ea578788fd5b875b848110156143235781358681111561430257898afd5b6143108c8a838b0101613e08565b85525092870192908701906001016142ec565b50909998505050505050505050565b60008060208385031215614344578182fd5b82356001600160401b03811115614359578283fd5b61436585828601613dc6565b90969095509350505050565b600080600080600060608688031215614388578283fd5b85356001600160401b038082111561439e578485fd5b6143aa89838a01613dc6565b909750955060208801359150808211156143c2578485fd5b506143cf88828901613dc6565b96999598509660400135949350505050565b6000806000604084860312156143f5578081fd5b83356001600160401b0381111561440a578182fd5b61441686828701613dc6565b909790965060209590950135949350505050565b60006020828403121561443b578081fd5b81356001600160401b03811115614450578182fd5b610c2284828501613e08565b6000602080838503121561446e578182fd5b82356001600160401b03811115614483578283fd5b8301601f81018513614493578283fd5b80356144a1613d5582614c68565b80828252848201915084840188868560051b87010111156144c0578687fd5b8694505b838510156144e25780358352600194909401939185019185016144c4565b50979650505050505050565b6000602082840312156144ff578081fd5b610d2e82613e27565b600060208284031215614519578081fd5b5051919050565b600060208284031215614531578081fd5b8135610d2e81614e61565b60006020828403121561454d578081fd5b8151610d2e81614e61565b60008060008060008060006080888a031215614572578081fd5b87356001600160401b0380821115614588578283fd5b6145948b838c01613e3c565b909950975060208a0135965060408a01359150808211156145b3578283fd5b6145bf8b838c01613dc6565b909650945060608a01359150808211156145d7578283fd5b506145e48a828b01613dc6565b989b979a50959850939692959293505050565b60008060208385031215614609578182fd5b82356001600160401b0381111561461e578283fd5b61436585828601613e3c565b600080600080600060608688031215614641578283fd5b85356001600160401b0380821115614657578485fd5b61466389838a01613e3c565b9097509550602088013591508082111561467b578485fd5b506143cf88828901613e3c565b60008060006040848603121561469c578081fd5b83356001600160401b038111156146b1578182fd5b61441686828701613e3c565b6000602082840312156146ce578081fd5b81356001600160401b038111156146e3578182fd5b610c2284828501613e7b565b600080600060408486031215614703578081fd5b83356001600160401b0380821115614719578283fd5b908501906080828803121561472c578283fd5b90935060208501359080821115614741578283fd5b506141f186828701613e3c565b60006020828403121561475f578081fd5b5035919050565b60008060006040848603121561477a578081fd5b8335925060208401356001600160401b038111156141e5578182fd5b600080600080606085870312156147ab578182fd5b8435935060208501356001600160401b038111156147c7578283fd5b6147d387828801613e3c565b9598909750949560400135949350505050565b600080604083850312156147f8578182fd5b50508035926020909101359150565b600082825180855260208086019550808260051b840101818601855b8481101561485157601f1986840301895261483f838351614887565b98840198925090830190600101614823565b5090979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000815180845261489f816020860160208601614d63565b601f01601f19169290920160200192915050565b600082516148c5818460208701614d63565b9190910192915050565b600084516148e1818460208901614d63565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60008351614920818460208801614d63565b601760f91b908301908152835161493e816001840160208801614d63565b01600101949350505050565b8183823760009101908152919050565b6000835161496c818460208801614d63565b835190830190614980818360208801614d63565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610ab690830184614887565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061302990830184614887565b602081526000610d2e6020830184614807565b604081526000614a0e6040830185614807565b8281036020840152610d2a8185614807565b828152604060208201526000610c226040830184614887565b602081526000610c2260208301848661485e565b602081526000610d2e6020830184614887565b604081526000614a736040830185614887565b8281036020840152610d2a8185614887565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614c0a578283fd5b8301803591506001600160401b03821115614c23578283fd5b602001915036819003821315613b4a57600080fd5b604051601f8201601f191681016001600160401b0381118282101715614c6057614c60614e36565b604052919050565b60006001600160401b03821115614c8157614c81614e36565b5060051b60200190565b60008219821115614c9e57614c9e614e0a565b500190565b600082614cb257614cb2614e20565b500490565b600082821015614cc957614cc9614e0a565b500390565b6000610d2e368484613d47565b600060808236031215614cec578081fd5b604051608081016001600160401b038282108183111715614d0f57614d0f614e36565b8160405284359150614d2082614e4c565b81835260208501356020840152604085013560408401526060850135915080821115614d4a578384fd5b50614d5736828601613e7b565b60608301525092915050565b60005b83811015614d7e578181015183820152602001614d66565b8381111561138f5750506000910152565b600081614d9e57614d9e614e0a565b506000190190565b600181811c90821680614dba57607f821691505b6020821081141561134057634e487b7160e01b600052602260045260246000fd5b6000600019821415614def57614def614e0a565b5060010190565b600082614e0557614e05614e20565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461113057600080fd5b6001600160e01b03198116811461113057600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistry__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistry__factory = UNSRegistry__factory;
UNSRegistry__factory.bytecode = _bytecode;
UNSRegistry__factory.abi = _abi;
