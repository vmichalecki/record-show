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

  type Query {
    albums: [Album]!
    album(albumId: ID!): Album
    genres: [Genre]!
  }
`;

module.exports = typeDefs;
