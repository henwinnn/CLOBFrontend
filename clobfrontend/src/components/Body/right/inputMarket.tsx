import "tailwindcss";
import poligonBlack from "../../../assets/poligonBlack.png";
import { formatNumber } from "../../../utils/calculations";

type InputMarketProps = {
  value: string;
  setValue: (value: string) => void;
};

function InputMarket({ value, setValue }: InputMarketProps) {
  const increment = () => {
    const currentValue = parseFloat(value.replace(/,/g, "")) || 0;
    setValue((currentValue + 0.01).toFixed(2));
  };

  const decrement = () => {
    const currentValue = parseFloat(value.replace(/,/g, "")) || 0;
    setValue(Math.max(0, currentValue - 0.01).toFixed(2));
  };

  return (
    <div className="relative mb-5">
      <input
        type="text" // ✅ changed from number to text
        value={formatNumber(value)}
        onChange={(e) => {
          const raw = e.target.value.replace(/,/g, "");
          if (!isNaN(Number(raw))) {
            setValue(raw);
          }
        }}
        className="bg-white text-black w-full h-12 text-4xl rounded-2xl px-4 pr-12 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
        placeholder="0.00"
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 px-4">
        <button
          onClick={increment}
          className="hover:opacity-75 transition-opacity outline0 "
        >
          <img
            src={poligonBlack}
            alt="increase"
            className="iconInput transform rotate-0 outline0"
          />
        </button>
        <button
          onClick={decrement}
          className="hover:opacity-75 transition-opacity outline0"
        >
          <img
            src={poligonBlack}
            alt="decrease"
            className="iconInput transform rotate-180"
          />
        </button>
      </div>
    </div>
  );
}

export default InputMarket;
