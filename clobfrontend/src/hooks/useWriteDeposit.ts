import { useState } from "react";
import { useWriteContract, useAccount, useReadContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { ERC20_ABI, CONTRACTS, VAULT_ABI } from "../constants";
import toast from "react-hot-toast";
import type { Token } from "../types/types";
import { parseTokenAmount } from "../utils/calculations";
import { config } from "../defaultConfig/config";

export const useDeposit = (token: Token) => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [isLoading, setIsLoading] = useState(false);
  const { data: allowanceRaw } = useReadContract({
    address: token?.address as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [address, CONTRACTS.VAULT as `0x${string}`],
  });
  const allowance = allowanceRaw as bigint;

  const deposit = async (amount: string): Promise<boolean> => {
    if (!address) return false;

    setIsLoading(true);

    try {
      const parsedAmount = parseTokenAmount(amount, token.decimals);
      if (allowance < parsedAmount) {
        await approveToken(token, parsedAmount);
        toast.loading("Depositing...", { id: "deposit" });
      }
      const hash = await writeContractAsync({
        address: CONTRACTS.VAULT as `0x${string}`,
        abi: VAULT_ABI,
        functionName: "deposit",
        args: [token.address, parsedAmount],
        account: address,
      });

      toast.loading("Confirming transaction...", { id: "deposit" });

      await waitForTransactionReceipt(config, { hash });

      toast.success(`Successfully deposited ${amount} ${token.name}`, {
        id: "deposit",
        duration: 5000,
      });

      return true;
    } catch (error) {
      console.error("Deposit failed:", error);
      toast.error("Failed to deposit. Please try again.", {
        id: "deposit",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const approveToken = async (token: Token, amount: bigint) => {
    const hash = await writeContractAsync({
      address: token.address as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "approve",
      args: [CONTRACTS.VAULT, amount],
      account: address!,
    });

    await waitForTransactionReceipt(config, { hash });
  };

  return {
    deposit,
    isLoading,
  };
};
