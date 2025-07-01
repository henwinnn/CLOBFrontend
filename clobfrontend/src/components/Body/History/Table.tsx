import { Button } from "@mui/material";
import "tailwindcss";
import MarketOrder from "./MarketOrder";

export default function TableMarket() {
  return (
    <div>
      {/* market order header */}
      <div className="flex flex-row w-full gap-1.5 items-center justify-center rounded p-4">
        <div className="font-bold width6Row">Market</div>
        <div className="font-bold width6Row">Price</div>
        <div className="font-bold width6Row">Amount</div>
        <div className="font-bold width6Row">Filled</div>
        <div className="font-bold width6Row">Claimable</div>
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
            outline: "none !important",
          }}
        >
          Cancel All
        </Button>
      </div>

      {/* mapping the market order */}
      <MarketOrder />
    </div>
  );
}
