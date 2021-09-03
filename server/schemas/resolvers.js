// BAD
// models> index, models> profile
// schemas> resolvers, schemas> typeDefs will all have to be changed
const { Album, Genre } = require('../models');

const resolvers = {
  Query: {
    albums: async () => {
      return Album.find({});
    },

    album: async (parent, { albumId }) => {
      return Album.findOne({ _id: albumId });
    },

    genres: async () => {
      return Genre.find({});
    },
  },
};

module.exports = resolvers;
