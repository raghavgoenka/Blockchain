const HDWalletProvider= require('@truffle/hdwallet-provider');
const Web3=require('web3');



const compiledFactory = require("./build/CampaignFactory.json");
// const compiledCampaign = require("../ethereum/build/Campaign.json");


const provider=new HDWalletProvider(
//  'poverty yard chalk arctic cruise broken beyond drill alien limit carpet trial',
  'rug urge clown hold history fluid magnet soda able traffic pony high',
  'HTTP://127.0.0.1:7545'

//  'https://rinkeby.infura.io/v3/efac3104b14741c8a58856af59c7c7bb'
 
);  
const web3=new Web3(provider);

const deploy=async ()=>{
 
    const accounts= await web3.eth.getAccounts();
    console.log(accounts);
    console.log("Attempting to deploy from account",accounts[0]); 
    const result=await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object
      })
    .send({ gas: '3000000',from: accounts[0]});
   
    console.log("Deployed contract at address",result.options.address); 
};


deploy();