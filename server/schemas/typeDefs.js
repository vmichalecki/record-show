const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Album {
    _id: ID
    name: String
    artist: String
    year: String
    image: String
    genre: String
  }

     profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
`;

module.exports = typeDefs;
