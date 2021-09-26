import { MikroORM } from '@mikro-orm/core';
import { ApolloServer } from 'apollo-server-fastify';
import dotenv from 'dotenv';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import oauthPlugin from 'fastify-oauth2';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import customAuthChecker from './lib/auth-checker';
import config from './mikro-orm.config';
import discordOAuthConfig from './oauth2-discord.config';
import LeagueResolver from './resolvers/LeagueResolver';
import PodcastEpisodeResolver from './resolvers/PodcastEpisodeResolver';
import authRoutes from './routes/auth';

// Load env file first.
dotenv.config();

(async () => {
  // Setup fastify.
  const app = fastify({ logger: process.env.NODE_ENV !== 'production' });

  // Setup MikroORM.
  // TODO: Make this fastify module.
  const mikroorm = await MikroORM.init(config);

  // Setup CORS.
  app.register(fastifyCors, { origin: '*' });

  // Setup OAuth2 for Discord.
  app.register(oauthPlugin, discordOAuthConfig);
  app.register(authRoutes);

  // Setup ApolloServer
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [LeagueResolver, PodcastEpisodeResolver],
      authChecker: customAuthChecker,
    }),
    context: ({ req, res }) => ({ req, res, em: mikroorm.em.fork() }),
  });
  await server.start();
  app.register(server.createHandler());

  // Spin up Fastify.
  await app.listen(process.env.GRAPHQL_PORT || 3000);
})();
