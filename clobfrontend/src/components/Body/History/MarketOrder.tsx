import "tailwindcss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

function MarketOrder() {
  return (
    <div className="flex flex-row w-full gap-1.5 h-11 text-white items-center justify-between border-t border-gray-700 mt-1">
      <div className="font-bold width6Row text-left">
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
  );
}

export default MarketOrder;
