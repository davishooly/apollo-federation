require('babel-polyfill');
require('babel-polyfill');
require('babel-register');
require('dotenv-safe').config({
  allowEmptyValues: true,
});

const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const { typeDefs } = require('./schema/graphql/user');
const { resolvers } = require('./schema/resolvers/index');
const { mongoClient } = require('../../db/index');

const context = ({ req, res }) => ({
  client: mongoClient,
  req,
  res,
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

server.listen(process.env.USERS_SERVICE_PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

