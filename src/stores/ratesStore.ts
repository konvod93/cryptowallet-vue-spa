// src/stores/ratesStore.ts
import { defineStore } from 'pinia'
import type { Currency } from '../types/currency.ts'

export const useRatesStore = defineStore('rates', {
  state: () => ({
    rates: {
      TON: 1,
      BTC: 1,
      ETH: 1,
      USDT: 1
    } as Record<Currency, number>
  }),

  actions: {
    async fetchRates() {

      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,the-open-network&vs_currencies=usd'
        );
        const data = await res.json();
        console.log('Получены курсы:', data);

        this.rates.BTC = data.bitcoin?.usd ?? 1;
        this.rates.ETH = data.ethereum?.usd ?? 1;
        this.rates.TON = data['the-open-network']?.usd ?? 1;
        this.rates.USDT = 1; // базовая валюта
      } catch (error) {
        console.error('Ошибка при получении курсов:', error)
      }
    },

    getRate(currency: Currency): number {
      return this.rates[currency] || 1
    }
  },

  persist: true
})