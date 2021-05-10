import { OAuth2Namespace } from 'fastify-oauth2';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      FRONTEND_URL: string;
    }
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    discordOAuth2: OAuth2Namespace;
  }
}

export {};
