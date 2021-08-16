import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !==undefined){

    web3 = new Web3(window.web3.currentProvider);
    // console.log("metamask+kkkkkkkkkkkkk");
}
else{
   const provider=new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/efac3104b14741c8a58856af59c7c7bb'
    // 'rug urge clown hold history fluid magnet soda able traffic pony high',
    // 'http://127.0.0.1:8545'
    
    );
   
    web3 = new Web3(provider);
    // console.log("new providerrrrrrrrrrrrrrrrrrrrrrrr");
}

export default web3;