import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import Axios from '../lib/axios';
import { DiscordUser } from '../types';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/login/discord/callback', async (request: FastifyRequest, reply: FastifyReply) => {
    // Get tokens
    const token = await fastify.discordOAuth2
      .getAccessTokenFromAuthorizationCodeFlow(request)
      .catch((err: FastifyError) => {
        fastify.log.error(err);
        process.exit(1);
      });

    // Get user information
    const response = await Axios.get<DiscordUser>('/api/users/@me', {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
      baseURL: 'https://discord.com',
    });
    const discordUser = response.data;

    // Check to see if user exists
    console.log(discordUser);

    // If they don't exist, create them in the system
    // Log user in
    // Create JWT
    // Redirect to homepage
    reply.send({ message: 'hello!' });
  });
};

export default fastifyPlugin(routes);
