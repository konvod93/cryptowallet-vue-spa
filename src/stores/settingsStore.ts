// stores/settingsStore.ts
import { defineStore } from 'pinia'
import type { Currency } from '../types/currency'

export type DarkMode = true | false
export type Language = 'en' | 'ru' | 'uk'
export type Notification = true | false

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    currency: 'BTC' as Currency,
    darkMode: false as DarkMode,
    language: 'en' as Language,
    notifications: false as Notification
  }),
  actions: {
    setCurrency(newCurrency: Currency) {
      this.currency = newCurrency
    },
    setDarkMode(newDarkMode: DarkMode) {
      this.darkMode = newDarkMode
    },
    setLanguage(newLang: Language) {
      this.language = newLang
    },
    setNotification(newNotification: Notification) {
      this.notifications = newNotification
    },
  },
  persist: true,
})