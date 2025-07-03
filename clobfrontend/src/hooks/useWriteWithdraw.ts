import { useState } from "react";
import { useWriteContract, useAccount } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { CONTRACTS, VAULT_ABI } from "../constants";
import toast from "react-hot-toast";
import type { Token } from "../types/types";
import { parseTokenAmount } from "../utils/calculations";
import { config } from "../defaultConfig/config";

export const useWithdraw = (token: Token) => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [isLoading, setIsLoading] = useState(false);
  const withdraw = async (amount: string): Promise<boolean> => {
    if (!address) return false;
    setIsLoading(true);

    try {
      const parsedAmount = parseTokenAmount(amount, token.decimals);
      const hash = await writeContractAsync({
        address: CONTRACTS.VAULT as `0x${string}`,
        abi: VAULT_ABI,
        functionName: "withdraw",
        args: [token.address, parsedAmount, address],
        account: address,
      });

      toast.loading("Confirming transaction...", { id: "withdraw" });

      await waitForTransactionReceipt(config, { hash });

      toast.success(`Successfully withdrawn ${amount} ${token.name}`, {
        id: "withdraw",
        duration: 5000,
      });

      return true;
    } catch (error) {
      console.error("withdraw failed:", error);
      toast.error("Failed to withdraw. Please try again.", {
        id: "withdraw",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    withdraw,
    isLoading,
  };
};
