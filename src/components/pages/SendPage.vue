<template>
    <div class="page">
        <h1>📤 Отправить средства</h1>

        <div class="card">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <strong>💰 Доступно:</strong> {{ state.balance.toFixed(2) }} {{ state.currency }}
            </div>

            <form @submit.prevent="sendTransaction">
                <div class="form-group">
                    <label>📍 Адрес получателя</label>
                    <input v-model="form.recipient" placeholder="UQ..." required>
                </div>

                <div class="form-group">
                    <label>💎 Сумма ({{ state.currency }})</label>
                    <input v-model="form.amount" type="number" step="0.01" :max="state.balance" placeholder="0.00"
                        required>
                </div>

                <div class="form-group">
                    <label>📝 Комментарий (необязательно)</label>
                    <input v-model="form.memo" placeholder="Описание платежа">
                </div>

                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 25px;">
                    <button type="submit" class="btn btn-success" :disabled="sending || !isFormValid">
                        {{ sending ? '⏳ Отправка...' : '💸 Отправить' }}
                    </button>
                    <router-link to="/wallet" class="btn">❌ Отмена</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { globalState } from '../../state/globalState';
import type { Transaction } from '../../types/transaction';

interface FormData {
  recipient: string;
  amount: string;
  memo: string;
}

interface ComponentData {
  form: FormData;
  sending: boolean;
  state: typeof globalState;
}

export default defineComponent({
  name: 'TransactionForm',

  data(): ComponentData {
    return {
      form: {
        recipient: '',
        amount: '',
        memo: ''
      },
      sending: false,
      state: globalState
    };
  },

  computed: {
    isFormValid(): boolean {
      const amount = parseFloat(this.form.amount);
      return (
        this.form.recipient.trim() !== '' &&
        !isNaN(amount) &&
        amount > 0 &&
        amount <= this.state.balance
      );
    }
  },

  methods: {
    async sendTransaction() {
      this.sending = true;

      await new Promise(resolve => setTimeout(resolve, 2000));

      const amount = parseFloat(this.form.amount);

      const newTx: Transaction = {
        id: Date.now(),
        type: 'send',
        amount: -amount,
        to: this.form.recipient,
        date: new Date().toISOString(),
        memo: this.form.memo
      };

      this.state.transactions.unshift(newTx);
      this.state.balance -= amount;

      this.form.recipient = '';
      this.form.amount = '';
      this.form.memo = '';
      this.sending = false;

      this.$router.push('/transactions');
    }
  }
});
</script>