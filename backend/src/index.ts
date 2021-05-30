import 'reflect-metadata';
import dotenv from 'dotenv';
import fastify from 'fastify';
import cookie, { FastifyCookieOptions } from 'fastify-cookie';
import fastifyCors from 'fastify-cors';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import oauthPlugin from 'fastify-oauth2';

import mikroorm from './mikro-orm';

import leagueRoutes from './routes/leagues';

// Load env file first.
dotenv.config();

// Start fastify server.
const server = fastify({
  logger: true,
});

// Setup CORS.
server.register(fastifyCors, {
  origin: '*',
});

// Setup Fastify Cookie
server.register(cookie, {
  secret: process.env.FASTIFY_COOKIE_KEY, // for cookies signature
  parseOptions: {}, // options for parsing cookies
} as FastifyCookieOptions);

// Setup MikroORM
server.register(mikroorm);

// Setup OAuth2
server.register(oauthPlugin, {
  name: 'discordOAuth2',
  credentials: {
    client: {
      id: process.env.DISCORD_CLIENT_ID,
      secret: process.env.DISCORD_CLIENT_SECRET,
    },
    auth: oauthPlugin.DISCORD_CONFIGURATION,
  },
  // Register a fastify url to start the redirect flow.
  startRedirectPath: '/login/discord',
  // Discord redirect here after the user login.
  callbackUri: `${process.env.BACKEND_URL}/login/discord/callback`,
  scope: ['identify'],
});

server.get('/login/discord/callback', {}, async (request, reply) => {
  const token = await server.discordOAuth2
    .getAccessTokenFromAuthorizationCodeFlow(request)
    .catch((err) => {
      server.log.error(err);
      process.exit(1);
    });

  // Get user information.
  const headers = {
    Authorization: `${token.token_type} ${token.access_token}`,
  };
  const userResponse = await fetch('https://discord.com/api/users/@me', { headers }).catch(
    (err) => {
      server.log.error(err);
      process.exit(1);
    },
  );
  const user = await userResponse.json().catch((err) => {
    server.log.error(err);
    process.exit(1);
  });

  // TODO: Check to see if user exists.

  // Create JWT.
  const userToken = jwt.sign(
    {
      user,
    },
    process.env.JWT_KEY,
    { expiresIn: '7d' },
  );

  // Redirect to a route serving HTML or to your front-end.
  reply
    .cookie('token', userToken, {
      domain: process.env.COOKIE_DOMAIN,
      path: '/',
    })
    .redirect(`${process.env.FRONTEND_URL}`);
});

// Leave this in as a bit of a smoke test for now.
// TODO: Remove this when not needed anymore.
server.get('/ping', async () => {
  return { message: 'pong' };
});

// Setup Leagues endpoints
leagueRoutes.forEach((route) => {
  server.route(route);
});

server.listen(8080, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
