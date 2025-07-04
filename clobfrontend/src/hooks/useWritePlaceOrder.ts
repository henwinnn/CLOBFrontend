import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { parseTokenAmount } from "../utils/calculations";
import { CONTRACTS, ERC20_ABI, SETTLEMENT_ABI } from "../constants";
import type { Address } from "viem";
import toast from "react-hot-toast";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../defaultConfig/config";

export const useWritePlaceOrder = (
  bidAskType: string,
  tokenBuy: string,
  tokenSell: string,
  price: string,
  amount: string
) => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log("bidAskType", bidAskType);
  console.log("tokenBuy", tokenBuy);
  console.log("tokenSell", tokenSell);
  console.log("price", price);
  console.log("amount", amount);
  const placeOrder = async (): Promise<boolean> => {
    if (!address) return false;

    setIsLoading(true);

    try {
      const parsedPrice = parseFloat(price);
      const parsedAmount = parseTokenAmount(amount, 8); // Assuming 18 decimals for simplicity
      //   if (allowance < parsedAmount) {
      //     await approveToken(tokenBuy, parsedAmount);
      //     toast.loading("Depositing...", { id: "deposit" });
      //   }

      console.log("parsedPrice", parsedPrice);
      console.log("parsedAmount", parsedAmount);
      const hash = await writeContractAsync({
        address: CONTRACTS.SETTLEMENT as Address,
        abi: SETTLEMENT_ABI,
        functionName: "placeOrder",
        args: [
          Number(bidAskType),
          tokenBuy,
          tokenSell,
          parsedPrice,
          parsedAmount,
        ],
        account: address,
      });

      toast.loading("Confirming transaction...", { id: "placeOrder" });

      await waitForTransactionReceipt(config, { hash });

      toast.success(
        `Successfully placed order for ${amount} ${tokenBuy} at ${price}`,
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

  //   const approveToken = async (token: Token, amount: bigint) => {
  //     const hash = await writeContractAsync({
  //       address: token.address as `0x${string}`,
  //       abi: ERC20_ABI,
  //       functionName: "approve",
  //       args: [CONTRACTS.SETTLEMENT, amount],
  //       account: address!,
  //     });

  //     await waitForTransactionReceipt(config, { hash });
  //   };
  return { placeOrder, isLoading };
};
