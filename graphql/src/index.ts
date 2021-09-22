import { MikroORM } from '@mikro-orm/core';
import { ApolloServer } from 'apollo-server-fastify';
import dotenv from 'dotenv';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import customAuthChecker from './lib/auth-checker';
import config from './mikro-orm.config';
import HelloWorldResolver from './resolvers/HelloWorldResolver';
import LeagueResolver from './resolvers/LeagueResolver';
import PodcastEpisodeResolver from './resolvers/PodcastEpisodeResolver';

// Load env file first.
dotenv.config();

(async () => {
  // Setup MikroORM
  const mikroorm = await MikroORM.init(config);

  // Setup ApolloServer
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, LeagueResolver, PodcastEpisodeResolver],
      authChecker: customAuthChecker,
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
