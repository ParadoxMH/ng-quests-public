require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.9",
    paths: {
        sources: "./contracts_"
    },
    settings: {
      optimizer: {
        enabled: false
      },
      evmVersion: "london"
    },
};