const { gql } = require("apollo-server-express");

const photoTypeDefs = gql`
  type Photo {
    id: ID
    categoryId: ID
    src: String
    userId: ID
    likes: Int
  }

  input PhotoInput {
    categoryId: ID
    src: String
    userId: ID
    likes: Int
  }
  input PhotoUpdate {
    find: PhotoInput
    update: PhotoInput
  }

  extend type Query {
    getPhotos: [Photo]!
  }
  extend type Mutation {
    createPhoto(input: PhotoInput!): Photo
    updatePhoto(input: PhotoUpdate!): Photo
  }
`;

module.exports = { photoTypeDefs };
