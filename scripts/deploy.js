const hre = require("hardhat");

async function main() {
  const TokenGateNFT = await hre.ethers.getContractFactory("TokenGateNFT");
  const tokenGateNFT = await TokenGateNFT.deploy();

  await tokenGateNFT.waitForDeployment();

  console.log("✅ TokenGateNFT deployed to:", await tokenGateNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
