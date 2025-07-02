import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import "tailwindcss";
import { useAccount } from "wagmi";

function Swap() {
  const { isConnected } = useAccount();

  return (
    <div className="font-sans">
      <div className="">
        <span className="text-left flex mb-3">Pay</span>

        <div className="bg-custom-blue h-20 rounded-2xl content-center items-center">
          <div className="justify-between flex mt-4 items-center">
            <input
              type="number"
              className="flex outline-0 pl-4 w-2/3 text-3xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder="0.00"
            />
            <div className="px-4">
              <div className="flex bg-white rounded-4xl items-center text-black h-5 p-2">
                <div className="monadLogo" />
                <div className="flex items-center ml-1 gap-1 content-center justify-between w-full">
                  <span className="">MON</span>
                  <span className="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-size10 items-start px-4">
            <div>$0.0</div>
            <div className="flex items-center gap-2">
              <span>Available: 1000 </span>
              <button className="rounded flex items-center bg-white h-3.5 text-black p-1">
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="swapIcon" />
      </div>

      <div className="">
        <span className="text-left flex mb-3">Receive</span>

        <div className="bg-custom-blue h-20 rounded-2xl content-center items-center">
          <div className="justify-between flex mt-4 items-center">
            <input
              type="number"
              className="flex outline-0 pl-4 w-2/3 text-3xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder="0.00"
            />
            <div className="px-4">
              <div className="flex bg-white rounded-4xl items-center text-black h-5 p-2">
                <div className="usdcLogo" />
                <div className="flex items-center ml-1 gap-1 content-center justify-between w-full">
                  <span className="">USDC</span>
                  <span className="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-size10 items-start px-4">
            <div>$0.0</div>
            <div className="flex items-center gap-2">
              <span>Available: 1000 </span>
              <button className="rounded flex items-center bg-white h-3.5 text-black p-1">
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      {isConnected ? (
        <button className="flex bg-white rounded-2xl justify-center h-10 w-full text-black items-center mt-4">
          Swap
        </button>
      ) : (
        <div className="flex justify-center content-center items-center mt-4">
          <ConnectButton />
        </div>
      )}
    </div>
  );
}

export default Swap;
