const { ApolloServer } = require("apollo-server-express");
const { formatError } = require("./formatErrors");
const { resolvers, typeDefs } = require("./schema");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  formatError,
  context: ({ req }) => {
    // get user data from the request
    const { id, email } = req.user || {};
    return { id, email };
  },
});

module.exports = server;
