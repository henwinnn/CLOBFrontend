import type { Address } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { CONTRACTS, VAULT_ABI } from "../constants";

export const useReadGetDepositBalance = (tokenAddress: Address) => {
  const { address } = useAccount();

  const {
    data: balance,
    isLoading,
    refetch,
  } = useReadContract({
    address: CONTRACTS.VAULT as Address,
    abi: VAULT_ABI,
    functionName: "balanceOf",
    args: [tokenAddress, address],
    query: {
      // enabled: !!tokenAddress && !!address,
      refetchInterval: 30000, // Refetch every 30 seconds
    },
  });

  return {
    balance: (balance as bigint) || BigInt(0),
    isLoading,
    refetch,
  };
};
