import 'reflect-metadata';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-fastify';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { MikroORM } from '@mikro-orm/core';
import { buildSchema } from 'type-graphql';

import HelloWorldResolver from './resolvers/HelloWorldResolver';
import PodcastEpisodeResolver from './resolvers/PodcastEpisodeResolver';
import LeagueResolver from './resolvers/LeagueResolver';
import config from './mikro-orm.config';

// Load env file first.
dotenv.config();

(async () => {
  // Setup MikroORM
  const mikroorm = await MikroORM.init(config);

  // Setup ApolloServer
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, LeagueResolver, PodcastEpisodeResolver],
    }),
    context: ({ req, res }) => ({ req, res, em: mikroorm.em.fork() }),
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
  await app.listen(process.env.GRAPHQL_PORT || 3000);
})();
