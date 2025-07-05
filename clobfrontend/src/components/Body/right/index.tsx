import "tailwindcss";
import InputMarket from "./inputMarket";
import Swap from "./Swap";
import { useState } from "react";

function Right() {
  const [value, setValue] = useState("");
  const [isBid, setIsbid] = useState(true);
  const bidAsk = isBid ? "BID" : "ASK";

  return (
    <div className="width30 h-full rounded text-white  ml-3 p-4">
      <div className="text-left">
        <span>Mon at Rate </span>
        <span className="text-custom-green">(0.01%)</span>
        <div className="mb-4">
          <span>Set to market rate </span>
          <span className="rounded10px bgRed30 h-3 px-3 text-xs">{bidAsk}</span>
        </div>

        <InputMarket value={value} setValue={setValue} />
      </div>
      <div>
        <Swap value={value} isBid={isBid} setIsbid={setIsbid} />
      </div>
    </div>
  );
}

export default Right;
