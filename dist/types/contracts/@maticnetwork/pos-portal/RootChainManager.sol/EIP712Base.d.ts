import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface EIP712BaseInterface extends utils.Interface {
    functions: {
        "ERC712_VERSION()": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getDomainSeperator()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ERC712_VERSION" | "getChainId" | "getDomainSeperator"): FunctionFragment;
    encodeFunctionData(functionFragment: "ERC712_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDomainSeperator", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ERC712_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomainSeperator", data: BytesLike): Result;
    events: {};
}
export interface EIP712Base extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EIP712BaseInterface;
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
        ERC712_VERSION(overrides?: CallOverrides): Promise<[string]>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDomainSeperator(overrides?: CallOverrides): Promise<[string]>;
    };
    ERC712_VERSION(overrides?: CallOverrides): Promise<string>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getDomainSeperator(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ERC712_VERSION(overrides?: CallOverrides): Promise<string>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeperator(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ERC712_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeperator(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ERC712_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDomainSeperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=EIP712Base.d.ts.map