import { Currency } from "./currency.ts";
export interface Transaction {
  currency: Currency;
  id: string;
  type: 'send' | 'receive';
  amount: number;
  to?: string;
  from?: string;
  date: string;
  memo?: string;  
}