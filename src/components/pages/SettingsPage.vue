<template>
    <div class="page">
        <h1>⚙️ Настройки</h1>

        <div class="card">
            <h2>💰 Основные настройки</h2>

            <div class="form-group">
                <label>💎 Основная валюта</label>
                <select v-model="settings.currency">
                    <option value="TON">TON</option>
                    <option value="ETH">Ethereum</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="USDT">USDT</option>
                </select>
            </div>

            <div class="form-group">
                <label>🌐 Язык интерфейса</label>
                <select v-model="settings.language">
                    <option value="ru">🇷🇺 Русский</option>
                    <option value="en">🇺🇸 English</option>
                    <option value="zh">🇨🇳 中文</option>
                </select>
            </div>

            <div class="form-group">
                <label>
                    <input type="checkbox" v-model="settings.notifications" style="width: auto; margin-right: 10px;">
                    🔔 Push-уведомления
                </label>
            </div>

            <div class="form-group">
                <label>
                    <input type="checkbox" v-model="settings.darkMode" style="width: auto; margin-right: 10px;">
                    🌙 Темная тема
                </label>
            </div>
        </div>

        <div class="card">
            <h2>🔐 Безопасность</h2>

            <div style="margin-bottom: 15px;">
                <button class="btn" @click="showSeed = !showSeed">
                    {{ showSeed ? '🙈 Скрыть' : '👀 Показать' }} seed-фразу
                </button>
            </div>

            <div v-if="showSeed"
                style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <strong>⚠️ Внимание!</strong> Никогда не сообщайте seed-фразу третьим лицам!
                <div
                    style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 10px; font-family: monospace;">
                    {{ seedPhrase }}
                </div>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="btn btn-danger">🔄 Сменить пароль</button>
                <button class="btn btn-danger">🔐 Включить 2FA</button>
            </div>
        </div>

        <div class="card">
            <h2>📱 О приложении</h2>
            <div style="color: #7f8c8d;">
                <p><strong>Версия:</strong> 1.0.0</p>
                <p><strong>Сеть:</strong> TON Mainnet</p>
                <p><strong>Последнее обновление:</strong> 15.01.2024</p>
            </div>

            <div style="margin-top: 20px;">
                <button class="btn">📞 Техподдержка</button>
                <button class="btn">📖 Документация</button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useSettingsStore } from '../../stores/settingsStore'
import { ref } from 'vue';

const settings = useSettingsStore();
const showSeed = ref(false);
const seedPhrase = ref('your seed phrase here')

</script>


