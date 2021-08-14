const path=require('path');
const fs=require('fs-extra');
const solc=require('solc');
const Web3=require('web3');

const buildPath=path.resolve(__dirname,'build');
fs.removeSync(buildPath);
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
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['hello.sol'];

fs.ensureDirSync(buildPath);
for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, contract+ ".json"),
        output[contract]);
}

// const interface = output.contracts['hello.sol'].Lottery.abi;
// const bytecode = output.contracts['hello.sol'].Lottery.evm.bytecode.object;

// module.exports = {
//     interface,
//     bytecode,
// };