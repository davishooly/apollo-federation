require('babel-polyfill');
require('babel-polyfill');
require('babel-register');
require('dotenv-safe').config({
  allowEmptyValues: true,
});

const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const { typeDefs } = require('./schema/graphql/index');
const { resolvers } = require('./schema/resolvers/index');
const { pgClient } = require('../../db/index');

const context = () => ({
  client: pgClient,
});
const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
  context,
});

server.listen(process.env.INVENTORY_SERVICE_PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
