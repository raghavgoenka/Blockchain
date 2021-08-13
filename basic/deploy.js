const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
 'rug urge clown hold history fluid magnet soda able traffic pony high',
 'HTTP://127.0.0.1:7545'
 
);  
const web3=new Web3(provider);

const deploy=async ()=>{
 
    const accounts= await web3.eth.getAccounts();
    console.log(accounts);
    console.log("Attempting to deploy from account",accounts[0]); 
    const result=await new web3.eth.Contract(interface)
    .deploy({
      data: bytecode,
      arguments: ['Hi there!'],
    
    })
    
    .send({ gas: '1000000',from: accounts[0]});
    console.log("Deployed contract at address",result.options.address); 
    // console.log(result);
};


deploy();
