// user ID, album ID, genre ID

// routes
// /home
// / genrename
// / signup + login
// / vote

//why do we need this model and do we need to seed it

// to save the user's choices


const { Schema, model } = require('mongoose');

const resultSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    genre: {
        type: String
    },
})

const Result = model('Result', resultSchema);

module.exports = Result;