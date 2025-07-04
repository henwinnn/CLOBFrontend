import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount } from "wagmi";
import Dialog from "./Dialog";

function Header() {
  const { isConnected } = useAccount();
  const [openDialog, setOpenDialog] = useState<"deposit" | "withdraw" | null>(
    null
  );

  return (
    <div className="border-b border-gray-700/50 flex items-center justify-between px-12 py-4">
      <div className="text-2xl font-sans font-bold tracking-tight">
        <div className="imageLogo" />
      </div>

      <div className="flex items-center justify-center gap-2">
        {isConnected && (
          <>
            <div
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-xl font-bold cursor-pointer"
              onClick={() => setOpenDialog("withdraw")}
            >
              Withdraw
            </div>
            <div
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-xl font-bold cursor-pointer"
              onClick={() => setOpenDialog("deposit")}
            >
              Deposit
            </div>
          </>
        )}
        <ConnectButton />
      </div>

      {openDialog && (
        <Dialog
          open={!!openDialog}
          setOpen={() => setOpenDialog(null)}
          title={openDialog === "deposit" ? "Deposit" : "Withdraw"}
          onConfirm={(amount, tokenSymbol) => {
            console.log(`${openDialog} ${tokenSymbol}:`, amount);
            // handle deposit/withdraw for tokenSymbol here
          }}
        />
      )}
    </div>
  );
}

export default Header;
