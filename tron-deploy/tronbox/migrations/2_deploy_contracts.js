var MyContract = artifacts.require("./SendMessage.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract, "Hi QuickNode!");
};