import "tailwindcss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

function MarketOrder() {
  return (
    <div className="flex flex-row w-full  text-align-last  h-11 text-white items-center border-t  mt-1">
      <div className="flex flex-row text-center items-center font-sans text-black w-full">
        <div className="justify-center flex gap-3.5 width6Row">
          <div className="">USDC</div>
          <div>
            <ArrowForwardIcon fontSize="small" />
          </div>
          <div className="font-bold font-sans">
            <span className="italic">MON</span>
          </div>
        </div>
        <div className="width6Row flex gap-3 justify-center">
          <div>
            <OpenInNewIcon fontSize="small" />
          </div>
          <div>
            <span>1.234</span>
          </div>
        </div>
        <div className=" width6Row">1.234</div>
        <div className="width6Row">16.31%</div>
        <div className="width6Row">
          <span>0.09 </span>

          <span className="font-bold italic">MON</span>
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
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MarketOrder;
