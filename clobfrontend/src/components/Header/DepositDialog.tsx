import { useEffect, useRef, useState } from "react";
import "tailwindcss";

type DepositProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function DepositDialog({ open, setOpen }: DepositProps) {
  //   const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const balance = 30;

  function handleDeposit() {
    console.log({ amount });
    setOpen(false);
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-zinc-900 text-white p-6 rounded-xl w-[90%] max-w-md shadow-lg relative"
      >
        <h2 className="text-lg font-bold mb-4">Deposit</h2>
        <p className="mb-4">Deposit your USDC to HyperSolid!</p>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl cursor-pointer"
        >
          &times;
        </button>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1 text-sm text-gray-300">
            <label>Amount</label>
            <span
              className="text-gray-400 cursor-pointer"
              onClick={() => setAmount(balance.toString())}
            >
              Max: {balance.toFixed(4)}
            </span>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <button
          onClick={() => {
            handleDeposit();
          }}
          disabled={!amount}
          className="w-full bg-gray-600 hover:bg-gray-700 cursor-pointer text-white font-semibold py-2 rounded-md transition-colors disabled:opacity-50"
        >
          Deposit
        </button>
      </div>
    </div>
  );
}

export default DepositDialog;
