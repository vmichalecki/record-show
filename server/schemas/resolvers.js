const { Album, Genre, User, Result } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({

        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('Not logged in');
    },

    updateAlbum: async (parent, { albumId, genre }, context) => {
      return Album.findOneAndUpdate(
        { _id: albumId },
        { genre },
      );
    },

    addResult: async (parent, { user, album, genre }, context) => {
      const result = await Result.create({
        user: user,
        album: album,
        genre: genre
      });
      return { result }
    },



    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
