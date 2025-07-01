import "tailwindcss";
import BTC from '../../../assets/btc-logo.svg'

function PairInfo() {

  return (
    <div className="w-full bg-white text-black p-4 rounded-lg shadow">
        {/* Pair Info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img src={BTC} alt="BTC" className="w-6 h-6" />
            <span className="font-bold">BTC/USDC</span>
          </div>
          <div className="flex gap-4"> 
            <div className="flex flex-col items-center justify-between">
                <div className="font-bold">Price</div>
                <div>00.000K</div> 
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="font-bold">Market Cap</div>
                <div>00.000K</div> 
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="font-bold">24h Volume</div>
                <div>00.000K</div> 
            </div>
          </div>
        </div>
      </div>
  );
}

export default PairInfo;
