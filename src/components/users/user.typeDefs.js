const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    avatar: String!
  }

  input UserInput {
    email: String!
    password: String!
    avatar: String!
  }
  type DeletedUser {
    message: String!
    deletedCount: Int!
  }
  input DeleteUserInput {
    id: ID!
    email: String
    password: String
    avatar: String
  }
  extend type Query {
    getAllUsers: [User]
  }

  extend type Mutation {
    insertOneUser(input: UserInput!): User
    deleteOneUser(input: DeleteUserInput!): DeletedUser
  }
`;

module.exports = { userTypeDefs };
