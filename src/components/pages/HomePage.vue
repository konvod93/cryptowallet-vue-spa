<template>
    <div class="page">
        <div class="card">
            <h1>🎉 Добро пожаловать в CryptoWallet!</h1>
            <p style="text-align: center; font-size: 18px; color: #7f8c8d; margin: 20px 0;">
                Ваш безопасный кошелек для работы с криптовалютами
            </p>
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 30px;">
                <router-link to="/wallet" class="btn btn-success">💳 Открыть кошелек</router-link>
                <router-link to="/send" class="btn">📤 Отправить средства</router-link>
            </div>
        </div>

        <div class="card">
            <h2>✨ Возможности</h2>
            <div
                style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 48px;">🔒</div>
                    <h3>Безопасность</h3>
                    <p>Надежная защита ваших средств</p>
                </div>
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 48px;">⚡</div>
                    <h3>Скорость</h3>
                    <p>Быстрые транзакции</p>
                </div>
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 48px;">🌐</div>
                    <h3>Мультисеть</h3>
                    <p>Поддержка разных блокчейнов</p>
                </div>
            </div>
        </div>
    </div>
</template>