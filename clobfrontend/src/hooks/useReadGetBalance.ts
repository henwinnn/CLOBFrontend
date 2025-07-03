import { useReadContract, useAccount } from "wagmi";
import { ERC20_ABI } from "../constants";
import type { Token } from "../types/types";

export const useTokenBalance = (token?: Token) => {
  const { address } = useAccount();

  const {
    data: balance,
    isLoading,
    refetch,
  } = useReadContract({
    address: token?.address as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!token && !!address,
      refetchInterval: 30000, // Refetch every 30 seconds
    },
  });

  return {
    balance: (balance as bigint) || BigInt(0),
    isLoading,
    refetch,
  };
};
