export const parseTokenAmount = (amount: string, decimals: number): bigint => {
  if (!amount || amount === "0" || amount === ".") {
    return BigInt(0);
  }

  try {
    // Handle decimal numbers
    const [integerPart, decimalPart = ""] = amount.split(".");

    // Pad or truncate decimal part to match token decimals
    const paddedDecimals = decimalPart.padEnd(decimals, "0").slice(0, decimals);

    // Combine integer and decimal parts
    const fullAmount = integerPart + paddedDecimals;

    return BigInt(fullAmount);
  } catch (error) {
    console.error("Error parsing token amount:", error);
    return BigInt(0);
  }
};

export function formatNumber(str: string): string {
  const num = Number(str.replace(/,/g, "")); // just in case
  if (isNaN(num)) return "";
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  });
}
