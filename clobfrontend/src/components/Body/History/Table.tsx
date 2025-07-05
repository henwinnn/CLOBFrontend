import { Button } from "@mui/material";
import "tailwindcss";
import MarketOrder from "./MarketOrder";
import { useHistoryOrder } from "../../../hooks/useFetchHistoryOrder";
import type { ItemHistoryOrder } from "../../../types/types";
import { useAccount } from "wagmi";
import { useBidOrders } from "../../../hooks/useBidOrders";
import { useAskOrders } from "../../../hooks/useAskOrders";
import { findMatchingOrders } from "../../../utils/calculations";
import useFetchMatches from "../../../hooks/useFetchMatches";
// import { heapSortByPrice } from "../../../utils/calculations";

export function TableMarket() {
  const { data: dataHistory } = useHistoryOrder();
  const { data: bidOrders } = useBidOrders();
  const { data: askOrders } = useAskOrders();
  const { address } = useAccount();
  const myHistory = dataHistory?.items?.filter((item: ItemHistoryOrder) => {
    return (
      item.user.toLocaleLowerCase() == address?.toLowerCase() && item.isActive
    );
  });
  const activeOrders = dataHistory?.items?.filter(
    (item: ItemHistoryOrder) => item.isActive
  );
  const activeBidOrders = activeOrders?.filter(
    (item: ItemHistoryOrder) => item.bidAskType === "0"
  ); // or === 0 if type is number
  const activeAskOrders = activeOrders?.filter(
    (item: ItemHistoryOrder) => item.bidAskType === "1"
  );
  console.log({ activeBidOrders, activeAskOrders });
  const matches = findMatchingOrders(
    Array.isArray(activeBidOrders) ? activeBidOrders : [],
    Array.isArray(activeAskOrders) ? activeAskOrders : []
  );
  // matches.forEach((match) => {
  useFetchMatches(
    matches[0]?.bidId,
    matches[0]?.askId,
    matches[0]?.quantity.toString(),
    matches[0]?.price,
    matches
  );
  // });
  // const sortedBid = heapSortByPrice(bidOrders?.items);
  // const sortedAsk = heapSortByPrice(askOrders?.items);
  console.log({ dataHistory, bidOrders, askOrders, activeOrders });
  return (
    <div>
      {/* market order header */}
      <div className="flex flex-row w-full h-13 text-align-last font-sans items-center text-2xl  rounded">
        <div className="font-bold width6Row ">Market</div>
        <div className="font-bold width6Row">Price</div>
        <div className="font-bold width6Row">Amount</div>
        <div className="font-bold width6Row">Filled</div>
        <div className="font-bold width6Row">Bid/Ask</div>
        <div className="font-bold width6Row">
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "8px",
              backgroundColor: "#FA8603",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
              textTransform: "none",
              fontWeight: "bold",
              height: "27px",

              whiteSpace: "nowrap",
              padding: "10px",
              outline: "none !important",
            }}
          >
            Cancel All
          </Button>
        </div>
      </div>

      {/* mapping the market order */}
      {myHistory?.map((item: ItemHistoryOrder, index: number) => {
        return <MarketOrder key={index} {...item} />;
      })}
    </div>
  );
}
