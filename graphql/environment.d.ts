declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_URL: string;
      COOKIE_DOMAIN: string;
      DB_HOST: string;
      DB_NAME: string;
      DB_PASSWORD: string;
      DB_PORT: number;
      DB_TYPE: string;
      DB_USER: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      FASTIFY_COOKIE_KEY: string;
      FRONTEND_URL: string;
      JWT_KEY: string;
    }
  }
}

export {};
