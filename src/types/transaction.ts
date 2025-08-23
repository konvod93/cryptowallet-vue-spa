// src/types/transaction.ts
export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  to?: string;
  from?: string;
  date: string;
  memo?: string;  
}