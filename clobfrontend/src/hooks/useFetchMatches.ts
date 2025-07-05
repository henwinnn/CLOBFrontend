import { useState, useEffect } from "react";
import type { Match } from "../types/types";
// import { TokenData, TokenInfo } from "../types/types";

//CG-GqhpcCXadMuF2zwJUr5H2XYv

const useFetchMatches = (
  bidId: string,
  askId: string,
  quantity: string,
  price: string,
  matches: Match[]
) => {
  console.log({ bidId, askId, quantity, price });
  //   const [data, setData] = useState<TokenInfo | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(
    `https://clobponder.onrender.com/batch-fill?bidId=${bidId}&askId=${askId}&quantity=${quantity}&price=${price}`
  );

  useEffect(() => {
    if (!bidId || !askId || !quantity || !price) return;

    console.log("masuk");
    const fetchTokenData = async () => {
      try {
        // https://cloutponder.onrender.com/token/${pair}
        setLoading(true);
        const response = await fetch(
          `https://clobponder.onrender.com/batch-fill?bidId=${bidId}&askId=${askId}&quantity=${quantity}&price=${price}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log({ result });
        // setData(result);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        // setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
  }, [matches?.length > 0]);

  return { loading, error };
};

export default useFetchMatches;
