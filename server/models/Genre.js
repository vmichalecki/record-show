const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
    name: {
        type: String
    }
})

const Genre = model('Genre', genreSchema);

module.exports = Genre;