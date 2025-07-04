import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import "tailwindcss";
import { useAccount } from "wagmi";
import { useReadGetDepositBalance } from "../../../hooks/useReadDepositBalance";
import { TOKENS } from "../../../constants";
import { useWritePlaceOrder } from "../../../hooks/useWritePlaceOrder";
import { formatNumber } from "../../../utils/calculations";

type SwapProps = {
  value: string;
  isBid: boolean;
  setIsbid: (open: boolean) => void;
};
function Swap({ value, isBid, setIsbid }: SwapProps) {
  const { isConnected } = useAccount();
  const [payToken, setPayToken] = useState<keyof typeof TOKENS>("USDC");
  const [receiveToken, setReceiveToken] = useState<keyof typeof TOKENS>("BTC");
  const [payAmount, setPayAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [showPayDropdown, setShowPayDropdown] = useState(false);
  const [showReceiveDropdown, setShowReceiveDropdown] = useState(false);

  const tokens = ["USDC", "BTC"];
  const { balance: payTokenBalance } = useReadGetDepositBalance(
    payToken === "USDC" ? TOKENS.USDC.address : TOKENS.BTC.address
  );
  const { balance: receiveTokenBalance } = useReadGetDepositBalance(
    receiveToken === "USDC" ? TOKENS.USDC.address : TOKENS.BTC.address
  );
  const selectedPayToken = TOKENS[payToken];
  const selectedReceiveToken = TOKENS[receiveToken];

  const normalizedBalancePay =
    Number(payTokenBalance) / 10 ** selectedPayToken.decimals || 0;
  const normalizedBalanceReceive =
    Number(receiveTokenBalance) / 10 ** selectedReceiveToken.decimals || 0;

  const tokenSell =
    payToken === "BTC" ? TOKENS.BTC.address : TOKENS.USDC.address;
  const tokenBuy =
    receiveToken === "USDC" ? TOKENS.USDC.address : TOKENS.BTC.address;

  function calcExpectedAmount(
    isBid: boolean,
    value: string,
    payAmount: string
  ) {
    if (isBid) {
      return (Number(payAmount) / Number(value)).toString();
    } else {
      return (Number(payAmount) * Number(value)).toString();
    }
  }
  const expectedAmount = calcExpectedAmount(isBid, value, payAmount);

  const { placeOrder } = useWritePlaceOrder(
    isBid ? 0 : 1,
    tokenBuy,
    tokenSell,
    value,
    isBid ? expectedAmount : payAmount
  );

  const handleSwapTokens = () => {
    const tempPayToken = payToken;
    const tempPayAmount = payAmount;

    setPayToken(receiveToken);
    setReceiveToken(tempPayToken);
    setPayAmount(receiveAmount);
    setReceiveAmount(tempPayAmount);
    setIsbid(!isBid);
  };

  const handlePayTokenSelect = (token: string) => {
    setPayToken(token as "USDC" | "BTC");
    setShowPayDropdown(false);
    // Auto switch receive token if same as pay token
    if (token === receiveToken) {
      setReceiveToken(payToken);
    }
  };

  const handleReceiveTokenSelect = (token: string) => {
    setReceiveToken(token as "USDC" | "BTC");
    setShowReceiveDropdown(false);
    // Auto switch pay token if same as receive token
    if (token === payToken) {
      setPayToken(receiveToken);
    }
  };
  const handlePlaceOrder = () => {
    placeOrder();
  };

  return (
    <div className="font-sans">
      <div className="">
        <span className="text-left flex mb-3">Pay</span>

        <div className="bg-custom-blue h-full rounded-2xl content-center items-center">
          <div className="justify-between flex mt-4 items-center">
            <input
              type="number"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              className="flex h-14  outline-0 pl-4 w-2/3 text-3xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder="0.00"
            />
            <div className="px-4 relative">
              <div
                className="flex bg-white rounded-4xl items-center text-black  p-2 cursor-pointer"
                onClick={() => setShowPayDropdown(!showPayDropdown)}
              >
                <div
                  className={payToken === "BTC" ? "monadLogo" : "usdcLogo"}
                />
                <div className="flex items-center ml-1 gap-1 content-center justify-between w-full">
                  <span className="">{payToken}</span>
                  <span className="arrow" />
                </div>
              </div>

              {showPayDropdown && (
                <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg border z-10 min-w-20">
                  {tokens
                    .filter((token) => token !== receiveToken)
                    .map((token) => (
                      <div
                        key={token}
                        className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-black"
                        onClick={() => handlePayTokenSelect(token)}
                      >
                        <div
                          className={
                            token === "MON" ? "monadLogo mr-2" : "usdcLogo mr-2"
                          }
                        />
                        <span>{token}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex h-14  justify-between  items-start px-4">
            <div>$0.0</div>
            <div className="flex items-center gap-2">
              <span>Available: {normalizedBalancePay} </span>
              <button
                onClick={() => setPayAmount(normalizedBalancePay.toString())}
                className="rounded flex items-center bg-white  text-black p-1"
              >
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div
          className="swapIcon cursor-pointer hover:opacity-75 transition-opacity"
          onClick={handleSwapTokens}
        />
      </div>

      <div className="">
        <span className="text-left flex mb-3">Receive</span>

        <div className="bg-custom-blue h-full rounded-2xl content-center items-center">
          <div className="justify-between flex mt-4 items-center">
            <input
              type="text"
              value={formatNumber(expectedAmount)}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="flex h-14  outline-0 pl-4 w-2/3 text-3xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder="0.00"
              disabled
            />
            <div className="px-4 relative">
              <div
                className="flex bg-white rounded-4xl items-center text-black  p-2 cursor-pointer"
                onClick={() => setShowReceiveDropdown(!showReceiveDropdown)}
              >
                <div
                  className={receiveToken === "USDC" ? "usdcLogo" : "monadLogo"}
                />
                <div className="flex items-center ml-1 gap-1 content-center justify-between w-full">
                  <span className="">{receiveToken}</span>
                  <span className="arrow" />
                </div>
              </div>

              {showReceiveDropdown && (
                <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg border z-10 min-w-20">
                  {tokens
                    .filter((token) => token !== payToken)
                    .map((token) => (
                      <div
                        key={token}
                        className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-black"
                        onClick={() => handleReceiveTokenSelect(token)}
                      >
                        <div
                          className={
                            token === "MON" ? "monadLogo mr-2" : "usdcLogo mr-2"
                          }
                        />
                        <span>{token}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex h-14  justify-between  items-start px-4">
            <div>$0.0</div>
            <div className="flex items-center gap-2">
              <span>Available: {normalizedBalanceReceive} </span>
              <button className="rounded flex items-center bg-white  text-black p-1">
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      {isConnected ? (
        <button
          className="flex bg-white rounded justify-center h-16 w-full text-black items-center mt-4"
          onClick={handlePlaceOrder}
        >
          Swap
        </button>
      ) : (
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <button
              onClick={openConnectModal}
              className="w-full h-16 bg-custom-blue-2 font-bold text-white rounded mt-4 hover:bg-custom-blue transition-colors"
            >
              Connect Wallet
            </button>
          )}
        </ConnectButton.Custom>
      )}
    </div>
  );
}

export default Swap;
