import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { parseTokenAmount } from "../utils/calculations";
import { CONTRACTS, SETTLEMENT_ABI } from "../constants";
import type { Address } from "viem";
import toast from "react-hot-toast";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../defaultConfig/config";

export const useWritePlaceOrder = (
  bidAskType: number,
  tokenBuy: string,
  tokenSell: string,
  price: string,
  amount: string
) => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const placeOrder = async (): Promise<boolean> => {
    if (!address) return false;

    setIsLoading(true);
    try {
      const parsedPrice = BigInt(parseFloat(price));
      const parsedAmount = parseTokenAmount(amount, 8);
      const hash = await writeContractAsync({
        address: CONTRACTS.SETTLEMENT as Address,
        abi: SETTLEMENT_ABI,
        functionName: "placeOrder",
        args: [bidAskType, tokenBuy, tokenSell, parsedPrice, parsedAmount],
        account: address,
      });

      toast.loading("Confirming transaction...", { id: "placeOrder" });

      await waitForTransactionReceipt(config, { hash });

      toast.success(
        `Successfully placed order for ${amount} of $BTC at ${price}`,
        {
          id: "placeOrder",
          duration: 5000,
        }
      );

      return true;
    } catch (error) {
      console.error("Place order failed:", error);
      toast.error("Failed to place order. Please try again.", {
        id: "placeOrder",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { placeOrder, isLoading };
};
