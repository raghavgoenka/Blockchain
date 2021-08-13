const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let lottery;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts()
  // Use one of those accounts to deploy
  // the contract
  lottery  = await new web3.eth.Contract(interface)
    .deploy({
      data: bytecode
      })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Lottery Contract', () => {
   it('deploys a contract', () => {
    //  console.log(lottery);
   
    assert.ok(lottery.options.address);
  });
  it('allows one account to enter', async () => {
       await lottery.methods.enter().send({ 
         from: accounts[0],
        value: web3.utils.toWei('0.02', 'ether') });

  const players=await lottery.methods.getPlayers().call({
    from: accounts[0]
   });
   assert.equal(1,players.length);
   assert.equal(accounts[0],players[0]);
  });
});