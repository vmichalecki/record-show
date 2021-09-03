const { Schema, model } = require('mongoose');

const albumSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }
})

const Album = model('Album', albumSchema);

module.exports = Album;