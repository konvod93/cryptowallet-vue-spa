<template>
    <!-- Навигация -->
    <nav class="navbar">
        <div class="nav-content">
            <div class="logo">💰 CryptoWallet</div>
            <ul class="nav-links">
                <li><router-link to="/">🏠 Главная</router-link></li>
                <li><router-link to="/wallet">💳 Кошелек</router-link></li>
                <li><router-link to="/send">📤 Отправить</router-link></li>
                <li><router-link to="/transactions">📊 Транзакции</router-link></li>
                <li><router-link to="/settings">⚙️ Настройки</router-link></li>
            </ul>
        </div>
    </nav>
</template>