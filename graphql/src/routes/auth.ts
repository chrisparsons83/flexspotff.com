import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { sign } from 'jsonwebtoken';

import User from '../entities/User';
import Axios from '../lib/axios';
import { DiscordUser } from '../types';

type DiscordCallbackQueryString = {
  error?: string;
  // eslint-disable-next-line camelcase
  error_description?: string;
};

const routes = async (fastify: FastifyInstance) => {
  fastify.get<{ Querystring: DiscordCallbackQueryString }>(
    '/login/discord/callback',
    async (request: FastifyRequest, reply: FastifyReply) => {
      // If access denied, just send back to homepage
      // TODO: Figure out why the Querystring declaration in function doesn't type query correctly.
      const { error } = request.query as DiscordCallbackQueryString;
      if (error === 'access_denied') {
        reply.redirect(process.env.FRONTEND_URL);
        return;
      }

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
      const { id, username, avatar } = response.data;

      // Check to see if user exists
      let localUser = await fastify.mikroorm.em.findOne(User, { discordId: id });

      // If they don't exist, create them in the system
      if (!localUser) {
        localUser = new User(id, username);
      }

      // Update their info with what you just received.
      localUser.username = username;
      localUser.avatar = avatar;

      // Save to DB.
      await fastify.mikroorm.em.persistAndFlush(localUser);

      // Log user in by creating JWT
      // eslint-disable-next-line no-underscore-dangle
      const userToken = sign({ userId: localUser._id }, process.env.JWT_KEY, { expiresIn: '7d' });

      // Redirect to homepage
      reply
        .cookie('token', userToken, {
          domain: process.env.COOKIE_DOMAIN,
          path: '/',
        })
        .redirect(process.env.FRONTEND_URL);
    },
  );
};

export default fastifyPlugin(routes);
