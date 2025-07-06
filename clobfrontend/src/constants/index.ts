import ERC20_ABI_JSON from "./ERC20_ABI.json";
import VAULT_ABI_JSON from "./VAULT_ABI.json";
import SETTLEMENT_ABI_JSON from "./SETTLEMENT_ABI.json";

export const ERC20_ABI = ERC20_ABI_JSON;
export const VAULT_ABI = VAULT_ABI_JSON;
export const SETTLEMENT_ABI = SETTLEMENT_ABI_JSON;

// Contract addresses dari environment variables
export const CONTRACTS = {
  USDC: "0x9ac4f086840561b014130d3cb5F43646BAC8AaD7",
  BTC: "0x43Baf4b67F2c7c274f4E1C9E7a8100d087f56Cb3",
  VAULT: "0x483F54C126a8591EA6Ac9c19a9330CD414B28151",
  SETTLEMENT: "0xEa98eFD68A7f351707473544c331ad53CE74CF7a",
} as const;

// Token configurations
export const TOKENS = {
  USDC: {
    address: CONTRACTS.USDC,
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
  },
  BTC: {
    address: CONTRACTS.BTC,
    symbol: "BTC",
    name: "BTC",
    decimals: 8,
  },
} as const;

export const TokenName = {
  "0x9ac4f086840561b014130d3cb5F43646BAC8AaD7": "USDC",
  "0x43Baf4b67F2c7c274f4E1C9E7a8100d087f56Cb3": "BTC",
} as const;

// Helper function to get token name by address
export const getTokenName = (address: string): string | undefined => {
  return TokenName[address as keyof typeof TokenName];
};
