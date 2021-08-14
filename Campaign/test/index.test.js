const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let campaign;
let campaignAddress;
let factory;

beforeEach(async () => {
  // Get a list of all accounts

  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy
  // the contract

  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: "3000000" });

  await factory.methods
    .createCampaign("100")
    .send({ from: accounts[0], gas: "3000000" });
  const addresses = await factory.methods.getDeployedCampaigns().call();

  campaignAddress = addresses[0];
  campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });
  it("allows people to contribute and marks them as approvers", async () => {
    const manager = await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });

    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });
  it("requires minimum contribution", async () => {
    try {
      const manager = await campaign.methods.contribute().send({
        value: "5",
        from: accounts[1],
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("allows managers to make a payment request", async () => {
    const manager = await campaign.methods
      .createRequest("Buy batteries", "100", accounts[1])
      .send({
        from: accounts[0],
        gas: "3000000",
      });
    const request = await campaign.methods.requests(0).call();

    assert.equal("Buy batteries", request.description);
  });

  it("processes requests", async () => {
    const manager = await campaign.methods
      .contribute()
      .send({
        value:web3.utils.toWei("10", "ether"),
        from: accounts[0],
        gas: "3000000",
      });
  await campaign.methods
  .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
  .send({
    from: accounts[0],
    gas: "3000000"
  });
  await campaign.methods.approveRequest(0).send({
    from: accounts[0],
    gas: "3000000"
  });
  await campaign.methods.finalizeRequest(0).send({
    from: accounts[0],
    gas: "3000000"
  });

  let balance= await web3.eth.getBalance(accounts[1]);
  balance=web3.utils.fromWei(balance, "ether");
  balance=parseFloat(balance);
  console.log(balance);
  assert(balance>103)
    
  });
});
