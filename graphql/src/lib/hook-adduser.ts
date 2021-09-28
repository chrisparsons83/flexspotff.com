import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { verify } from 'jsonwebtoken';
import { FlexSpotToken } from '../types';

declare module 'fastify' {
  // eslint-disable-next-line no-unused-vars
  interface FastifyRequest {
    userId?: number;
  }
}

const hookAddUser: FastifyPluginAsync = async (fastify) => {
  fastify.decorateRequest('userId', null);

  fastify.addHook('preHandler', async (request) => {
    let tokenDecoded: FlexSpotToken;
    const { token } = request.cookies;
    if (!token) return;

    try {
      tokenDecoded = (await verify(token, process.env.JWT_KEY)) as FlexSpotToken;
    } catch {
      return;
    }

    request.userId = tokenDecoded.userId;
  });
};

export default fastifyPlugin(hookAddUser);
