const { gql } = require("apollo-server-express");

const authTypeDefs = gql`
  input LoginInput {
    email: String!
    password: String!
  }

  type Auth {
    token: String
    isValidAuth: Boolean!
  }
  extend type Mutation {
    login(input: LoginInput!): Auth!
  }
`;

module.exports = { authTypeDefs };
