import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/login/discord/callback', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'hello!' });
  });
};

export default fastifyPlugin(routes);
