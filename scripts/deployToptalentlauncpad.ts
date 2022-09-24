import { ethers } from "hardhat";

async function main() {
  const name_ = "Toptalentlauncpad";
  const symbol_ = "XTTL";
  const _router = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3";
  const _marketingWallet = "0x36285fDa2bE8a96fEb1d763CA77531D696Ae3B0b";
  const _liquidityWallet = "0x36285fDa2bE8a96fEb1d763CA77531D696Ae3B0b";
  const _minAmountToAdd = ethers.utils.parseUnits("10000", "ether");
  const _isTradingEnabled = true;

  const Toptalentlauncpad = await ethers.getContractFactory("Toptalentlauncpad");
  const toptalentlauncpad = await Toptalentlauncpad.deploy(name_, symbol_, _router, _marketingWallet, _liquidityWallet, _minAmountToAdd, _isTradingEnabled);

  await toptalentlauncpad.deployed();

  console.log(`Toptalentlauncpad deployed to ${toptalentlauncpad.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
