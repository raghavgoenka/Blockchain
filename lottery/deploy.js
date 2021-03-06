const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
 'poverty yard chalk arctic cruise broken beyond drill alien limit carpet trial',
 'https://rinkeby.infura.io/v3/efac3104b14741c8a58856af59c7c7bb'
 
);  
const web3=new Web3(provider);

const deploy=async ()=>{
 
    const accounts= await web3.eth.getAccounts();
    console.log("Attempting to deploy from account",accounts[0]); 
    const result=await new web3.eth.Contract(interface)
    .deploy({
      data: bytecode
      })
    .send({ gas: '1000000',from: accounts[0]});
    // console.log(interface);
    console.log("Deployed contract at address",result.options.address); 
};


deploy();