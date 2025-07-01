import "tailwindcss";

const OrderBook = () => {
  const buyOrders = [
    { amount: "124000.0000", price: "1.4700" },
    { amount: "50000.0000", price: "1.4600" },
    { amount: "30000.0000", price: "1.4500" },
    { amount: "10000.0000", price: "1.4400" },
    { amount: "7000.0000", price: "1.4300" },
    { amount: "5000.0000", price: "1.4200" },
    { amount: "3000.0000", price: "1.4100" },
    { amount: "1000.0000", price: "1.4000" },
  ];

  const sellOrders = [
    { price: "1.4800", amount: "200.0000" },
    { price: "1.4900", amount: "150.0000" },
    { price: "1.5000", amount: "100.0000" },
    { price: "1.5100", amount: "50.0000" },
    { price: "1.5200", amount: "25.0000" },
  ];

  // merge into unified rows for display
  const rowCount = Math.max(buyOrders.length, sellOrders.length);
  const maxBuy = Math.max(...buyOrders.map((o) => Number(o.amount)));
  const maxSell = Math.max(...sellOrders.map((o) => Number(o.amount)));
  const rows = Array.from({ length: rowCount }).map((_, i) => ({
    buyAmount: buyOrders[i]?.amount || "",
    buyPrice: buyOrders[i]?.price || "",
    sellPrice: sellOrders[i]?.price || "",
    sellAmount: sellOrders[i]?.amount || "",
  }));

  return (
    <div className="bg-zinc-900 h-[507px] rounded-lg p-4 w-full overflow-y-auto flex flex-col justify-start text-sm">
      <div className="grid grid-cols-4 font-medium text-gray-400 pb-2 border-b border-gray-700">
        <div>Amount</div>
        <div className="text-center">Price</div>
        <div className="text-center">Price</div>
        <div className="text-right">Amount</div>
      </div>

      {rows.map((row, i) => {
        const buyPercent = (Number(row.buyAmount) / maxBuy) * 50;
        const sellPercent = (Number(row.sellAmount) / maxSell) * 50;

        return (
          <div key={i} className="grid grid-cols-4 py-1 text-white relative">
            {Number(row.buyAmount) > 0 && (
              <div
                className="absolute h-full left-0 top-0 bg-green-900 opacity-20"
                style={{ width: `${buyPercent}%` }}
              />
            )}
            {Number(row.buyAmount) > 0 && (
              <div
                className="absolute h-full right-0 top-0 bg-red-900 opacity-20"
                style={{ width: `${sellPercent}%` }}
              />
            )}
            <div className="text-left">{row.buyAmount}</div>
            <div className="text-green-400 text-center">{row.buyPrice}</div>
            <div className="text-red-400 text-center">{row.sellPrice}</div>
            <div className="text-right">{row.sellAmount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderBook;
