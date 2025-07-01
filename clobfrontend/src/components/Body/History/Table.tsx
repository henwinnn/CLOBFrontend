import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "tailwindcss";

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

      {/* market order */}

      <div className="flex flex-row w-full gap-1.5 h-11 bg-custom-grey text-black items-center justify-center rounded p-4">
        <div className="font-bold width6Row">
          <span>USDC</span>
          <span>
            <ArrowForwardIcon fontSize="small" />
          </span>
          <span>MON</span>
        </div>
        <div className="font-bold width6Row">1.234</div>
        <div className="font-bold width6Row">1.234</div>
        <div className="font-bold width6Row">16.31%</div>
        <div className="font-bold width6Row">
          <span>0.09 </span>

          <span className="font-bold italic">MON</span>
        </div>
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
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
