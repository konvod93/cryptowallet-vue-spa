import { createRouter, createWebHistory } from 'vue-router'

// Импортируем компоненты страниц
import HomePage from '../views/HomePage.vue'
import WalletPage from '../views/WalletPage.vue'
import SendPage from '../views/SendPage.vue'
import TransactionsPage from '../views/TransactionsPage.vue'
import SettingsPage from '../views/SettingsPage.vue'

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

