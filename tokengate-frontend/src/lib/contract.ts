import { Abi } from "viem";

export const TOKEN_GATE_ADDRESS =
  "0xdE2c33c04Ea01364D56Fb6E700b26482b6A15c32";

export const TOKEN_GATE_ABI: Abi = [
  {
    "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
];
