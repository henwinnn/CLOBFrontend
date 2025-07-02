import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import "tailwindcss";
import { useAccount } from "wagmi";
import DepositDialog from "./DepositDialog";

function Header() {
  const { isConnected } = useAccount();
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/50 flex items-center justify-between px-12 py-4">
      <div className="text-2xl font-sans font-bold tracking-tight">
        <div className="imageLogo" />
      </div>
      <div className="flex items-center justify-center gap-2">
        {isConnected && (
          <div
            className="bg-gray-800 hover:bg-gray-700 p-2 my-auto rounded-xl font-bold cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Deposit
          </div>
        )}

        <ConnectButton />
      </div>
      {/* Dialog overlay */}
      {open && <DepositDialog open={open} setOpen={setOpen} />}
    </div>
  );
}

export default Header;
