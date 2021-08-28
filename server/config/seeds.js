const db = require('./connection');
const { Album } = require('../models');

db.once('open', async () => {

    await Album.deleteMany();

    await Album.insertMany([
        {
            name: 'Purple Rain',
            artist:
                'Prince',
            year: 1985,
            image: 'https://img.discogs.com/rnLL5cHtKUxczkzB_9mwkETyQm8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1254351-1204055836.jpeg.jpg',
            genre: '',
        },
    ]);

    console.log('albums seeded');

    process.exit();
});
