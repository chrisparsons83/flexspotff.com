import 'reflect-metadata';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-fastify';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { buildSchema } from 'type-graphql';

import HelloWorldResolver from './resolvers/HelloWorldResolver';
import mikroorm from './mikro-orm';
import PodcastEpisodeResolver from './resolvers/PodcastEpisodeResolver';

// Load env file first.
dotenv.config();

(async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, PodcastEpisodeResolver],
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

  // Setup MikroORM
  app.register(mikroorm);

  await server.start();
  app.register(server.createHandler());
  await app.listen(process.env.GRAPHQL_PORT || 3000);
})();
