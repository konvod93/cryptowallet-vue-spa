<template>
    <div class="page">
        <h1>💳 Мой кошелек</h1>

        <div class="card wallet-card">
            <div class="currency">Текущий баланс</div>
            <div class="balance">{{ wallet.convertedBalance.toFixed(2) }}</div>
            <div class="currency">{{ wallet.currency }}</div>
            <div style="margin-top: 25px;">
                <router-link to="/send" class="btn" style="background: rgba(255,255,255,0.2);">📤
                    Отправить
                </router-link>

            </div>
        </div>

        <div class="card">
            <h2>📊 Последние транзакции</h2>
            <div class="transaction-list">
                <div v-for="transaction in transactions.slice(0, 3)" :key="transaction.id"
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
                        {{ transaction.type === 'send' ? '-' : '+' }}{{ transaction.amount }} {{ wallet.currency }}
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <router-link to="/transactions" class="btn">📋 Показать все</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useWalletStore } from '../../stores/walletStore'
import { useTransactionsStore } from '../../stores/transactionsStore'
import { computed } from 'vue'



const wallet = useWalletStore()
const transactionsStore = useTransactionsStore()
const transactions = computed(() => transactionsStore.transactions.slice(0, 3))



function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleString('uk-UA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
