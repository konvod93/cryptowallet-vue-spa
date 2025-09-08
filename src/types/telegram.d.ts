declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            photo_url?: string;
          };
        };
        close: () => void;
        sendData: (data: string) => void;
        // можно добавить другие методы по мере необходимости
      };
    };
  }
}

export {};