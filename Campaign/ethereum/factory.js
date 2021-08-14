import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x9eb0d2829286A8892d21f5BC2b044413d376BeA3"
);

export default instance;
