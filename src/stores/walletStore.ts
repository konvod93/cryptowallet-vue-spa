// src/stores/walletStore.ts

import { defineStore } from 'pinia';
import type { Wallet } from '../types/wallet.ts';
import { useSettingsStore } from './settingsStore.ts';
import type { Currency } from '../types/currency.ts';
import { useRatesStore } from './ratesStore.ts';


export const useWalletStore = defineStore('wallet', {
  state: (): Wallet => ({
    balance: 1000.00,    
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

  },
  getters: {
    currency(): Currency {
      return useSettingsStore().currency;
    },
    convertedBalance(): number {
    
    const rates = useRatesStore(); // отдельный store для курсов
    
    const rate = rates.getRate(this.currency); // например, BTC/USD
    console.log('Курс:', rate, 'Баланс:', this.balance);

    return this.balance * rate;
  }
  },


  persist: true
});