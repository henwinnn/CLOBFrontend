import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { CONTRACTS, SETTLEMENT_ABI } from "../constants";
import type { Address } from "viem";
import toast from "react-hot-toast";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../defaultConfig/config";

export const useWriteCancelOrder = () => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const CancelOrder = async (orderId: number): Promise<boolean> => {
    if (!address) return false;

    setIsLoading(true);
    try {
      // const hash = await writeContractAsync({
      //   address: CONTRACTS.SETTLEMENT as Address,
      //   abi: SETTLEMENT_ABI,
      //   functionName: "batchFill",
      //   args: [
      //     [
      //       {
      //         bidId: BigInt(0),
      //         askId: BigInt(2),
      //         quantity: BigInt(9),
      //         price: BigInt(108000),
      //       },
      //     ],
      //   ],
      //   account: address,
      // });
      const hash = await writeContractAsync({
        address: CONTRACTS.SETTLEMENT as Address,
        abi: SETTLEMENT_ABI,
        functionName: "cancelOrder",
        args: [orderId],
        account: address,
      });

      toast.loading("Confirming transaction...", { id: "CancelOrder" });

      await waitForTransactionReceipt(config, { hash });

      toast.success(`Successfully canceled order`, {
        id: "CancelOrder",
        duration: 5000,
      });

      return true;
    } catch (error) {
      console.error("Cancel order failed:", error);
      toast.error("Failed to cancel order. Please try again.", {
        id: "CancelOrder",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { CancelOrder, isLoading };
};
