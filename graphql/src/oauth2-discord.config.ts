import { FastifyRegisterOptions } from 'fastify';
import oauthPlugin, { FastifyOAuth2Options } from 'fastify-oauth2';

const discordOAuthConfig: FastifyRegisterOptions<FastifyOAuth2Options> = {
  name: 'discordOAuth2',
  credentials: {
    client: {
      id: process.env.DISCORD_CLIENT_ID as string,
      secret: process.env.DISCORD_CLIENT_SECRET as string,
    },
    auth: oauthPlugin.DISCORD_CONFIGURATION,
  },
  // Register a fastify url to start the redirect flow.
  startRedirectPath: '/login/discord',
  // Discord redirect here after the user login.
  callbackUri: `${process.env.BACKEND_URL}/login/discord/callback`,
  scope: ['identify'],
};

export default discordOAuthConfig;
