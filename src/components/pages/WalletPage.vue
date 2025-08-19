<template>
    <div class="page">
        <h1>💳 Мой кошелек</h1>

        <div class="card wallet-card">
            <div class="currency">Текущий баланс</div>
            <div class="balance">{{ state.balance.toFixed(2) }}</div>
            <div class="currency">{{ state.currency }}</div>
            <div style="margin-top: 25px;">
                <router-link to="/send" class="btn" style="background: rgba(255,255,255,0.2);">📤
                    Отправить</router-link>
                <button class="btn" style="background: rgba(255,255,255,0.2);" @click="refreshBalance">🔄
                    Обновить</button>
            </div>
        </div>

        <div class="card">
            <h2>📊 Последние транзакции</h2>
            <div class="transaction-list">
                <div v-for="transaction in state.transactions.slice(0, 3)" :key="transaction.id"
                    class="['transaction', transaction.type === 'send' ? 'transaction-send' : 'transaction-receive']">
                    <div class="transaction-info">
                        <div class="transaction-type">
                            {{ transaction.type === 'send' ? '📤 Отправлено' : '📥 Получено' }}
                        </div>
                        <div class="transaction-date">
                            {{ formatDate(transaction.date) }}
                        </div>
                    </div>
                    <div
                        :class="['transaction-amount', transaction.amount > 0 ? 'amount-positive' : 'amount-negative']">
                        {{ transaction.type === 'send' ? '-' : '+' }}{{ transaction.amount }} {{ state.currency }}
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <router-link to="/transactions" class="btn">📋 Показать все</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { globalState } from '../../state/globalState';
import { defineComponent } from 'vue';

interface ComponentData {
  state: typeof globalState;
}


export default defineComponent({
  name: '',
  data(): ComponentData {
    return {
      state:
        globalState
    };
  },
  methods: {
    formatDate(dateStr: string): string {
      const date = new Date(dateStr);
      return date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
    },
    refreshBalance(): void {
      this.state.balance = Math.round((Math.random() * 2000 + 500) * 100) / 100;
    }
  }
});
</script>