const path = require("path");
require('dotenv').config();

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    goerli: {
      host: "https://goerli.infura.io/v3/",
      network_id: "5"

    },
    dashboard: {
      port: 24012
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.13"
    }
  },
  db: {
    enabled: false
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
};
