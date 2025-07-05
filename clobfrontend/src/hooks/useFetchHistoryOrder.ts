import { useQuery } from "@tanstack/react-query";

const fetchHistoryOrder = async () => {
  const res = await fetch("https://clobponder.onrender.com/history-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query MyQuery {
  historyOrders {
    items {
      amount
      bidAskType
      filled
      id
      idQuery
      isActive
      price
      remaining
      status
      timestamp
      tokenBuy
      tokenSell
      user
    }
  }
}
            `,
    }),
  });

  const { data } = await res.json();

  return data.historyOrders;
};

export const useHistoryOrder = () => {
  return useQuery({
    queryKey: ["historyOrder"],
    queryFn: fetchHistoryOrder,
    refetchInterval: 5000,
  });
};
