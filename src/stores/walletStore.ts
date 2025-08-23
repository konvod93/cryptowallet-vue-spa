// src/stores/walletStore.ts

import { defineStore } from 'pinia';
import type { Wallet } from '../types/wallet';
import type { Transaction } from '../types/transaction';
import { nanoid } from 'nanoid'; // для генерации уникальных id

export const useWalletStore = defineStore('wallet', {
  state: (): Wallet => ({
    balance: 1000.00,
    currency: 'TON',
    transactions: [],
  }),
  actions: {
    updateBalance(newBalance: number) {
      this.balance = newBalance;
    },    
    addTransaction(tx: Transaction) {
      this.transactions.unshift(tx); // добавляем в начало, чтобы новые были сверху
    },
    sendFunds(to: string, amount: number, memo?: string) {
      if (amount > this.balance) throw new Error('Недостаточно средств');

      this.balance -= amount;

      const tx: Transaction = {
        id: nanoid(),
        type: 'send',
        amount,
        to,
        date: new Date().toISOString(),
        memo,
      };

      this.addTransaction(tx);
    },
    receiveFunds(from: string, amount: number, memo?: string) {
      this.balance += amount;

      const tx: Transaction = {
        id: nanoid(),
        type: 'receive',
        amount,
        from,
        date: new Date().toISOString(),
        memo,
      };

      this.addTransaction(tx);
    },
    refreshBalance() {
      // Пример: обновление баланса и добавление фейковой транзакции
      this.balance += Math.random() * 10 - 5

      const newTransaction: Transaction = {
        id: crypto.randomUUID(),
        type: Math.random() > 0.5 ? 'receive' : 'send',
        amount: Math.round(Math.random() * 100) / 10,
        date: new Date().toISOString()
      }

      this.transactions.unshift(newTransaction)
    }

  }
});