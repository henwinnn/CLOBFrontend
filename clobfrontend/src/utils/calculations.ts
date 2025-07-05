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

export function heapSortByPrice(items) {
  const n = items?.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(items, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Swap root (max) with end
    [items[0], items[i]] = [items[i], items[0]];

    // Call heapify on the reduced heap
    heapify(items, i, 0);
  }

  return items;
}

export function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // Compare with left child
  if (left < n && Number(arr[left].price) > Number(arr[largest].price)) {
    largest = left;
  }

  // Compare with right child
  if (right < n && Number(arr[right].price) > Number(arr[largest].price)) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// type Order = {
//   bidId: number;
//   askId: number;
//   price: number;
//   quantity: number;
// };

// type BidOrder = {
//   id: string; // or number
//   price: number;
//   remaining: number;
// };

// type AskOrder = {
//   id: string; // or number
//   price: number;
//   remaining: number;
// };

// // Example Match type to be sent to `batchFill`
// type Match = {
//   bidId: number;
//   askId: number;
//   quantity: number;
//   price: number;
// };

// export function matchOrders(bids: BidOrder[], asks: AskOrder[]): Match[] {
//   const matches: Match[] = [];
//   let bidIndex = 0;
//   let askIndex = 0;
//   console.log(bids.length, asks.length);
//   while (bidIndex < bids?.length && askIndex < asks?.length) {
//     console.log({ bidIndex });
//     const bid = bids[bidIndex];
//     const ask = asks[askIndex];

//     if (bid.price >= ask.price) {
//       // Matching price, determine trade quantity
//       const matchQty = Math.min(bid.remaining, ask.remaining);
//       console.log({ matchQty });
//       matches.push({
//         bidId: Number(bid.id),
//         askId: Number(ask.id),
//         quantity: Number(matchQty),
//         price: Number(ask.price), // Trade at ask price (standard in order books)
//       });

//       // Update remaining amounts
//       bid.remaining -= matchQty;
//       ask.remaining -= matchQty;

//       // Move to next bid/ask if fully filled
//       if (bid.remaining === 0) bidIndex++;
//       if (ask.remaining === 0) askIndex++;
//     } else {
//       // No more matches possible
//       break;
//     }
//   }

//   return matches;
// }
