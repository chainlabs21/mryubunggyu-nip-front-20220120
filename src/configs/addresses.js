import { net } from "./net";

const jaddresses = {
  ETH_TESTNET: {
    contract_USDT: "0x34da0872bb4b215345f6e47ed6514d8c4cd5f8e0",
    //	 , contract_stake : '0xa30fec0c860659639247b66ebbe3b2ccc9145e4c' // ver0223 // 0x87ac1e8378cdb6ad11e85ea9565b385b03970279'
    contract_stake: "0xc964f791b8e92336abfb3fde5fd4738700110379",
    contract_admin: "0x005b38d678753f211abae8dbb38c45a9d159ecee", // 0xd24ff65996e94d79d3cd8a22e8f95c42fbec0e0f'
    // contract_pay_for_assigned_item: "0xaf9764ef97102951f9339d515e4c41099e8fc992",
    contract_pay_for_assigned_item:
      "0x70D2764D702d90c1E068a5DB6006410dDa1A1D32", // 2022.05.08 3:57pm release latest
    payment_for_delinquency: "0x2cdb6d037cc0a9e5480f9071b4a00f20055057a7",
    contract_ticketnft: "0x60123597c04bB08655e027B3398D0BD336ad68C6",
  },
  BSC_MAINNET: {
    contract_USDT: "0x55d398326f99059fF775485246999027B3197955", // owner : 0x83f714ad20e34748516e8367faf143abde6c3783
    contract_stake: "0x53caf649502a39c1a6d360d77e12676425f74860",
    contract_admin: "0x59e84ece084a0e2cabc1e344320b71d8be117ea9",
    contract_ticketnft: "0x6208803CC8FAfdeCEA589666c96d40836daccB46",
    contract_pay_for_assigned_item:
      "0xda90f3b82c531f32af791fa3a3e7a67b36aa0844",
    payment_for_delinquency: "0xc7b12c6b2c0214ed60cfc1e2f3efdd6d83b58f29",
  },
};
let addresses = jaddresses[net];
export { addresses };
