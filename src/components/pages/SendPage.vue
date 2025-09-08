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
          <input v-model="send.recipient" placeholder="UQ..." required>
          <div v-if="send.recipient && !isAddressValid" style="color: red; font-size: 0.9em;">
            ❌ Неверный формат TON-адреса
          </div>


        </div>

        <div class="form-group">
          <label>💎 Сумма ({{ wallet.currency }})</label>
          <input v-model="send.amount" type="number" step="0.01" :max="wallet.balance" placeholder="0.00" required>
        </div>

        <div class="form-group">
          <label>📝 Комментарий (необязательно)</label>
          <input v-model="send.memo" placeholder="Описание платежа">
        </div>

        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 25px;">
          <button type="submit" class="btn btn-success" :disabled="sending || !isFormValid">
            {{ sending ? '⏳ Отправка...' : '💸 Отправить' }}
          </button>
          <router-link to="/wallet" class="btn">❌ Отмена</router-link>
        </div>
      </form>
    </div>
    <div v-if="notification.visible" :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </div>

</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { useSendStore } from '../../stores/sendStore';
import { useWalletStore } from '../../stores/walletStore';
import { useNotificationStore } from '../../stores/notificationStore';
import { useTransactionsStore } from '../../stores/transactionsStore';


const send = useSendStore();
const wallet = useWalletStore();
const notification = useNotificationStore();
const transactionsStore = useTransactionsStore();
const tonAddressRegex = /^UQ[A-Za-z0-9_-]{44,64}$/;

const isAddressValid = computed(() => {
  return tonAddressRegex.test(send.recipient.trim());
});

const sending = ref(false);
const isFormValid = computed(() => {
  return (
    isAddressValid.value &&
    send.recipient.trim() !== '' &&
    parseFloat(send.amount) > 0 &&
    parseFloat(send.amount) <= wallet.balance
  );
});
function sendTransaction() {
  sending.value = true;

  try {
    wallet.sendFunds(send.recipient, parseFloat(send.amount), send.memo);
    // 👇 Добавляем транзакцию в историю
    transactionsStore.addTransaction({
      id: Date.now().toString(),
      type: 'send',
      amount: -parseFloat(send.amount),
      to: send.recipient,
      date: new Date().toISOString(),
      memo: send.memo
    });

    notification.notify('✅ Средства успешно отправлены', 'success');
    send.resetForm();
  } catch (error) {
    const err = error as Error
    notification.notify('❌ Ошибка при отправке: ' + err.message, 'error');
  } finally {
    sending.value = false;
  }
}

</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.notification.success {
  background-color: #d4edda;
  color: #155724;
}

.notification.error {
  background-color: #f8d7da;
  color: #721c24;
}

.notification.info {
  background-color: #cce5ff;
  color: #004085;
}
</style>
