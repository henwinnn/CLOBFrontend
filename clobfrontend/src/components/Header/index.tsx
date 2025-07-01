import { ConnectButton } from "@rainbow-me/rainbowkit";
import "tailwindcss";

function Header() {
  return (
    <div className="background-red h-30 flex items-center justify-between px-24">
      <div className="imageLogo h-10">image</div>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
}

export default Header;
