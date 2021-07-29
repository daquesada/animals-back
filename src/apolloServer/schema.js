const { gql } = require("apollo-server-express");
const userSchema = require("../components/users/user.schema");
const authSchema = require("../components/auth/auth.schema");
const categorySchema = require("../components/categories/category.schema");
const photoSchema = require("../components/photos/photo.schema");

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
    authSchema.authTypeDefs,
    categorySchema.categoryTypeDefs,
    photoSchema.photoTypeDefs,
  ],
  resolvers: [
    resolversBase,
    userSchema.userResolvers,
    authSchema.authResolvers,
    categorySchema.categoryResolvers,
    photoSchema.photoResolvers,
  ],
};
