import { network } from 'hardhat';
import { mergeNetworkConfig, readNetworkConfig } from '../src/config';
import { Deployer } from '../src/deployer';

async function main () {
  console.log('Network:', network.name);

  const chainId: number = network.config.chainId!;
  const config = readNetworkConfig()[chainId];
  if (!config) {
    throw new Error(`Config not found for network ${chainId}`);
  }

  const deployer = await Deployer.create();
  const deployConfig = await deployer.execute(['uns', 'uns_config_cns'], config);
  mergeNetworkConfig(deployConfig);

  console.log('Deployed!');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
