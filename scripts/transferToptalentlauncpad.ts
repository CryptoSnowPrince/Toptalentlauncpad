import { ethers } from "hardhat";

async function main() {
  const signer = await ethers.getSigners();
  console.log("signer: ", signer[0].address);

  const XTTLAddr = "0x7B23290Ead0e5F18E1201e60F17eA286E27959Ac";
  const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const XTTL = new ethers.Contract(XTTLAddr, ABI, signer[0])

  for (let index = 0; index < 10; index++) {
    const tx = await XTTL.transfer("0x256C9FbE9093E7b9E3C4584aDBC3066D8c6216da", ethers.utils.parseUnits("10", "ether"))
    console.log(index, " txHash", tx.hash);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
