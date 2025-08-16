
<template>
  <div class="app">
    <Navigation />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

  </div>
</template>

<style scoped></style>

<script setup lang="ts">

import Navigation from './components/Navigation.vue';

</script>