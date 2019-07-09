const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

require('dotenv-safe').config({
  allowEmptyValues: true,
});

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: `${process.env.USER_MANAGEMENT_URL}` },
    { name: 'inventory', url: `${process.env.IVENTORY_MANAGEMENT_URL}` },
  ],
});

(async () => {
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({
    schema,
    executor,
  });

  server.listen(process.env.GATEWAY_PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
