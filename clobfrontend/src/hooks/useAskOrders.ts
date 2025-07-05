import { useQuery } from "@tanstack/react-query";

const fetchAskOrder = async () => {
  const res = await fetch("https://clobponder.onrender.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
       query MyQuery {
  askOrders {
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

  return data.askOrders;
};

export const useAskOrders = () => {
  return useQuery({
    queryKey: ["askOrders"],
    queryFn: fetchAskOrder,
    refetchInterval: 5000,
  });
};
