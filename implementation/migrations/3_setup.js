const TBTCToken = artifacts.require('TBTCToken')
const UniswapDeployment = artifacts.require('UniswapDeployment')
const IUniswapFactory = artifacts.require('IUniswapFactory')
const TBTCSystem = artifacts.require('TBTCSystem')

module.exports = async (deployer, network, accounts) => {
  const tbtcToken = await TBTCToken.deployed()
  const uniswapDeployment = await UniswapDeployment.deployed()
  const uniswapFactory = await IUniswapFactory.at(
    await uniswapDeployment.factory.call()
  )

  await uniswapFactory.createExchange(tbtcToken.address)

  const tbtcSystem = await TBTCSystem.deployed()
  await tbtcSystem.setExternalAddresses(uniswapFactory.address)
}