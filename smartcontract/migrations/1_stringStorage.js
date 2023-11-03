const StringStorage = artifacts.require("StringStorage");

module.exports = function (deployer) {
  // Deploy the StringStorage contract
  deployer.deploy(StringStorage);
};