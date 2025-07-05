import "tailwindcss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";
import { getTokenName } from "../../../constants";
import { useWriteCancelOrder } from "../../../hooks/useCancelOrder";

function MarketOrder({
  amount,
  bidAskType,
  filled,
  idQuery,
  // isActive,
  price,
  // remaining,
  // status,
  // timestamp,
  tokenBuy,
  tokenSell,
}: // user,
{
  amount: string;
  bidAskType: string;
  filled: string;
  id: string;
  idQuery: string;
  isActive: boolean;
  price: string;
  remaining: string;
  status: string;
  timestamp: string;
  tokenBuy: string;
  tokenSell: string;
  user: string;
}) {
  const BidName = bidAskType === "0" ? "Bid" : "Ask";
  const buyToken = getTokenName(tokenBuy);
  const sellToken = getTokenName(tokenSell);
  const { CancelOrder } = useWriteCancelOrder();
  return (
    <div className="flex flex-row w-full  text-align-last  h-11 text-white items-center border-t  mt-1">
      <div className="flex flex-row text-center items-center font-sans text-black w-full">
        <div className="justify-center flex gap-3.5 width6Row">
          <div className="">{sellToken}</div>
          <div>
            <ArrowForwardIcon fontSize="small" />
          </div>
          <div className="font-bold font-sans">
            <span className="italic">{buyToken}</span>
          </div>
        </div>
        <div className="width6Row flex gap-3 justify-center">
          <div>
            <OpenInNewIcon fontSize="small" />
          </div>
          <div>
            <span>{price}</span>
          </div>
        </div>
        <div className=" width6Row">{(Number(amount) / 1e8).toFixed(8)}</div>
        <div className="width6Row">
          {((parseFloat(filled) / parseFloat(amount)) * 100).toFixed(2)}%
        </div>
        <div className="width6Row">
          <span>{BidName} </span>

          {/* <span className="font-bold italic"></span> */}
        </div>
        <div className="font-bold width6Row">
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "8px",
              backgroundColor: "#0d7ab0",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
              textTransform: "none",
              fontWeight: "bold",

              whiteSpace: "nowrap",
              padding: "10px",
              height: "27px",
              outline: "none !important",
              // width: calc("100% /6"),
            }}
            onClick={() => CancelOrder(Number(idQuery))}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MarketOrder;
