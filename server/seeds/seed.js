const db = require('../config/connection');
const { Album } = require("../models");

const albumList = require('./albumList.json');

db.once('open', async () => {
    await Album.deleteMany({});

    const albums = await Album.insertMany(albumList);

    console.log('Albums seeded!!!');
    process.exit(0);
})