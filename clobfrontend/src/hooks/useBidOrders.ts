import { useQuery } from "@tanstack/react-query";

const fetchBidOrder = async () => {
  const res = await fetch("https://clobponder.onrender.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
       query MyQuery {
  bidOrders {
    items {
      askId
      bidId
      id
      price
      quantity
    }
  }
}
            `,
    }),
  });

  const { data } = await res.json();

  return data.bidOrders;
};

export const useBidOrders = () => {
  return useQuery({
    queryKey: ["bidOrders"],
    queryFn: fetchBidOrder,
    refetchInterval: 5000,
  });
};
