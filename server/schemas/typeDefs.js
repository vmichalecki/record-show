const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Album {
    _id: ID
    name: String
    artist: String
    year: String
    image: String
  }

  type Query {
    albums: [Album]!
  }
`;

module.exports = typeDefs;
