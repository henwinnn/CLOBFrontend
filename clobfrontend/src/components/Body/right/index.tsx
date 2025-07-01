import "tailwindcss";
import InputMarket from "./inputMarket";
import Swap from "./Swap";

function Right() {
  return (
    <div className="width30 h-full rounded bg-zinc-900 ml-3 p-4">
      <div className="text-left">
        <span>Mon at Rate </span>
        <span className="text-custom-green">(0.01%)</span>
        <div className="mb-4">
          <span>Set to market rate </span>
          <span className="rounded bg-red-500 p-1 text-w text-xs">ASK</span>
        </div>

        <InputMarket />
      </div>
      <div>
        <Swap />
      </div>
    </div>
  );
}

export default Right;
