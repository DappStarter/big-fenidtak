require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender smoke finger cruise mushroom method hen light army giant'; 
let testAccounts = [
"0xaadf9e81c88141cd0a1ef36f5fa1dab825de1f2e27bbb50caddd78c90d71306e",
"0x593728e967522c36d9a1d3d72136a941268be0e59619c388201274923373e3a5",
"0x7edb57580989fe236ffcd91dd80c01d1e79be83d26728c26fcb242c21e14f740",
"0x7cfb90709e157e8922e2731a1f6702ad22fbe7bc0106b733b6af73c55b1c1056",
"0x4558c0cf082960a7e88e877c1a4c3834aaff569f6e4ad6011bf3477d8aef0150",
"0x3e82016e27287bbfc3f2a611c9d9f652a09d300c580edbdaff4568eafb549164",
"0xcdd93b13e40cb993fedf5fdd9724d09ada00d0231224925f5a295ab46e8231b8",
"0xdff34b8879f254cad713e6501331b02dd78a5cdb5f4c4bfcfedc596c6e80b28d",
"0x926f09564cd6e91c33cfc20d10365fa80a3ef507cfde2e181c3290949044b156",
"0xe470667526ae46a7992d8722abc5af5abc5760ff76a92a6d858dcca641886d88"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

