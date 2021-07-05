require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index riot magic huge grace fashion equal gauge'; 
let testAccounts = [
"0xb75505c613276ee025fd515988e534e5e7b50c23d3e8c395268b34eb93202929",
"0x20a844b2341d534198988e463dd99a3a9c0bfc9dee14dd66be8c2176c5747991",
"0x136cab075fad6ad46c2f9d6f480f7d7f66bceea1bdc83740e231d7170c3a8ce7",
"0x6879ca66f7010e04ac8f93c9f6836d330947e7955624aa48b37f0af3d0f63a3c",
"0x6baedb61a467bd1ba9d95c915a605ea04851668d00b1e02a0f6bdbe588f83503",
"0x884c70c29eedd353a26d91e34cedfb324d09d493fe5f10318791c3d98460f628",
"0x1164ed46095d2ee6b77382b5dff3ed3afc322c9c246ca5cd34d92d9848fdb750",
"0x1a6490217ff7d7bf216a5ae1444189afdc7276a1b4c7157ed99a028e7a2a62a9",
"0x2f40589938b3ed8293d2e6345114c029dd5e131d1099085ae1c1cd812b6b3a19",
"0xb274f1334de3705e90642b5fc15fab73b70e702b094e942a8db81c7d93abc2f7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


