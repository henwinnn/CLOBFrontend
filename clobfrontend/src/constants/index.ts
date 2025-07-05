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
  VAULT: "0xF23155D2FC6b31614E3FE209D513cC0083FB517B",
  SETTLEMENT: "0x621636306BFaD49868859bBdB8BaC76bC7450c67",
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
