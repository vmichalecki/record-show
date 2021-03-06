const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Album {
    _id: ID
    name: String
    artist: String
    year: String
    image: String
    genre: Genre
  }

  type Genre {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Result {
    _id: ID
    user: User
    album: Album
    genre: Genre
  }

  type Query {
    albums: [Album]!
    album(albumId: ID!): Album
    genres: [Genre]!
    user: User
    genre(genreId: ID!): Genre
    albumsByGenre(genreId: ID!): [Album]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    addResult(user: ID!, album: ID!, genre: ID!): Result
    updateAlbum(albumId: ID!, genre: ID!): Album
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
