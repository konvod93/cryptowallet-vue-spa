import { defineStore } from 'pinia';
import { FormData } from '../types/formData';

export const useSendStore = defineStore('send', {
  state: (): FormData => ({
    recipient: '',
    amount: '',
    memo: '',
  }),
  actions: {
    setRecipient(newRecipient: string) {
      this.recipient = newRecipient;
    },
    setAmount(newAmount: string) {
      this.amount = newAmount;
    },
    setMemo(newMemo: string) {
      this.memo = newMemo;
    },
    resetForm() {
      this.recipient = '';
      this.amount = '';
      this.memo = '';
    }
  }
});