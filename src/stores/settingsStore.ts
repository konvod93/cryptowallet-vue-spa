import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    currency: 'TON',
    notifications: false,
    darkMode: false,
    language: 'ru',
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    setCurrency(newCurrency: string) {
      this.currency = newCurrency
    },
    setLanguage(lang: string) {
      this.language = lang
    }
  }
})