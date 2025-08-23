<template>
    <div class="page">
        <h1>📤 Отправить средства</h1>

        <div class="card">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <strong>💰 Доступно:</strong> {{ wallet.balance.toFixed(2) }} {{ wallet.currency }}
            </div>

            <form @submit.prevent="sendTransaction">
                <div class="form-group">
                    <label>📍 Адрес получателя</label>
                    <input v-model="state.recipient" placeholder="UQ..." required>
                </div>

                <div class="form-group">
                    <label>💎 Сумма ({{ wallet.currency }})</label>
                    <input v-model="state.amount" type="number" step="0.01" :max="wallet.balance" placeholder="0.00"
                        required>
                </div>

                <div class="form-group">
                    <label>📝 Комментарий (необязательно)</label>
                    <input v-model="state.memo" placeholder="Описание платежа">
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

<script setup lang="ts">

import { computed, ref } from 'vue';
import { useSendStore } from '../../stores/sendStore';
import { useWalletStore } from '../../stores/walletStore';


const state = useSendStore();
const wallet = useWalletStore();
const sending= ref(false);
const isFormValid = computed(() => {
  return (
    state.recipient.trim() !== '' &&
    parseFloat(state.amount) > 0 &&
    parseFloat(state.amount) <= wallet.balance
  );
});
function sendTransaction() {
  sending.value = true;

  setTimeout(() => {
    console.log('Отправка:', {
      to: state.recipient,
      amount: state.amount,
      memo: state.memo,
      currency: wallet.currency,
    });

    state.resetForm();
    sending.value = false;
  }, 1500);
}




</script>