import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x5dAD4c23b52a66D04FcC16ad379cDCdA3Fe8462A"
);

export default instance;
