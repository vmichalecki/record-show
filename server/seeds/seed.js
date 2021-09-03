const db = require('../config/connection');
const { Album, Genre } = require("../models");

db.once('open', async () => {
    await Album.deleteMany({});
    await Genre.deleteMany();
    const genres = await Genre.insertMany([
        { name: "Pop Art" },
        { name: "Contemporary" },
        { name: "Surrealism" },
        { name: "Abstract" }

    ])

    const albums = await Album.insertMany([
        {
            "name": "American Idiot",
            "artist": "Green Day",
            "year": "2004",
            "image": "https://ia800703.us.archive.org/23/items/Scan993/Scan%20%20%20981.jpg",
            "genre": genres[1]._id
        },
        {
            "name": "Channel ORANGE",
            "artist": "Frank Ocean",
            "year": "2012",
            "image": "https://archive.org/services/img/FrankOceanchannelORANGE",
            "genre": genres[0]._id
        },
        {
            "name": "Californiacation",
            "artist": "Red Hot Chilli Peppers",
            "year": "1999",
            "image": "https://ia600908.us.archive.org/23/items/Scan10_201901/Scan%201.jpg",
            "genre": genres[2]._id
        },
        {
            "name": "Use Your Illusion I",
            "artist": "Guns N' Roses",
            "year": "1991",
            "image": "https://ia803004.us.archive.org/20/items/Scan12_20190424/Scan%2000.jpeg",
            "genre": genres[1]._id
        },
        {
            "name": "Mellon Collie & The Infinite Sadness",
            "artist": "The Smashing Pumpkins",
            "year": "1995",
            "image": "https://archive.org/download/Scan46/Scan%2000.jpg",
            "genre": genres[1]._id
        },
        {
            "name": "Echoes: The Best of Pink Floyd",
            "artist": "Pink Floyd",
            "year": "2001",
            "image": "https://archive.org/download/Scan13/Scan%200.jpg",
            "genre": genres[0]._id
        },
        {
            "name": "X&Y",
            "artist": "Coldplay",
            "year": "2005",
            "image": "https://archive.org/download/Scan09_201905/Scan%2000.jpeg",
            "genre": genres[0]._id
        },
        {
            "name": "X&Y",
            "artist": "Coldplay",
            "year": "2005",
            "image": "https://archive.org/download/Scan09_201905/Scan%2000.jpeg",
            "genre": genres[1]._id
        },
        {
            "name": "AM",
            "artist": "Artic Monkeys",
            "year": "2013",
            "image": "https://archive.org/download/ArcticMonkeysAM_201909/AM.png",
            "genre": genres[2]._id
        },
        {
            "name": "AM",
            "artist": "Artic Monkeys",
            "year": "2013",
            "image": "https://archive.org/download/ArcticMonkeysAM_201909/AM.png",
            "genre": genres[2]._id
        },
        {
            "name": "Queen II",
            "artist": "Queen",
            "year": "1974",
            "image": "https://archive.org/download/QueenQueenII/queenfreddiemercurye_queenii_9ky3.png",
            "genre": genres[0]._id
        },
        {
            "name": "Currents",
            "artist": "Tame Impala",
            "year": "2015",
            "image": "https://archive.org/download/TameImpalaCurrents/%21Currents.png",
            "genre": genres[1]._id
        },
        {
            "name": "Simple Things",
            "artist": "Zero 7",
            "year": "2001",
            "image": "https://archive.org/download/Scan03_201902/Scan%2000.jpg",
            "genre": genres[2]._id
        },
        {
            "name": "iridesence",
            "artist": "BROCKHAMPTON",
            "year": "2018",
            "image": "https://archive.org/download/BROCKHAMPTONiridescence/iridescence.png",
            "genre": genres[1]._id
        },
        {
            "name": "A Night At the Opera",
            "artist": "Queen",
            "year": "1975",
            "image": "https://archive.org/download/QueenANightattheOpera_201810/queenfreddiemercurye_anightattheopera_512w.png",
            "genre": genres[2]._id
        },
        {
            "name": "Hozier",
            "artist": "Hozier",
            "year": "2014",
            "image": "https://archive.org/download/HozierHozier/Hozier.png",
            "genre": genres[0]._id
        },
        {
            "name": "Graduation",
            "artist": "Kanye West",
            "year": "2007",
            "image": "https://archive.org/download/rap-album-design-graduation-kanye-west-2007-1/RapAlbumDesign_Graduation_KanyeWest_2007_%28%231%29.jpg",
            "genre": genres[1]._id
        },
        {
            "name": "My Beautiful Dark Twisted Fantasy",
            "artist": "Kanye West",
            "year": "2010",
            "image": "https://archive.org/download/rap-album-design-my-beautiful-dark-twisted-fantasy-kanye-west-2010-2/RapAlbumDesign_MyBeautifulDarkTwistedFantasy_KanyeWest_2010_%28%232%29.jpg",
            "genre": genres[0]._id
        },
        {
            "name": "Jeffery",
            "artist": "Young Thug",
            "year": "2016",
            "image": "https://static.billboard.com/files/media/Young-Thug-Jeffery-2016-billboard-1240-compressed.jpg",
            "genre": genres[1]._id
        },
        {
            "name": "Whitney Houston",
            "artist": "Whitney Houston",
            "year": "1985",
            "image": "https://static.billboard.com/files/media/Whitney-Houston-Whitney-Houston-album-covers-billboard-1000x1000-compressed.jpg",
            "genre": genres[0]._id
        }
    ]);

    console.log('Albums seeded!!!');
    process.exit(0);
})