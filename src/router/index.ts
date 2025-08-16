import { createRouter, createWebHistory } from 'vue-router'

// Импортируем компоненты страниц
import HomePage from '../components/pages/HomePage.vue'
import WalletPage from '../components/pages/WalletPage.vue'
import SendPage from '../components/pages/SendPage.vue'
import TransactionsPage from '../components/pages/TransactionsPage.vue'
import SettingsPage from '../components/pages/SettingsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/wallet', name: 'Wallet', component: WalletPage },
  { path: '/send', name: 'Send', component: SendPage },
  { path: '/transactions', name: 'Transactions', component: TransactionsPage },
  { path: '/settings', name: 'Settings', component: SettingsPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

