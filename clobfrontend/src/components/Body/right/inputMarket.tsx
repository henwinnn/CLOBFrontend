import "tailwindcss";
import poligonWhite from "../../../assets/poligonWhite.png";
import { useState } from "react";

function InputMarket() {
  const [value, setValue] = useState("");

  const increment = () => {
    const currentValue = parseFloat(value) || 0;
    setValue((currentValue + 0.01).toFixed(2));
  };

  const decrement = () => {
    const currentValue = parseFloat(value) || 0;
    setValue(Math.max(0, currentValue - 0.01).toFixed(2));
  };
  return (
    <div className="relative mb-5">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-custom-blue w-full h-16 text-4xl rounded-2xl px-4 pr-12 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
        placeholder="0.00"
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 px-4">
        <button
          onClick={increment}
          className="hover:opacity-75 transition-opacity outline0"
        >
          <img
            src={poligonWhite}
            alt="increase"
            className="w-4 h-4 transform rotate-0 outline0"
          />
        </button>
        <button
          onClick={decrement}
          className="hover:opacity-75 transition-opacity outline0"
        >
          <img
            src={poligonWhite}
            alt="decrease"
            className="w-4 h-4 transform rotate-180"
          />
        </button>
      </div>
    </div>
  );
}

export default InputMarket;
