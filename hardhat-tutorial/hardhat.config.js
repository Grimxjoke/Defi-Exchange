require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const NODE_PROVIDER_API_KEY_URL = process.env.NODE_PROVIDER_API_KEY_URL;

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: NODE_PROVIDER_API_KEY_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
};
