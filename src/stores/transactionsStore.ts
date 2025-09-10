import { defineStore } from 'pinia';
import { Transaction } from '../types/transaction.ts';
import { transactionsData } from '../data/data.ts';
import { useSettingsStore } from './settingsStore.ts';

export const useTransactionsStore = defineStore('transactions', {
    state: () => ({
        transactions: transactionsData as Transaction[],
    }),    
    actions: {
        addTransaction(tx: Transaction) {
            const settings = useSettingsStore();
            const enrichedTx = { ...tx, currency: settings.currency };
            this.transactions.unshift(enrichedTx); // добавляем в начало, чтобы новые были сверху
        },
    },
    persist: true,
})