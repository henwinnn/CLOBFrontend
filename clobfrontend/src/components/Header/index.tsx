import { ConnectButton } from "@rainbow-me/rainbowkit";
import "tailwindcss";

function Header() {
  return (
    <div className="border-b border-gray-700/50 flex items-center justify-between px-12 py-4">
      <div className="text-2xl font-sans font-bold tracking-tight">
        <span className="text-orange-400">Hyper</span>Solid
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
}

export default Header;
