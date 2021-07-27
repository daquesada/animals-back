const { gql } = require("apollo-server-express");

const categoryTypeDefs = gql`
  type Category {
    id: String
    name: String
    emoji: String
    cover: String
    path: String
  }
  input CategoryInput {
    name: String!
    emoji: String!
    cover: String!
    path: String!
  }
  input CategoryID {
    id: ID!
  }
  input CategoryDeleteInput {
    id: ID!
    name: String
    emoji: String
    cover: String
    path: String
  }
  type DeletedCategory {
    message: String!
    deletedCount: Int!
  }
  extend type Query {
    getCategories: [Category]!
    getCategory(input: CategoryID!): Category
  }

  extend type Mutation {
    createCategory(input: CategoryInput!): Category
    deleteCategory(input: CategoryDeleteInput!): DeletedCategory
  }
`;

module.exports = { categoryTypeDefs };
