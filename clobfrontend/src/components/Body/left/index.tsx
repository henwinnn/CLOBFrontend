import "tailwindcss";
import PairInfo from "./PairInfo";
import OrderBook from "./OrderBook";

function Left() {
  return (
    <div className="width70 space-y-4 flex flex-col items-start">
      <PairInfo />
      <OrderBook />
    </div>
  )
}


export default Left;
