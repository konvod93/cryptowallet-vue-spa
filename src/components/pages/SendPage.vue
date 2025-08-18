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

</script>