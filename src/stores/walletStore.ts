// src/stores/walletStore.ts

import { defineStore } from 'pinia';
import type { Wallet } from '../types/wallet';

export const useWalletStore = defineStore('wallet', {
  state: (): Wallet => ({
    balance: 1000.00,
    currency: 'TON',
      }),
  actions: {
    updateBalance(newBalance: number) {
      this.balance = newBalance;
    },    
   
    sendFunds(_to: string, amount: number, _memo?: string) {
      if (amount > this.balance) throw new Error('Недостаточно средств');

      this.balance -= amount;    

      
    },
    receiveFunds(_from: string, amount: number, _memo?: string) {
      this.balance += amount;
      
    },
    
  }
});