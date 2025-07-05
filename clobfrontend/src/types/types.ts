export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
}
export interface OrderBookType {
  amount: number;
  price: number;
}

export interface ItemHistoryOrder {
  amount: string;
  bidAskType: string;
  filled: string;
  id: string;
  idQuery: string;
  isActive: boolean;
  price: string;
  remaining: string;
  status: string;
  timestamp: string;
  tokenBuy: string;
  tokenSell: string;
  user: string;
}

export interface Match {
  bidId: string;
  askId: string;
  price: string;
  quantity: number;
}
