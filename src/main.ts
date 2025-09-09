import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.ts'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import { useRatesStore } from './stores/ratesStore.ts';

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.mount('#app')

const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user;

const rates = useRatesStore();
rates.fetchRates();

console.log('👤 Telegram user:', user);