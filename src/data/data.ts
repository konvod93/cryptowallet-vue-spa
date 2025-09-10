import { Transaction } from "../types/transaction.ts";

export const transactionsData = [
    { id: '1', type: 'receive', amount: 500, from: 'UQA...abc123', date: '2024-01-15T10:30:00', currency: 'TON' },
    { id: '2', type: 'send', amount: 150, to: 'UQB...def456', date: '2024-01-14T15:45:00', currency: 'TON' },
    { id: '3', type: 'receive', amount: 250, from: 'UQC...ghi789', date: '2024-01-13T09:15:00', currency: 'TON' },
    { id: '4', type: 'send', amount: -75.25, to: 'UQD...jkl012', date: '2024-01-12T14:20:00', currency: 'TON' },
  ] as Transaction[]