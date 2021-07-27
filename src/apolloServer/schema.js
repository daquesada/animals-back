const { gql } = require("apollo-server-express");
const userSchema = require("../components/users/user.schema");
const {
  authTypeDefs,
  authResolvers,
} = require("../components/auth/auth.schema");

const categorySchema = require("../components/categories/category.schema");

const typeDefs = gql`
  type Query {
    ping: String!
  }
  type Mutation {
    message(msg: String!): String!
  }
`;

const resolversBase = {
  Query: {
    ping: () => "pong!",
  },
  Mutation: {
    message: (_, { msg }) => msg,
  },
};

module.exports = {
  typeDefs: [
    typeDefs,
    userSchema.userTypeDefs,
    authTypeDefs,
    categorySchema.categoryTypeDefs,
  ],
  resolvers: [
    resolversBase,
    userSchema.userResolvers,
    authResolvers,
    categorySchema.categoryResolvers,
  ],
};
