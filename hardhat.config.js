require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x133b44602862fadb8394a383b0aa4d159edbcaca8e15828743bc255dac7af486"],
    },
  },
};
