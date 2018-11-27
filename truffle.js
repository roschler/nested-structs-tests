// Parse out the target network from the script arguments.
const argv = require('minimist')(process.argv);
var networkName = argv.network;

var accountNdx = 0;

// For Ganache, Use the environment value for the Ganache house public address.
var ganacheHousePublicAddr = process.env.GANACHE_HOUSE_PUBLIC_ADDRESS;

if (networkName == 'local')
{

	if (!ganacheHousePublicAddr)
	{
		let errMsg = 'The house public address is not set in the environment for the Ganache network (local).';
		console.log (errMsg);
		throw new Error(errMsg);
	}
	
	mnemonic = process.env.MNEMONIC_TEST_NETWORK_GANACHE;
}

console.log('Deployment settings: ');
if (networkName == 'local')
	console.log('    Using FROM address: ' + ganacheHousePublicAddr);
else
	console.log('    Using account index: ' + accountNdx.toString());
console.log('    Target network: ' + networkName);

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 8545,
      from: ganacheHousePublicAddr,
      network_id: "*" // Match any network id
    },
  },
  compilers: {
     solc: {
       /* version: "0.4.21" */
       version: "0.5.0"
     }
  },
  /** Added solidity optimize in attempt to combat out of gas errors during migrates to Ganache. **/
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
