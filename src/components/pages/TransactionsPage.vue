<template>
    <div class="page">
        <h1>📊 История транзакций</h1>

        <div class="card">
            <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; align-items: center;">
                <label style="margin: 0;">🔍 Фильтр:</label>
                <select v-model="filter">
                    <option value="all">Все транзакции</option>
                    <option value="send">Только отправленные</option>
                    <option value="receive">Только полученные</option>
                </select>

                <label style="margin: 0 0 0 20px;">📋 Сортировка:</label>
                <select v-model="sortBy">
                    <option value="date">По дате</option>
                    <option value="amount">По сумме</option>
                </select>
            </div>

            <div v-if="filteredTransactions.length === 0" style="text-align: center; padding: 40px; color: #7f8c8d;">
                <h3>🤷‍♂️ Транзакции не найдены</h3>
                <p>Попробуйте изменить фильтр</p>
            </div>

            <div v-else class="transaction-list">
                <div v-for="transaction in filteredTransactions" :key="transaction.id"
                    :class="['transaction', transaction.type === 'send' ? 'transaction-send' : 'transaction-receive']">
                    <div class="transaction-info">
                        <div class="transaction-type">
                            {{ transaction.type === 'send' ? '📤 Отправлено' : '📥 Получено' }}
                        </div>
                        <div class="transaction-date">
                            {{ formatDate(transaction.date) }}
                        </div>
                        <div v-if="transaction.memo" style="color: #7f8c8d; font-size: 14px; margin-top: 5px;">
                            💬 {{ transaction.memo }}
                        </div>
                        <div style="color: #7f8c8d; font-size: 12px; margin-top: 5px;">
                            {{ transaction.type === 'send' ? 'Кому: ' + transaction.to : 'От: ' + transaction.from }}
                        </div>
                    </div>
                    <div
                        :class="['transaction-amount', transaction.amount > 0 ? 'amount-positive' : 'amount-negative']">
                        {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }} {{ state.currency }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { globalState } from '../../state/globalState';

interface ComponentData {    
    sending: boolean;
    state: typeof globalState;
    filter: 'all' | 'send' | 'receive';
    sortBy: 'date' | 'amount';
}

export default defineComponent({
    name: 'TransactionPage',
    data(): ComponentData {
        return {
            sending: false,
            state: globalState,
            filter: 'all',
            sortBy: 'date'
        }
    },


    computed: {
        filteredTransactions() {
            let filtered = this.state.transactions;
            // Фильтрация
            if (this.filter !== 'all') {
                filtered = filtered.filter(t => t.type === this.filter);
            }

            // Сортировка
            filtered = [...filtered].sort((a, b) => {
                if (this.sortBy === 'date') {
                    const timeA = Date.parse(a.date);
                    const timeB = Date.parse(b.date);
                    if (isNaN(timeA) || isNaN(timeB)) return 0;
                } else if (this.sortBy === 'amount') {
                    return Math.abs(b.amount) - Math.abs(a.amount);
                }
                return 0;
            });
            return filtered;
        }
    },
    methods: {
        formatDate(dateStr: string): string {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return 'Неверная дата';
            return date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
        }
    }

})

</script>