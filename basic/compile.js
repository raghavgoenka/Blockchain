const path=require('path');
const fs=require('fs');
const solc=require('solc');
const Web3=require('web3');
const inboxPath=path.resolve(__dirname,'contracts','inbox.sol');
const source=fs.readFileSync(inboxPath,'utf8');
var input = {
    language: 'Solidity',
    sources: {
        'hello.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 
const output = JSON.parse(solc.compile(JSON.stringify(input)));
const interface = output.contracts['hello.sol'].Inbox.abi;
const bytecode = output.contracts['hello.sol'].Inbox.evm.bytecode.object;

module.exports = {
    interface,
    bytecode,
};
// new file