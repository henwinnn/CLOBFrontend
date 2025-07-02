import { Button } from "@mui/material";
import "tailwindcss";
import MarketOrder from "./MarketOrder";

export default function TableMarket() {
  return (
    <div>
      {/* market order header */}
      <div className="flex flex-row w-full h-13 text-align-last font-sans items-center text-2xl  rounded">
        <div className="font-bold width6Row ">Market</div>
        <div className="font-bold width6Row">Price</div>
        <div className="font-bold width6Row">Amount</div>
        <div className="font-bold width6Row">Filled</div>
        <div className="font-bold width6Row">Claimable</div>
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
      <MarketOrder />
    </div>
  );
}
