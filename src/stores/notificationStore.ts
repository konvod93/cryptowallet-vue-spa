// stores/notificationStore.ts
import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    message: '',
    type: 'info' as 'info' | 'success' | 'error',
    visible: false,
  }),
  actions: {
    notify(msg: string, type: 'info' | 'success' | 'error' = 'info') {
      this.message = msg;
      this.type = type;
      this.visible = true;

      setTimeout(() => {
        this.visible = false;
      }, 3000); // авто-сброс через 3 секунды
    }
  }
});