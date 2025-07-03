import ERC20_ABI_JSON from "./ERC20_ABI.json";

export const ERC20_ABI = ERC20_ABI_JSON;

// Contract addresses dari environment variables
export const CONTRACTS = {
  USDC: "0x9ac4f086840561b014130d3cb5F43646BAC8AaD7",
  BTC: "0x43Baf4b67F2c7c274f4E1C9E7a8100d087f56Cb3",
} as const;

// Token configurations
export const TOKENS = {
  USDC: {
    address: CONTRACTS.USDC,
    symbol: "USDC",
    name: "Mock USDC",
    decimals: 6,
  },
  RUG: {
    address: CONTRACTS.BTC,
    symbol: "RUG",
    name: "RUG",
    decimals: 8,
  },
} as const;
