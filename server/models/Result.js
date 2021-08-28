// user ID, album ID, genre ID

// routes
// /home
// / genrename
// / signup + login
// / vote


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