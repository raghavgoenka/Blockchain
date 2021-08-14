import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !==undefined){

    web3 = new Web3(window.web3.currentProvider);
}
else{
   const provider=new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/efac3104b14741c8a58856af59c7c7bb');

    web3 = new Web3(provider);
}

export default web3;