import { useEffect, useRef, useState } from "react";
import { TOKENS } from "../../constants";
import { useTokenBalance } from "../../hooks/useReadGetBalance";
import { useDeposit } from "../../hooks/useWriteDeposit";
import { useReadGetDepositBalance } from "../../hooks/useReadDepositBalance";
import { useWithdraw } from "../../hooks/useWriteWithdraw";

type TokenSymbol = keyof typeof TOKENS;

type DialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  onConfirm: (amount: string, tokenSymbol: TokenSymbol) => void;
};

function Dialog({ open, setOpen, title, onConfirm }: DialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [amount, setAmount] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState<TokenSymbol>("USDC");

  const selectedToken = TOKENS[selectedSymbol];
  const { balance: depositBalance } = useTokenBalance(selectedToken);
  const { balance: withdrawBalance } = useReadGetDepositBalance(
    selectedToken.address
  );

  const normalizedBalanceDeposit =
    Number(depositBalance) / 10 ** selectedToken.decimals || 0;
  const normalizedBalanceWithdraw =
    Number(withdrawBalance) / 10 ** selectedToken.decimals || 0;
  const normalizedBalance =
    title === "Deposit" ? normalizedBalanceDeposit : normalizedBalanceWithdraw;
  const { deposit, isLoading: loadingDeposit } = useDeposit(selectedToken);
  const { withdraw, isLoading: loadingWithdraw } = useWithdraw(selectedToken);

  function handleDeposit() {
    onConfirm(amount, selectedSymbol);
    setOpen(false);
    deposit(amount);
  }

  function handleWithdraw() {
    onConfirm(amount, selectedSymbol);
    setOpen(false);
    withdraw(amount);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    setAmount("");
  }, [selectedSymbol, open]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-zinc-900 text-white p-6 rounded-xl w-[90%] max-w-md shadow-lg relative border border-zinc-700"
      >
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="mb-4">
          {title} your {selectedSymbol} to HyperSolid!
        </p>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        {/* Token Selector */}
        <div className="mb-4">
          <label className="text-sm text-gray-300 block mb-1">
            Select Token
          </label>
          <select
            value={selectedSymbol}
            onChange={(e) => setSelectedSymbol(e.target.value as TokenSymbol)}
            className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-gray-700"
          >
            {Object.keys(TOKENS).map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-300 mb-1">
            <label>Amount</label>
            <span
              className="text-gray-400 cursor-pointer"
              onClick={() => setAmount(normalizedBalance.toString())}
            >
              Max: {normalizedBalance.toFixed(2)}
            </span>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={`Enter ${selectedSymbol} amount`}
            step={1 / 10 ** selectedToken.decimals}
            className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <button
          onClick={title === "Deposit" ? handleDeposit : handleWithdraw}
          disabled={
            !amount ||
            loadingDeposit ||
            loadingWithdraw ||
            parseFloat(amount) <= 0
          }
          className="w-full cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-md transition-colors disabled:opacity-50"
        >
          {title}
        </button>
      </div>
    </div>
  );
}

export default Dialog;
