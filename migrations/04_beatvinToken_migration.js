var BeatvinTokenERC20Burnable = artifacts.require("BeatvinTokenERC20Burnable");

module.exports = function(deployer) {
  deployer.deploy(BeatvinTokenERC20Burnable);
};