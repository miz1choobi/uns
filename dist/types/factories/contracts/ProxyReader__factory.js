"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyReader__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
        name: "getData",
        outputs: [
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
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
        name: "getDataByHash",
        outputs: [
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "getDataByHashForMany",
        outputs: [
            {
                internalType: "address[]",
                name: "resolvers",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
            {
                internalType: "string[][]",
                name: "keys",
                type: "string[][]",
            },
            {
                internalType: "string[][]",
                name: "values",
                type: "string[][]",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "getDataForMany",
        outputs: [
            {
                internalType: "address[]",
                name: "resolvers",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
            {
                internalType: "string[][]",
                name: "values",
                type: "string[][]",
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
                internalType: "contract IUNSRegistry",
                name: "unsRegistry",
                type: "address",
            },
            {
                internalType: "contract ICNSRegistry",
                name: "cnsRegistry",
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
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
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
        stateMutability: "pure",
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
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
            },
        ],
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
        name: "namehash",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "ownerOfForMany",
        outputs: [
            {
                internalType: "address[]",
                name: "owners",
                type: "address[]",
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
        name: "registryOf",
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
        name: "reverseOf",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50612da8806100206000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80637e37479e116100de578063ac9650d811610097578063c15ae7cf11610071578063c15ae7cf146103e2578063c87b56dd14610402578063e985e9c514610415578063ffa1ad741461042857600080fd5b8063ac9650d81461038e578063b3f9e4cb146103ae578063b85afd28146103c157600080fd5b80637e37479e146102d1578063869b8884146102e457806391015f6b14610307578063933c051d14610329578063a3f4df7e1461034b578063a81ce6f91461037b57600080fd5b8063430c208111610130578063430c20811461024f578063485cc955146102625780634f558e79146102775780636352211e1461028a578063672b9f811461029d57806370a08231146102be57600080fd5b806301ffc9a71461017857806303280755146101a0578063081812fc146101c35780631bd8cc1a146101ee5780631be5e7ed1461020e578063276fabb11461022e575b600080fd5b61018b610186366004612690565b61044c565b60405190151581526020015b60405180910390f35b6101b36101ae366004612647565b6104b9565b6040516101979493929190612a0f565b6101d66101d13660046127c4565b6104dc565b6040516001600160a01b039091168152602001610197565b6102016101fc36600461256c565b6105ff565b6040516101979190612b94565b61022161021c3660046126ca565b6107b6565b6040516101979190612c21565b61024161023c3660046124c5565b6108e5565b604051908152602001610197565b61018b61025d36600461249a565b610968565b6102756102703660046126b8565b610a99565b005b61018b6102853660046127c4565b610be9565b6101d66102983660046127c4565b610bf4565b6102b06102ab3660046127f4565b610bff565b604051610197929190612c34565b6102416102cc36600461242a565b610d51565b6102416102df36600461242a565b610e6d565b6102f76102f2366004612504565b610eeb565b6040516101979493929190612aae565b61031a61031536600461256c565b61115f565b604051610197939291906129e3565b61033c610337366004612504565b61117f565b60405161019793929190612a6b565b610221604051806040016040528060118152602001702aa7299d10283937bc3c902932b0b232b960791b81525081565b6101d66103893660046127c4565b61136a565b6103a161039c3660046124c5565b611447565b6040516101979190612afb565b6101d66103bc3660046127c4565b611565565b6103d46103cf366004612647565b6115eb565b604051610197929190612ba7565b6103f56103f03660046124c5565b611805565b6040516101979190612a58565b6102216104103660046127c4565b6118dd565b61018b610423366004612462565b611a0d565b610221604051806040016040528060058152602001640302e342e360dc1b81525081565b60006001600160e01b0319821663dceca8d760e01b148061047d57506001600160e01b03198216636fa624af60e11b145b8061049857506001600160e01b031982166308da864d60e31b145b806104b357506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000806060806104ca878787611a58565b93509350935093505b93509350935093565b60006104e782611d07565b6104f357506000919050565b6104fc82611dae565b6105825760665460405163020604bf60e21b8152600481018490526001600160a01b039091169063081812fc906024015b60206040518083038186803b15801561054557600080fd5b505afa158015610559573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057d9190612446565b6104b3565b60655460405163020604bf60e21b8152600481018490526001600160a01b039091169063081812fc906024015b60206040518083038186803b1580156105c757600080fd5b505afa1580156105db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b39190612446565b6060826001600160401b0381111561062757634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561065a57816020015b60608152602001906001900390816106455790505b50905061066682611dae565b156106fa57606554604051630dec660d60e11b81526001600160a01b0390911690631bd8cc1a9061069f90879087908790600401612b70565b60006040518083038186803b1580156106b757600080fd5b505afa1580156106cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f391908101906125b5565b90506107af565b600061070583611df5565b90506001600160a01b0381163b1515801561071f57508315155b156107ad57604051630dec660d60e11b81526001600160a01b03821690631bd8cc1a9061075490889088908890600401612b70565b60006040518083038186803b15801561076c57600080fd5b505afa9250505080156107a157506040513d6000823e601f3d908101601f1916820160405261079e91908101906125b5565b60015b6107aa576107ad565b91505b505b9392505050565b60606107c182611dae565b1561084e57606554604051631be5e7ed60e01b81526001600160a01b0390911690631be5e7ed906107fa90879087908790600401612c0d565b60006040518083038186803b15801561081257600080fd5b505afa158015610826573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f3919081019061273c565b600061085983611df5565b90506001600160a01b0381163b156107ad57604051631be5e7ed60e01b81526001600160a01b03821690631be5e7ed9061089b90889088908890600401612c0d565b60006040518083038186803b1580156108b357600080fd5b505afa9250505080156107a157506040513d6000823e601f3d908101601f1916820160405261079e919081019061273c565b60655460405163276fabb160e01b81526000916001600160a01b03169063276fabb1906109189086908690600401612b5c565b60206040518083038186803b15801561093057600080fd5b505afa158015610944573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107af91906127dc565b600061097382611d07565b61097f575060006104b3565b61098882611dae565b610a155760665460405163430c208160e01b81526001600160a01b038581166004830152602482018590529091169063430c20819060440160206040518083038186803b1580156109d857600080fd5b505afa1580156109ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a109190612670565b6107af565b60655460405163430c208160e01b81526001600160a01b038581166004830152602482018590529091169063430c20819060440160206040518083038186803b158015610a6157600080fd5b505afa158015610a75573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107af9190612670565b600054610100900460ff1615808015610ab95750600054600160ff909116105b80610ad35750303b158015610ad3575060005460ff166001145b610b3b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610b5e576000805461ff0019166101001790555b606580546001600160a01b038086166001600160a01b0319928316179092556066805492851692909116919091179055610b96611e77565b610b9e611e77565b8015610be4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60006104b382611d07565b60006104b382611ee4565b606080610c0b83611dae565b15610ca05760655460405163672b9f8160e01b815260048101869052602481018590526001600160a01b039091169063672b9f819060440160006040518083038186803b158015610c5b57600080fd5b505afa158015610c6f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c97919081019061276e565b91509150610d4a565b6000610cab84611df5565b90506001600160a01b0381163b15610d485760405163672b9f8160e01b815260048101869052602481018590526001600160a01b0382169063672b9f819060440160006040518083038186803b158015610d0457600080fd5b505afa925050508015610d3957506040513d6000823e601f3d908101601f19168201604052610d36919081019061276e565b60015b610d4257610d48565b90935091505b505b9250929050565b6065546040516370a0823160e01b81526001600160a01b03838116600483015260009283929116906370a082319060240160206040518083038186803b158015610d9a57600080fd5b505afa158015610dae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd291906127dc565b6066549091506001600160a01b0316156104b3576066546040516370a0823160e01b81526001600160a01b038581166004830152909116906370a082319060240160206040518083038186803b158015610e2b57600080fd5b505afa158015610e3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6391906127dc565b6107af9082612ccd565b606554604051633f1ba3cf60e11b81526001600160a01b0383811660048301526000921690637e37479e9060240160206040518083038186803b158015610eb357600080fd5b505afa158015610ec7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b391906127dc565b6060808080846001600160401b03811115610f1657634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610f3f578160200160208202803683370190505b509350846001600160401b03811115610f6857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610f91578160200160208202803683370190505b509250846001600160401b03811115610fba57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610fed57816020015b6060815260200190600190039081610fd85790505b509150846001600160401b0381111561101657634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561104957816020015b60608152602001906001900390816110345790505b50905060005b8581101561115357611088898989898581811061107c57634e487b7160e01b600052603260045260246000fd5b90506020020135611a58565b8885815181106110a857634e487b7160e01b600052603260045260246000fd5b602002602001018886815181106110cf57634e487b7160e01b600052603260045260246000fd5b602002602001018887815181106110f657634e487b7160e01b600052603260045260246000fd5b6020026020010188888151811061111d57634e487b7160e01b600052603260045260246000fd5b6020908102919091010193909352929091526001600160a01b03928316909152911690528061114b81612d15565b91505061104f565b50945094509450949050565b600080606061116f868686611f05565b9250925092505b93509350939050565b60608080836001600160401b038111156111a957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156111d2578160200160208202803683370190505b509250836001600160401b038111156111fb57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611224578160200160208202803683370190505b509150836001600160401b0381111561124d57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561128057816020015b606081526020019060019003908161126b5790505b50905060005b8481101561135f576112bf88888888858181106112b357634e487b7160e01b600052603260045260246000fd5b90506020020135611f05565b8684815181106112df57634e487b7160e01b600052603260045260246000fd5b6020026020010186858151811061130657634e487b7160e01b600052603260045260246000fd5b6020026020010186868151811061132d57634e487b7160e01b600052603260045260246000fd5b60209081029190910101929092526001600160a01b03928316909152911690528061135781612d15565b915050611286565b509450945094915050565b606554604051634f558e7960e01b8152600481018390526000916001600160a01b031690634f558e799060240160206040518083038186803b1580156113af57600080fd5b505afa1580156113c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e79190612670565b156113fd5750506065546001600160a01b031690565b6066546001600160a01b0316158015906114295750600061141d8361214f565b6001600160a01b031614155b1561143f5750506066546001600160a01b031690565b506000919050565b6060816001600160401b0381111561146f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156114a257816020015b606081526020019060019003908161148d5790505b50905060005b8281101561155e57611520308585848181106114d457634e487b7160e01b600052603260045260246000fd5b90506020028101906114e69190612c59565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061218192505050565b82828151811061154057634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061155690612d15565b9150506114a8565b5092915050565b600061157082611d07565b61157c57506000919050565b61158582611dae565b6115ba5760665460405163b3f9e4cb60e01b8152600481018490526001600160a01b039091169063b3f9e4cb9060240161052d565b60655460405163b3f9e4cb60e01b8152600481018490526001600160a01b039091169063b3f9e4cb906024016105af565b606080836001600160401b0381111561161457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561164757816020015b60608152602001906001900390816116325790505b509150836001600160401b0381111561167057634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156116a357816020015b606081526020019060019003908161168e5790505b5090506116af83611dae565b156117455760655460405163170b5fa560e31b81526001600160a01b039091169063b85afd28906116e890889088908890600401612bcc565b60006040518083038186803b15801561170057600080fd5b505afa158015611714573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261173c91908101906125e7565b915091506117fd565b600061175084611df5565b90506001600160a01b0381163b1515801561176a57508415155b156117fb5760405163170b5fa560e31b81526001600160a01b0382169063b85afd289061179f90899089908990600401612bcc565b60006040518083038186803b1580156117b757600080fd5b505afa9250505080156117ec57506040513d6000823e601f3d908101601f191682016040526117e991908101906125e7565b60015b6117f5576117fb565b90935091505b505b935093915050565b6060816001600160401b0381111561182d57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611856578160200160208202803683370190505b50905060005b8281101561155e5761189384848381811061188757634e487b7160e01b600052603260045260246000fd5b90506020020135611ee4565b8282815181106118b357634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152806118d581612d15565b91505061185c565b60606118e882611d07565b61190057505060408051602081019091526000815290565b61190982611dae565b61198d5760665460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd9060240160006040518083038186803b15801561195157600080fd5b505afa158015611965573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261057d919081019061273c565b60655460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd9060240160006040518083038186803b1580156119d157600080fd5b505afa1580156119e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104b3919081019061273c565b60405162461bcd60e51b815260206004820152601f60248201527f50726f78795265616465723a20554e535550504f525445445f4d4554484f44006044820152600090606401610b32565b600080606080856001600160401b03811115611a8457634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611ab757816020015b6060815260200190600190039081611aa25790505b509150856001600160401b03811115611ae057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611b1357816020015b6060815260200190600190039081611afe5790505b509050611b1f85611dae565b15611c3e5760655460405163b3f9e4cb60e01b8152600481018790526001600160a01b039091169063b3f9e4cb9060240160206040518083038186803b158015611b6857600080fd5b505afa158015611b7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ba09190612446565b9350611bab85612275565b60655460405163170b5fa560e31b81529194506001600160a01b03169063b85afd2890611be0908a908a908a90600401612bcc565b60006040518083038186803b158015611bf857600080fd5b505afa158015611c0c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611c3491908101906125e7565b90925090506104d3565b611c4785611df5565b9350611c528561214f565b92506001600160a01b0384163b15158015611c6e575060008251115b156104d35760405163170b5fa560e31b81526001600160a01b0385169063b85afd2890611ca3908a908a908a90600401612bcc565b60006040518083038186803b158015611cbb57600080fd5b505afa925050508015611cf057506040513d6000823e601f3d908101601f19168201604052611ced91908101906125e7565b60015b611cf9576104d3565b909250905093509350935093565b6000611d1282611dae565b611d31576000611d218361214f565b6001600160a01b031614156104b3565b606554604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e79906024015b60206040518083038186803b158015611d7657600080fd5b505afa158015611d8a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b39190612670565b6066546000906001600160a01b031615806104b35750606554604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e7990602401611d5e565b60665460405163b3f9e4cb60e01b8152600481018390526000916001600160a01b03169063b3f9e4cb906024015b60206040518083038186803b158015611e3b57600080fd5b505afa925050508015611e6b575060408051601f3d908101601f19168201909252611e6891810190612446565b60015b6104b357506000919050565b600054610100900460ff16611ee25760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610b32565b565b6000611eef82611dae565b611efc5761057d8261214f565b6104b382612275565b6000806060846001600160401b03811115611f3057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611f6357816020015b6060815260200190600190039081611f4e5790505b509050611f6f84611dae565b1561208b5760655460405163b3f9e4cb60e01b8152600481018690526001600160a01b039091169063b3f9e4cb9060240160206040518083038186803b158015611fb857600080fd5b505afa158015611fcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff09190612446565b9250611ffb84612275565b606554604051630dec660d60e11b81529193506001600160a01b031690631bd8cc1a9061203090899089908990600401612b70565b60006040518083038186803b15801561204857600080fd5b505afa15801561205c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261208491908101906125b5565b9050611176565b61209484611df5565b925061209f8461214f565b91506001600160a01b0383163b151580156120b957508415155b1561117657604051630dec660d60e11b81526001600160a01b03841690631bd8cc1a906120ee90899089908990600401612b70565b60006040518083038186803b15801561210657600080fd5b505afa92505050801561213b57506040513d6000823e601f3d908101601f1916820160405261213891908101906125b5565b60015b61214457611176565b905093509350939050565b6066546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401611e23565b60606001600160a01b0383163b6121e95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610b32565b600080846001600160a01b03168460405161220491906129c7565b600060405180830381855af49150503d806000811461223f576040519150601f19603f3d011682016040523d82523d6000602084013e612244565b606091505b509150915061226c8282604051806060016040528060278152602001612d75602791396122a7565b95945050505050565b6065546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401611e23565b606083156122b65750816107af565b8251156122c65782518084602001fd5b8160405162461bcd60e51b8152600401610b329190612c21565b60008083601f8401126122f1578182fd5b5081356001600160401b03811115612307578182fd5b6020830191508360208260051b8501011115610d4a57600080fd5b600082601f830112612332578081fd5b815160206001600160401b038083111561234e5761234e612d46565b8260051b61235d838201612c9d565b8481528381019087850183890186018a1015612377578788fd5b8793505b868410156123b457805185811115612391578889fd5b61239f8b88838d01016123c1565b8452506001939093019291850191850161237b565b5098975050505050505050565b600082601f8301126123d1578081fd5b81516001600160401b038111156123ea576123ea612d46565b6123fd601f8201601f1916602001612c9d565b818152846020838601011115612411578283fd5b612422826020830160208701612ce5565b949350505050565b60006020828403121561243b578081fd5b81356107af81612d5c565b600060208284031215612457578081fd5b81516107af81612d5c565b60008060408385031215612474578081fd5b823561247f81612d5c565b9150602083013561248f81612d5c565b809150509250929050565b600080604083850312156124ac578182fd5b82356124b781612d5c565b946020939093013593505050565b600080602083850312156124d7578182fd5b82356001600160401b038111156124ec578283fd5b6124f8858286016122e0565b90969095509350505050565b60008060008060408587031215612519578182fd5b84356001600160401b038082111561252f578384fd5b61253b888389016122e0565b90965094506020870135915080821115612553578384fd5b50612560878288016122e0565b95989497509550505050565b600080600060408486031215612580578283fd5b83356001600160401b03811115612595578384fd5b6125a1868287016122e0565b909790965060209590950135949350505050565b6000602082840312156125c6578081fd5b81516001600160401b038111156125db578182fd5b61242284828501612322565b600080604083850312156125f9578182fd5b82516001600160401b038082111561260f578384fd5b61261b86838701612322565b93506020850151915080821115612630578283fd5b5061263d85828601612322565b9150509250929050565b60008060006040848603121561265b578081fd5b83356001600160401b03811115612595578182fd5b600060208284031215612681578081fd5b815180151581146107af578182fd5b6000602082840312156126a1578081fd5b81356001600160e01b0319811681146107af578182fd5b60008060408385031215612474578182fd5b6000806000604084860312156126de578081fd5b83356001600160401b03808211156126f4578283fd5b818601915086601f830112612707578283fd5b813581811115612715578384fd5b876020828501011115612726578384fd5b6020928301989097509590910135949350505050565b60006020828403121561274d578081fd5b81516001600160401b03811115612762578182fd5b612422848285016123c1565b60008060408385031215612780578182fd5b82516001600160401b0380821115612796578384fd5b6127a2868387016123c1565b935060208501519150808211156127b7578283fd5b5061263d858286016123c1565b6000602082840312156127d5578081fd5b5035919050565b6000602082840312156127ed578081fd5b5051919050565b60008060408385031215612806578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b8381101561284d5781516001600160a01b031687529582019590820190600101612828565b509495945050505050565b600081518084526020808501808196508360051b81019150828601855b8581101561289f57828403895261288d84835161292b565b98850198935090840190600101612875565b5091979650505050505050565b81835260006020808501808196508560051b8101915084845b8781101561289f5782840389528135601e198836030181126128e5578687fd5b870180356001600160401b038111156128fc578788fd5b80360389131561290a578788fd5b612917868289850161299e565b9a87019a95505050908401906001016128c5565b600081518084526020808501808196508360051b81019150828601855b8581101561289f578284038952612960848351612972565b98850198935090840190600101612948565b6000815180845261298a816020860160208601612ce5565b601f01601f19169290920160200192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600082516129d9818460208701612ce5565b9190910192915050565b6001600160a01b0384811682528316602082015260606040820181905260009061226c9083018461292b565b6001600160a01b03858116825284166020820152608060408201819052600090612a3b9083018561292b565b8281036060840152612a4d818561292b565b979650505050505050565b6020815260006107af6020830184612815565b606081526000612a7e6060830186612815565b8281036020840152612a908186612815565b90508281036040840152612aa48185612858565b9695505050505050565b608081526000612ac16080830187612815565b8281036020840152612ad38187612815565b90508281036040840152612ae78186612858565b90508281036060840152612a4d8185612858565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b82811015612b4f57603f19888603018452612b3d858351612972565b94509285019290850190600101612b21565b5092979650505050505050565b6020815260006124226020830184866128ac565b604081526000612b846040830185876128ac565b9050826020830152949350505050565b6020815260006107af602083018461292b565b604081526000612bba604083018561292b565b828103602084015261226c818561292b565b6040808252810183905260006001600160fb1b03841115612beb578081fd5b8360051b80866060850137820160600190815260209091019190915292915050565b604081526000612b8460408301858761299e565b6020815260006107af6020830184612972565b604081526000612c476040830185612972565b828103602084015261226c8185612972565b6000808335601e19843603018112612c6f578283fd5b8301803591506001600160401b03821115612c88578283fd5b602001915036819003821315610d4a57600080fd5b604051601f8201601f191681016001600160401b0381118282101715612cc557612cc5612d46565b604052919050565b60008219821115612ce057612ce0612d30565b500190565b60005b83811015612d00578181015183820152602001612ce8565b83811115612d0f576000848401525b50505050565b6000600019821415612d2957612d29612d30565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114612d7157600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class ProxyReader__factory extends ethers_1.ContractFactory {
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
exports.ProxyReader__factory = ProxyReader__factory;
ProxyReader__factory.bytecode = _bytecode;
ProxyReader__factory.abi = _abi;
