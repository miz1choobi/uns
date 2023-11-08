"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNSSEC__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "id",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "AlgorithmUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "id",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "DigestUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "id",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "NSEC3DigestUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "rrset",
                type: "bytes",
            },
        ],
        name: "RRSetUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "anchors",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "deleteType",
                type: "uint16",
            },
            {
                internalType: "bytes",
                name: "deleteName",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature",
                name: "nsec",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "proof",
                type: "bytes",
            },
        ],
        name: "deleteRRSet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "deleteType",
                type: "uint16",
            },
            {
                internalType: "bytes",
                name: "deleteName",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature",
                name: "closestEncloser",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature",
                name: "nextClosest",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "dnskey",
                type: "bytes",
            },
        ],
        name: "deleteRRSetNSEC3",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "dnstype",
                type: "uint16",
            },
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
        ],
        name: "rrdata",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
            {
                internalType: "bytes20",
                name: "",
                type: "bytes20",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature",
                name: "input",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "proof",
                type: "bytes",
            },
        ],
        name: "submitRRSet",
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
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature[]",
                name: "input",
                type: "tuple[]",
            },
            {
                internalType: "bytes",
                name: "proof",
                type: "bytes",
            },
        ],
        name: "submitRRSets",
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
];
class DNSSEC__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DNSSEC__factory = DNSSEC__factory;
DNSSEC__factory.abi = _abi;
