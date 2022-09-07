var beatvinTokenERC20Burnable = artifacts.require("beatvinTokenERC20Burnable");

module.exports = function(deployer) {
  deployer.deploy(beatvinTokenERC20Burnable);
};