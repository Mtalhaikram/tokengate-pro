const hre = require("hardhat");

async function main() {
  const CONTRACT_ADDRESS = "0xdE2c33c04Ea01364D56Fb6E700b26482b6A15c32";

  const [deployer] = await hre.ethers.getSigners();

  const nft = await hre.ethers.getContractAt(
    "TokenGateNFT",
    CONTRACT_ADDRESS,
    deployer
  );

  const tx = await nft.mint(deployer.address);
  await tx.wait();

  console.log("✅ NFT minted to:", deployer.address);
}

main().catch(console.error);
