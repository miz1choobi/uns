import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface RootChainManagerInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "DEPOSIT()": FunctionFragment;
        "ERC712_VERSION()": FunctionFragment;
        "ETHER_ADDRESS()": FunctionFragment;
        "MAPPER_ROLE()": FunctionFragment;
        "MAP_TOKEN()": FunctionFragment;
        "checkpointManagerAddress()": FunctionFragment;
        "childChainManagerAddress()": FunctionFragment;
        "childToRootToken(address)": FunctionFragment;
        "cleanMapToken(address,address)": FunctionFragment;
        "depositEtherFor(address)": FunctionFragment;
        "depositFor(address,address,bytes)": FunctionFragment;
        "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
        "exit(bytes)": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getDomainSeperator()": FunctionFragment;
        "getNonce(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "initializeEIP712()": FunctionFragment;
        "mapToken(address,address,bytes32)": FunctionFragment;
        "processedExits(bytes32)": FunctionFragment;
        "registerPredicate(bytes32,address)": FunctionFragment;
        "remapToken(address,address,bytes32)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "rootToChildToken(address)": FunctionFragment;
        "setCheckpointManager(address)": FunctionFragment;
        "setChildChainManagerAddress(address)": FunctionFragment;
        "setStateSender(address)": FunctionFragment;
        "setupContractId()": FunctionFragment;
        "stateSenderAddress()": FunctionFragment;
        "tokenToType(address)": FunctionFragment;
        "typeToPredicate(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "DEPOSIT" | "ERC712_VERSION" | "ETHER_ADDRESS" | "MAPPER_ROLE" | "MAP_TOKEN" | "checkpointManagerAddress" | "childChainManagerAddress" | "childToRootToken" | "cleanMapToken" | "depositEtherFor" | "depositFor" | "executeMetaTransaction" | "exit" | "getChainId" | "getDomainSeperator" | "getNonce" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "initialize" | "initializeEIP712" | "mapToken" | "processedExits" | "registerPredicate" | "remapToken" | "renounceRole" | "revokeRole" | "rootToChildToken" | "setCheckpointManager" | "setChildChainManagerAddress" | "setStateSender" | "setupContractId" | "stateSenderAddress" | "tokenToType" | "typeToPredicate"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEPOSIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "ERC712_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "ETHER_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAPPER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAP_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpointManagerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "childChainManagerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "childToRootToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cleanMapToken", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositEtherFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "executeMetaTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exit", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDomainSeperator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initializeEIP712", values?: undefined): string;
    encodeFunctionData(functionFragment: "mapToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "processedExits", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "registerPredicate", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "remapToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rootToChildToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCheckpointManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setChildChainManagerAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setStateSender", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setupContractId", values?: undefined): string;
    encodeFunctionData(functionFragment: "stateSenderAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenToType", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "typeToPredicate", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEPOSIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ERC712_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ETHER_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAPPER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAP_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpointManagerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "childChainManagerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "childToRootToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cleanMapToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositEtherFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMetaTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomainSeperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeEIP712", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processedExits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerPredicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remapToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootToChildToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCheckpointManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChildChainManagerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStateSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setupContractId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stateSenderAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "typeToPredicate", data: BytesLike): Result;
    events: {
        "MetaTransactionExecuted(address,address,bytes)": EventFragment;
        "PredicateRegistered(bytes32,address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "TokenMapped(address,address,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PredicateRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenMapped"): EventFragment;
}
export interface MetaTransactionExecutedEventObject {
    userAddress: string;
    relayerAddress: string;
    functionSignature: string;
}
export declare type MetaTransactionExecutedEvent = TypedEvent<[
    string,
    string,
    string
], MetaTransactionExecutedEventObject>;
export declare type MetaTransactionExecutedEventFilter = TypedEventFilter<MetaTransactionExecutedEvent>;
export interface PredicateRegisteredEventObject {
    tokenType: string;
    predicateAddress: string;
}
export declare type PredicateRegisteredEvent = TypedEvent<[
    string,
    string
], PredicateRegisteredEventObject>;
export declare type PredicateRegisteredEventFilter = TypedEventFilter<PredicateRegisteredEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface TokenMappedEventObject {
    rootToken: string;
    childToken: string;
    tokenType: string;
}
export declare type TokenMappedEvent = TypedEvent<[
    string,
    string,
    string
], TokenMappedEventObject>;
export declare type TokenMappedEventFilter = TypedEventFilter<TokenMappedEvent>;
export interface RootChainManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RootChainManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEPOSIT(overrides?: CallOverrides): Promise<[string]>;
        ERC712_VERSION(overrides?: CallOverrides): Promise<[string]>;
        ETHER_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        MAPPER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAP_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        checkpointManagerAddress(overrides?: CallOverrides): Promise<[string]>;
        childChainManagerAddress(overrides?: CallOverrides): Promise<[string]>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMetaTransaction(userAddress: PromiseOrValue<string>, functionSignature: PromiseOrValue<BytesLike>, sigR: PromiseOrValue<BytesLike>, sigS: PromiseOrValue<BytesLike>, sigV: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDomainSeperator(overrides?: CallOverrides): Promise<[string]>;
        getNonce(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeEIP712(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        setCheckpointManager(newCheckpointManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setChildChainManagerAddress(newChildChainManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStateSender(newStateSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setupContractId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stateSenderAddress(overrides?: CallOverrides): Promise<[string]>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    DEPOSIT(overrides?: CallOverrides): Promise<string>;
    ERC712_VERSION(overrides?: CallOverrides): Promise<string>;
    ETHER_ADDRESS(overrides?: CallOverrides): Promise<string>;
    MAPPER_ROLE(overrides?: CallOverrides): Promise<string>;
    MAP_TOKEN(overrides?: CallOverrides): Promise<string>;
    checkpointManagerAddress(overrides?: CallOverrides): Promise<string>;
    childChainManagerAddress(overrides?: CallOverrides): Promise<string>;
    childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMetaTransaction(userAddress: PromiseOrValue<string>, functionSignature: PromiseOrValue<BytesLike>, sigR: PromiseOrValue<BytesLike>, sigS: PromiseOrValue<BytesLike>, sigV: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getDomainSeperator(overrides?: CallOverrides): Promise<string>;
    getNonce(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeEIP712(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    setCheckpointManager(newCheckpointManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setChildChainManagerAddress(newChildChainManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStateSender(newStateSender: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setupContractId(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stateSenderAddress(overrides?: CallOverrides): Promise<string>;
    tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        DEPOSIT(overrides?: CallOverrides): Promise<string>;
        ERC712_VERSION(overrides?: CallOverrides): Promise<string>;
        ETHER_ADDRESS(overrides?: CallOverrides): Promise<string>;
        MAPPER_ROLE(overrides?: CallOverrides): Promise<string>;
        MAP_TOKEN(overrides?: CallOverrides): Promise<string>;
        checkpointManagerAddress(overrides?: CallOverrides): Promise<string>;
        childChainManagerAddress(overrides?: CallOverrides): Promise<string>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        executeMetaTransaction(userAddress: PromiseOrValue<string>, functionSignature: PromiseOrValue<BytesLike>, sigR: PromiseOrValue<BytesLike>, sigS: PromiseOrValue<BytesLike>, sigV: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeperator(overrides?: CallOverrides): Promise<string>;
        getNonce(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initializeEIP712(overrides?: CallOverrides): Promise<void>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setCheckpointManager(newCheckpointManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setChildChainManagerAddress(newChildChainManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setStateSender(newStateSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setupContractId(overrides?: CallOverrides): Promise<void>;
        stateSenderAddress(overrides?: CallOverrides): Promise<string>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MetaTransactionExecuted(address,address,bytes)"(userAddress?: null, relayerAddress?: null, functionSignature?: null): MetaTransactionExecutedEventFilter;
        MetaTransactionExecuted(userAddress?: null, relayerAddress?: null, functionSignature?: null): MetaTransactionExecutedEventFilter;
        "PredicateRegistered(bytes32,address)"(tokenType?: PromiseOrValue<BytesLike> | null, predicateAddress?: PromiseOrValue<string> | null): PredicateRegisteredEventFilter;
        PredicateRegistered(tokenType?: PromiseOrValue<BytesLike> | null, predicateAddress?: PromiseOrValue<string> | null): PredicateRegisteredEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "TokenMapped(address,address,bytes32)"(rootToken?: PromiseOrValue<string> | null, childToken?: PromiseOrValue<string> | null, tokenType?: PromiseOrValue<BytesLike> | null): TokenMappedEventFilter;
        TokenMapped(rootToken?: PromiseOrValue<string> | null, childToken?: PromiseOrValue<string> | null, tokenType?: PromiseOrValue<BytesLike> | null): TokenMappedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEPOSIT(overrides?: CallOverrides): Promise<BigNumber>;
        ERC712_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        ETHER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        MAPPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        checkpointManagerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        childChainManagerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMetaTransaction(userAddress: PromiseOrValue<string>, functionSignature: PromiseOrValue<BytesLike>, sigR: PromiseOrValue<BytesLike>, sigS: PromiseOrValue<BytesLike>, sigV: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeperator(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeEIP712(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setCheckpointManager(newCheckpointManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setChildChainManagerAddress(newChildChainManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStateSender(newStateSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setupContractId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stateSenderAddress(overrides?: CallOverrides): Promise<BigNumber>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEPOSIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ERC712_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ETHER_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAPPER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAP_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpointManagerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        childChainManagerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMetaTransaction(userAddress: PromiseOrValue<string>, functionSignature: PromiseOrValue<BytesLike>, sigR: PromiseOrValue<BytesLike>, sigS: PromiseOrValue<BytesLike>, sigV: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDomainSeperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeEIP712(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCheckpointManager(newCheckpointManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setChildChainManagerAddress(newChildChainManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStateSender(newStateSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setupContractId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stateSenderAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RootChainManager.d.ts.map