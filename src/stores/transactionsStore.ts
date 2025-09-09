import { defineStore } from 'pinia';
import { Transaction } from '../types/transaction.ts';
import { transactionsData } from '../data/data.ts';

export const useTransactionsStore = defineStore('transactions', {
    state: () => ({
        transactions: transactionsData as Transaction[],
    }),    
    actions: {
        addTransaction(tx: Transaction) {
            this.transactions.unshift(tx); // добавляем в начало, чтобы новые были сверху
        },
    },
    persist: true,
})