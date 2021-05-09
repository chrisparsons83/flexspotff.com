import dotenv from 'dotenv';
import fastify from 'fastify';
import fetch from 'node-fetch';
import oauthPlugin from 'fastify-oauth2';

// Load env file first.
dotenv.config();

// Start fastify server.
const server = fastify();

server.register(oauthPlugin, {
  name: 'discordOAuth2',
  credentials: {
    client: {
      id: process.env.DISCORD_CLIENT_ID,
      secret: process.env.DISCORD_CLIENT_SECRET,
    },
    auth: oauthPlugin.DISCORD_CONFIGURATION,
  },
  // register a fastify url to start the redirect flow
  startRedirectPath: '/login/discord',
  // facebook redirect here after the user login
  callbackUri: `${process.env.BACKEND_URL}/login/discord/callback`,
  scope: ['identify'],
});

// Leave this in as a bit of a smoke test for now.
// TODO: Remove this when not needed anymore.
server.get('/ping', async (request, reply) => {
  return 'pong\n';
});

server.get('/login/discord/callback', {}, async (request, reply) => {
  const token = await server.discordOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

  // Get user information
  const headers = {
    Authorization: `${token.token_type} ${token.access_token}`
  }
  const userResponse = await fetch('https://discord.com/api/users/@me', { headers });
  const user = await userResponse.json();
  console.log(user);

  // Check to see if user exists.

  // Redirect to a route serving HTML or to your front-end
  reply.redirect(`${process.env.FRONTEND_URL}/`);
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
