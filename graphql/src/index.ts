import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-fastify';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { buildSchema } from 'type-graphql';

import HelloWorldResolver from './resolvers/HelloWorldResolver';

(async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  const app = fastify({
    logger: true,
  });

  // Setup CORS.
  app.register(fastifyCors, {
    origin: '*',
  });

  await server.start();
  app.register(server.createHandler());
  await app.listen(3000);
})();
