// src/stores/ratesStore.ts
import { defineStore } from 'pinia'
import type { Currency } from '../types/currency'

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
          'https://api.coingecko.com/api/v3/simple/price?ids=toncoin,bitcoin,etherium&vs_currencies=usd'
        )
        const data = await res.json()

        this.rates.TON = data.toncoin.usd
        this.rates.BTC = data.bitcoin.usd
        this.rates.ETH = data.etherium.usd
        this.rates.USDT = 1 // базовая валюта
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