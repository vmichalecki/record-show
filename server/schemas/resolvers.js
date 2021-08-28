// BAD
// models> index, models> profile
// schemas> resolvers, schemas> typeDefs will all have to be changed


const { Album } = require('../models');

const resolvers = {
  Query: {
    albums: async () => {
      return Album.find();
    },
  },

  // Mutation: {
  //   addProfile: async (parent, { name }) => {
  //     return Profile.create({ name });
  //   },
  //   addSkill: async (parent, { profileId, skill }) => {
  //     return Profile.findOneAndUpdate(
  //       { _id: profileId },
  //       {
  //         $addToSet: { skills: skill },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
  //   removeProfile: async (parent, { profileId }) => {
  //     return Profile.findOneAndDelete({ _id: profileId });
  //   },
  //   removeSkill: async (parent, { profileId, skill }) => {
  //     return Profile.findOneAndUpdate(
  //       { _id: profileId },
  //       { $pull: { skills: skill } },
  //       { new: true }
  //     );
  //   },
  // },
};

module.exports = resolvers;
