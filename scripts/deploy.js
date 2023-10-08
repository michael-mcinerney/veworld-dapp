/*eslint-disable*/
// hi
const hre = require("hardhat")

async function main() {
  const Token = await hre.ethers.getContractFactory("MyVIP180")
  const token = await Token.deploy("My Token", "MTK", 18)

  await token.deployed()

  console.log("Counter deployed to:", token.address)
}

main()
  .then(() => {
    //Process was not exiting for som reason...
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
