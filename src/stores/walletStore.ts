// src/stores/walletStore.ts
import { defineStore } from 'pinia'
import type { Wallet } from '../types/wallet'
import type { Transaction } from '../types/transaction'


export const useWalletStore = defineStore('wallet', {
  state: (): Wallet => ({
    balance: 123.45,
    currency: 'TON',
    transactions: []
  }),
  actions: {
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
  },
  persist: true
})