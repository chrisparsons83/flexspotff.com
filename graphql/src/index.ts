import { ApolloServer, gql } from 'apollo-server-fastify';
import fastify from 'fastify';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = fastify({
  logger: true,
});

(async () => {
  await server.start();
  app.register(server.createHandler());
  await app.listen(3000);
})();
