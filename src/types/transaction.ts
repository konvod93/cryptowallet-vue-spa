// src/types/transaction.ts
export interface Transaction {
  id: number;
  type: 'send' | 'receive';
  amount: number;
  to?: string;
  from?: string;
  date: string;
  memo?: string;
}