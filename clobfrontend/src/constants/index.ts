import ERC20_ABI_JSON from "./ERC20_ABI.json";

export const ERC20_ABI = ERC20_ABI_JSON;

// Contract addresses dari environment variables
export const CONTRACTS = {
  MOCK_USDC: "0xce0ee4a71691cc2a3784126cbb5bed5dcf5e1987",
  RUG: "0x3974A994dD49a9b87C3E5887aAaCbD973c688245",
} as const;

// Token configurations
export const TOKENS = {
  USDC: {
    address: CONTRACTS.MOCK_USDC,
    symbol: "USDC",
    name: "Mock USDC",
    decimals: 6,
    logo: "💵",
  },
  RUG: {
    address: CONTRACTS.RUG,
    symbol: "RUG",
    name: "RUG",
    decimals: 18,
    logo: "💵",
  },
} as const;
