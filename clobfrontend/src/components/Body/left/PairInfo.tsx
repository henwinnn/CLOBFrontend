import "tailwindcss";
import BTC from "../../../assets/btc-logo.svg";

function PairInfo() {
  return (
    <div className="w-full bg-gray-800 p-4 rounded-lg shadow">
      {/* Pair Info */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <img src={BTC} alt="BTC" className="w-10 h-10" />
          <span className="text-xl font-bold">BTC/USDC</span>
        </div>
        <div className="flex gap-7 items-center justify-between">
          <div className="flex flex-col items-center justify-between">
            <div className="font-bold text-sm text-gray-400">Price</div>
            <div className="text-lg font-semibold">00.000K</div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="font-bold text-sm text-gray-400">Market Cap</div>
            <div className="text-lg font-semibold">00.000K</div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="font-bold text-sm text-gray-400">24h Volume</div>
            <div className="text-lg font-semibold">00.000K</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PairInfo;
