import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumber, utils } from 'ethers';
import { UNSRegistry } from '../../types/contracts';
import { UNSRegistry__factory } from '../../types/factories/contracts';
import { TLD, ZERO_ADDRESS } from '../helpers/constants';

describe('UNSRegistry (consumption)', () => {
  let unsRegistry: UNSRegistry;
  let signers: SignerWithAddress[], coinbase: SignerWithAddress;

  function percDiff (a: number, b: number) {
    return -((a - b) / a) * 100;
  }

  const initializeKey = async (key) => {
    await unsRegistry.addKey(key);
    return BigNumber.from(utils.id(key));
  };

  before(async () => {
    signers = await ethers.getSigners();
    [coinbase] = signers;

    unsRegistry = await new UNSRegistry__factory(coinbase).deploy();
    await unsRegistry.initialize(coinbase.address, ZERO_ADDRESS, ZERO_ADDRESS, ZERO_ADDRESS);
    await unsRegistry.mintTLD(TLD.CRYPTO, 'crypto');
    await unsRegistry.setTokenURIPrefix('/');
  });

  it('Consumption (set vs setByHash)', async () => {
    const result: unknown[] = [];

    const cases = [
      {
        name: 'Set Record',
        selector1: 'set(string,string,uint256)',
        selector2: 'setByHash(uint256,string,uint256)',
        labels1: ['t1-w1', 'crypto'],
        labels2: ['t1-w2', 'crypto'],
        params1: ['k1', 'v1'],
        params2: ['k1', 'v2'],
      },
      {
        name: 'Set Record',
        selector1: 'set(string,string,uint256)',
        selector2: 'setByHash(uint256,string,uint256)',
        labels1: ['t1-w3', 'crypto'],
        labels2: ['t1-w4', 'crypto'],
        params1: ['9898219c054e083f4240', 'v1'],
        params2: ['9898219c054e083f4240', 'v1'],
      },
      {
        name: 'Set Record',
        selector1: 'set(string,string,uint256)',
        selector2: 'setByHash(uint256,string,uint256)',
        labels1: ['t1-w5', 'crypto'],
        labels2: ['t1-w6', 'crypto'],
        params1: ['9898219c054e083d016bc50000000000000f4240', 'v1'],
        params2: ['9898219c054e083d016bc50000000000000f4240', 'v1'],
      },
      {
        name: 'Set Record',
        selector1: 'set(string,string,uint256)',
        selector2: 'setByHash(uint256,string,uint256)',
        labels1: ['t1-w7', 'crypto'],
        labels2: ['t1-w8', 'crypto'],
        params1: ['9898219.c054e083d016bc5000000000000000000000000000000000000000000000000000000000000.f4240', 'v1'],
        params2: ['9898219.c054e083d016bc5000000000000000000000000000000000000000000000000000000000000.f4240', 'v1'],
      },
    ];
    for (let i = 0; i < cases.length; i++) {
      const { name, selector1, selector2, labels1, labels2, params1, params2 } = cases[i];

      const tokenId1 = await unsRegistry.namehash(labels1);
      await unsRegistry.mintWithRecords(coinbase.address, labels1, [], [], false);

      const tokenId2 = await unsRegistry.namehash(labels2);
      await unsRegistry.mintWithRecords(coinbase.address, labels2, [], [], false);

      const [key, value] = params2;
      const keyHash = await initializeKey(key);

      const tx1 = await unsRegistry[selector1](...params1, tokenId1);
      tx1.receipt = await tx1.wait();

      const tx2 = await unsRegistry[selector2](keyHash, value, tokenId2);
      tx2.receipt = await tx2.wait();

      result.push({
        name,
        recordLen: params1[0].length,
        set: tx1.receipt.gasUsed.toString(),
        setByHash: tx2.receipt.gasUsed.toString(),
        increase: percDiff(tx1.receipt.gasUsed.toNumber(), tx2.receipt.gasUsed.toNumber()).toFixed(2) + ' %',
      });
    }
    console.table(result);
  });

  it('Consumption (setMany vs setManyByHash)', async () => {
    const result: unknown[] = [];

    const cases = [
      {
        name: 'Set Records',
        selector1: 'setMany(string[],string[],uint256)',
        selector2: 'setManyByHash(uint256[],string[],uint256)',
        labels1: ['t2-w1', 'crypto'],
        labels2: ['t2-w2', 'crypto'],
        params1: [['k1'], ['v1']],
        params2: [['k1'], ['v2']],
      },
      {
        name: 'Set Records',
        selector1: 'setMany(string[],string[],uint256)',
        selector2: 'setManyByHash(uint256[],string[],uint256)',
        labels1: ['t3-w1', 'crypto'],
        labels2: ['t3-w2', 'crypto'],
        params1: [
          ['k1', 'k2'],
          ['v1', 'vc1'],
        ],
        params2: [
          ['k1', 'k2'],
          ['v2', 'vc2'],
        ],
      },
      {
        name: 'Set Records',
        selector1: 'setMany(string[],string[],uint256)',
        selector2: 'setManyByHash(uint256[],string[],uint256)',
        labels1: ['t4-w1', 'crypto'],
        labels2: ['t4-w2', 'crypto'],
        params1: [
          ['k1', 'k2', 'k3'],
          ['v1', 'vc1', 'vq1'],
        ],
        params2: [
          ['k1', 'k2', 'k3'],
          ['v2', 'vc2', 'vq2'],
        ],
      },
    ];
    for (let i = 0; i < cases.length; i++) {
      const { name, selector1, selector2, labels1, labels2, params1, params2 } = cases[i];

      const tokenId1 = await unsRegistry.namehash(labels1);
      await unsRegistry.mintWithRecords(coinbase.address, labels1, [], [], false);

      const tokenId2 = await unsRegistry.namehash(labels2);
      await unsRegistry.mintWithRecords(coinbase.address, labels2, [], [], false);

      const [keys, values] = params2;
      const keyHashes = keys.map(async (key) => await initializeKey(key));

      const tx1 = await unsRegistry[selector1](...params1, tokenId1);
      tx1.receipt = await tx1.wait();

      const tx2 = await unsRegistry[selector2](keyHashes, values, tokenId2);
      tx2.receipt = await tx2.wait();

      result.push({
        name,
        records: params1[0].length,
        setMany: tx1.receipt.gasUsed.toString(),
        setManyByHash: tx2.receipt.gasUsed.toString(),
        increase: percDiff(tx1.receipt.gasUsed.toNumber(), tx2.receipt.gasUsed.toNumber()).toFixed(2) + ' %',
      });
    }
    console.table(result);
  });
});
