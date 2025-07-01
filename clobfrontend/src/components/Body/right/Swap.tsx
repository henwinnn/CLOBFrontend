import { ConnectButton } from "@rainbow-me/rainbowkit";
import "tailwindcss";
import { useAccount } from "wagmi";

function Swap() {
  const { isConnected } = useAccount();
  return (
    <div>
      <div className="">
        <span className="text-left flex">Pay</span>

        <div className="bg-custom-blue rounded-2xl">
          <div className="justify-between h-15 flex items-center">
            <input
              type="number"
              className="flex outline-0 pl-4 w-2/3 h-16 text-4xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder="0.00"
            />
            <div className="px-4">
              <div className="flex bg-white rounded-4xl text-black h-11 p-2">
                <div className="monadLogo" />
                <div className="flex items-center ml-1 gap-1 justify-between w-full">
                  <span className="">MON</span>
                  <span className="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-15 justify-between items-start px-4 mt-3">
            <div>$0.0</div>
            <div>
              <span>Available: 1000 </span>
              <button className="rounded bg-white text-black p-1">MAX</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="swapIcon" />
      </div>

      <div className="">
        <span className="text-left flex">Receive</span>

        <div className="bg-custom-blue rounded-2xl">
          <div className="justify-between h-15 flex items-center">
            <input
              type="number"
              className="flex outline-0 pl-4 w-2/3 h-16 text-4xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder="0.00"
            />
            <div className="px-4">
              <div className="flex bg-white rounded-4xl text-black h-11 p-2">
                <div className="usdcLogo" />
                <div className="flex items-center ml-1 gap-1 justify-between w-full">
                  <span className="">USDC</span>
                  <span className="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-15 justify-between items-start px-4 mt-3">
            <div>$0.0</div>
            <div>
              <span>Available: 1000 </span>
              <button className="rounded bg-white text-black p-1">MAX</button>
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
