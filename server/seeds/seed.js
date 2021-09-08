const db = require('../config/connection');
const { Album, Genre } = require("../models");

db.once('open', async () => {
    await Album.deleteMany({});
    await Genre.deleteMany();
    const genres = await Genre.insertMany([
        { name: "Pop Art" },
        { name: "Contemporary" },
        { name: "Surrealism" },
        { name: "Abstract" },
    ])

    const albums = await Album.insertMany([
      {
        name: "American Idiot",
        artist: "Green Day",
        year: "2004",
        image:
          "https://ia800703.us.archive.org/23/items/Scan993/Scan%20%20%20981.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Channel ORANGE",
        artist: "Frank Ocean",
        year: "2012",
        image: "https://archive.org/services/img/FrankOceanchannelORANGE",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Californiacation",
        artist: "Red Hot Chilli Peppers",
        year: "1999",
        image:
          "https://ia600908.us.archive.org/23/items/Scan10_201901/Scan%201.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Use Your Illusion I",
        artist: "Guns N' Roses",
        year: "1991",
        image:
          "https://ia803004.us.archive.org/20/items/Scan12_20190424/Scan%2000.jpeg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Mellon Collie & The Infinite Sadness",
        artist: "The Smashing Pumpkins",
        year: "1995",
        image: "https://archive.org/download/Scan46/Scan%2000.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Echoes: The Best of Pink Floyd",
        artist: "Pink Floyd",
        year: "2001",
        image: "https://archive.org/download/Scan13/Scan%200.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "X&Y",
        artist: "Coldplay",
        year: "2005",
        image: "https://archive.org/download/Scan09_201905/Scan%2000.jpeg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "AM",
        artist: "Artic Monkeys",
        year: "2013",
        image: "https://archive.org/download/ArcticMonkeysAM_201909/AM.png",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Queen II",
        artist: "Queen",
        year: "1974",
        image:
          "https://archive.org/download/QueenQueenII/queenfreddiemercurye_queenii_9ky3.png",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Currents",
        artist: "Tame Impala",
        year: "2015",
        image:
          "https://archive.org/download/TameImpalaCurrents/%21Currents.png",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Simple Things",
        artist: "Zero 7",
        year: "2001",
        image: "https://archive.org/download/Scan03_201902/Scan%2000.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "iridesence",
        artist: "BROCKHAMPTON",
        year: "2018",
        image:
          "https://archive.org/download/BROCKHAMPTONiridescence/iridescence.png",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "A Night At the Opera",
        artist: "Queen",
        year: "1975",
        image:
          "https://archive.org/download/QueenANightattheOpera_201810/queenfreddiemercurye_anightattheopera_512w.png",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Hozier",
        artist: "Hozier",
        year: "2014",
        image: "https://archive.org/download/HozierHozier/Hozier.png",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Graduation",
        artist: "Kanye West",
        year: "2007",
        image:
          "https://archive.org/download/rap-album-design-graduation-kanye-west-2007-1/RapAlbumDesign_Graduation_KanyeWest_2007_%28%231%29.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "My Beautiful Dark Twisted Fantasy",
        artist: "Kanye West",
        year: "2010",
        image:
          "https://archive.org/download/rap-album-design-my-beautiful-dark-twisted-fantasy-kanye-west-2010-2/RapAlbumDesign_MyBeautifulDarkTwistedFantasy_KanyeWest_2010_%28%232%29.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Jeffery",
        artist: "Young Thug",
        year: "2016",
        image:
          "https://static.billboard.com/files/media/Young-Thug-Jeffery-2016-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Whitney Houston",
        artist: "Whitney Houston",
        year: "1985",
        image:
          "https://static.billboard.com/files/media/Whitney-Houston-Whitney-Houston-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Rumours",
        artist: "Fleetwood Mac",
        year: "1977",
        image:
          "https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "The Pinkprint",
        artist: "Nicki Minaj",
        year: "2014",
        image:
          "https://static.billboard.com/files/media/Nicki-Minaj-The-Pinkprint-greatest-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Sweetener",
        artist: "Ariana Grande",
        year: "2018",
        image:
          "https://static.billboard.com/files/media/ariana-grande-sweetner-album-art-2018-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "True Blues",
        artist: "Madonna",
        year: "1986",
        image:
          "https://static.billboard.com/files/media/Madonna-True-Blue-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Master of Puppets",
        artist: "Metallica",
        year: "1986",
        image:
          "https://static.billboard.com/files/media/Metallica-Master-of-Puppets-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "LP1",
        artist: "FKA Twigs",
        year: "2014",
        image:
          "https://static.billboard.com/files/media/FKA-Twigs-LP1-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "I Never Loved a Man the Way I Loved You",
        artist: "Aretha Franklin",
        year: "1967",
        image:
          "https://static.billboard.com/files/media/Aretha-Franklin-I-Never-Loved-a-Man-the-Way-I-Loved-You-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Island Life",
        artist: "Grace Jones",
        year: "1985",
        image:
          "https://static.billboard.com/files/media/Grace-Jones-Island-Life-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Aladdin Sane",
        artist: "David Bowie",
        year: "1973",
        image:
          "https://static.billboard.com/files/media/David-Bowie-Aladdin-Sane-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "The Downward Spiral",
        artist: "Nine Inch Nails",
        year: "1994",
        image:
          "https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/thedownwardspiralalbumart_0.jpg?itok=UMjvWXhQ&timestamp=1551891148",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "If You're Reading This it's Too Late",
        artist: "Drake",
        year: "2015",
        image:
          "https://static.billboard.com/files/media/If-youre-reading-this-its-too-late-drake-no1-albums-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Unknown Pleasures",
        artist: "Joy Division",
        year: "1979",
        image:
          "https://static.billboard.com/files/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Things Fall Apart",
        artist: "The Roots",
        year: "1999",
        image:
          "https://static.billboard.com/files/media/The-Roots-Things-Fall-Apart-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Abraxas",
        artist: "Santana",
        year: "1970",
        image:
          "https://static.billboard.com/files/media/Santana-Abraxas-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Enema of the State",
        artist: "Blink-182",
        year: "1999",
        image:
          "https://static.billboard.com/files/media/Blink-182-Enema-of-the-State-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "To Pimp a Butterfly",
        artist: "Kendrick Lamar ",
        year: "2015",
        image:
          "https://static.billboard.com/files/media/To-pimp-a-butterfly-kendrick-lamar-no1-albums-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        artist: "The Beatles",
        year: "1967",
        image:
          "https://static.billboard.com/files/media/The-Beatles-Sgt-Peppers-lonely-hearts-club-band-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: "1973",
        image:
          "https://static.billboard.com/files/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Abbey Road",
        artist: "The Beatles",
        year: "1969",
        image:
          "https://static.billboard.com/files/media/The-Beatles-Abbey-Road-album-covers-billboard-1000x1000-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Heaven or Las Vegas",
        artist: "Cocteau Twins",
        year: "1990",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Cocteau-Twins-Cocteau-Twins-1024x1024.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "In the Court of the Crimson King",
        artist: "King Crimson",
        year: "1969",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2015/10/King-Crimson-In-the-Court-of-the-Crimson-King-1024x1024.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Draw the Line",
        artist: "Aerosmith",
        year: "1977",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Aerosmith-Draw-The-Line-1024x1024.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Fearless",
        artist: "Family",
        year: "1971",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Family-Fearless-Album-1024x1024.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Time Out",
        artist: "Dave Brubeck",
        year: "1959",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Dave-Brubeck-Time-Out--1024x1024.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Adore",
        artist: "The Smashing Pumpkins",
        year: "1998",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2020/09/Smashing-Pumpkins-Adore-cover-1024x1024.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Exile on Main St.",
        artist: "The Rolling Stones ",
        year: "1972",
        image: "https://upload.wikimedia.org/wikipedia/en/c/ca/ExileMainSt.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Flume",
        artist: "Flume",
        year: "2013",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Hi this is Flume (Mixtape)",
        artist: "Flume",
        year: "2019",
        image:
          "https://media.pitchfork.com/photos/5c94f50cfa864d78eca91218/1:1/w_600/Flume_HiThisIsFlume.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Skin",
        artist: "Flume",
        year: "2016",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/35/Flume_-_Skin.png",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Energy",
        artist: "Disclosure",
        year: "2020",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/2f/Disclosure_Energy_Cover.png",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Discovery",
        artist: "Daft Punk",
        year: "2001",
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Case Study 01",
        artist: "Daniel Caesar ",
        year: "2019",
        image:
          "https://images.genius.com/186e7c3b8838ed2ff06014efe1fb7d32.1000x1000x1.png",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Certified Lover Boy",
        artist: "Drake",
        year: "2021",
        image:
          "https://variety.com/wp-content/uploads/2021/09/Drake-CLB-album-cover.jpg?w=681&h=383&crop=1",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Donda",
        artist: "Kanye West",
        year: "2021",
        image:
          "https://variety.com/wp-content/uploads/2021/08/Album-Cover-Treatment-copy-4.jpg?w=681&h=383&crop=1",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Astroworld",
        artist: "Travis Scott",
        year: "2018",
        image:
          "https://images.genius.com/4640c40bd4cec077ba11e54347624ac7.1000x563x1.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "The Dude",
        artist: "Quincy Jones",
        year: "1981",
        image:
          "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Quincy-Jones-The-Dude-1024x1024.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "The Velvet Underground & Nico",
        artist: "The Velvet Underground",
        year: "1967",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1236,w_1256,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/7/8/78903b24250836584cd88dfe4bf1bc0b2d5fe3b8/02VelvetU.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "The White Album",
        artist: "The Beatles",
        year: "1968",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_910,w_914,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/f/0/f042219aeb97ce3f773fd6cf91acee2aa922436a/03WhiteAlbum.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Captain Beefheart and His Magic Band",
        artist: "Trout Mask Replica",
        year: "1969",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_2000,w_1991,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/7/5/75700e66ad4faa962e3b3d9d9551aeb49974bea9/06CaptainBeef.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Circles",
        artist: "Mac Miller",
        year: "2020",
        image:
          "https://upload.wikimedia.org/wikipedia/en/1/15/Mac_Miller_-_Circles.png",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Aja",
        artist: "Steely Dan",
        year: "1977",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1500,w_1500,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/c/8/c8071f343effb25d8dc54267495db29ae94f8da1/13SteelyDan.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Pepas",
        artist: "Farruko",
        year: "2021",
        image: "https://m.media-amazon.com/images/I/81+rccisSCS._SS500_.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "x100pre",
        artist: "Bad Bunny",
        year: "2018",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/X100pre.jpg/220px-X100pre.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Losing It",
        artist: "Fisher",
        year: "2018",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4a/Fisher_-_Losing_It.png",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Loveless",
        artist: "My Bloody Valentine",
        year: "1991",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1425,w_1425,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/1/f/1ffd1e8d9e270adc2d93507f77e452ae1be3c8ce/21MBV.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "The Low-End Theory",
        artist: "A Tribe Called Quest",
        year: "1991",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1000,w_1000,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/b/7/b719a21e6157baff2c01e4cc0cdce01af1dfc03d/23Tribe.png",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Odelay",
        artist: "Beck",
        year: "1996",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1400,w_1400,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/c/9/c9a1208ecea3061fbc58cef6776f183c0433ced6/29Beck.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "In the Aeroplane Over the Sea",
        artist: "Neutral Milk Hotel",
        year: "1998",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1000,w_1000,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/3/7/3779f62c0786d0cc415d234203d252e7fb9d3932/30NMH.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Ágætis Byrjun",
        artist: "Sigor Ros",
        year: "1999",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1400,w_1400,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/2/8/286e864ae77be5e3e52ddb92930038fd13a6c164/33SigurRos.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "The Carter III",
        artist: "Lil Wayne",
        year: "2008",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1000,w_1000,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/e/a/ea2044f7b6fbc86601ddbd81d1c7c28a77cd5f4d/37ThaCarter.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Lemonade",
        artist: "Beyonce",
        year: "2016",
        image:
          "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_944,w_938,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/a/e/ae3db535fbfcdc09776655256c119054eb5e6a54/40Beyonce.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Anti",
        artist: "Rihanna",
        year: "2016",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Love Tonight",
        artist: "Shouse",
        year: "2019",
        image:
          "https://img.discogs.com/aiRv3e1QMkubA558K3oGwFZ6AT0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-16934007-1610682166-1134.jpeg.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Call Me if You Get Lost",
        artist: "Tyler the Creator",
        year: "2021",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/d3/Call_Me_If_You_Get_Lost_album_cover.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Good Kid, mAAd City",
        artist: "Kendrick Lamar ",
        year: "2012",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71JUdflozEL._SL1200_.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Death of a Bachelor",
        artist: "Panic! at the Disco",
        year: "2016",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81hKk1Evy%2BL._SL1422_.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Accordiana",
        artist: "Charles Magnate",
        year: "1957",
        image:
          "http://s3.gomedia.us/wp-content/uploads/2012/05/accordiana001-528x540.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "California Uber Alles",
        artist: "Dead Kennedys",
        year: "1979",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/0e/Dead_Kennedys_-_California_%C3%9Cber_Alles_cover.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Circuses and Bread",
        artist: "The Durutti Column",
        year: "1986",
        image:
          "https://img.discogs.com/nZM59g3SCfx56gy7wrlE1Z7s_t4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12643-1200270165.jpeg.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Upstairs at Erick's",
        artist: "Yazoo",
        year: "1982",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Yazoo-Upstairs-At-Erics.jpg/220px-Yazoo-Upstairs-At-Erics.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "OK Computer",
        artist: "Radiohead",
        year: "1997",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/715LZJ5qX0L._SL1200_.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "When We All Fall Asleep, Where do we Go?",
        artist: "Billie Eillish",
        year: "2019",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Flower Boy",
        artist: "Tyler the Creator",
        year: "2017",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_00078d96-bb57-462d-addb-05fd7121ee41?wid=488&hei=488&fmt=pjpeg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Revolver",
        artist: "The Beatles",
        year: "1966",
        image:
          "https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Bold as Love",
        artist: "Jimi Hendrix",
        year: "1967",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81f20JroW9L._SL1140_.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Man on the Moon: End of Day",
        artist: "Kid Cudi",
        year: "2009",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/26/ManonTheMoonTheEndofDay.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Disraeli Gears",
        artist: "Cream",
        year: "1967",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81CsuUP7RkL._SL1400_.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Merriweather Post Pavillon",
        artist: "Animal Collective",
        year: "2009",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5a/Animal_Collective_-_Merriweather_Post_Pavilion.png",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "Odessey and Oracle",
        artist: "The Zombies",
        year: "1968",
        image:
          "https://static.billboard.com/files/media/The-Zombies-Odessey-and-Oracle-Album-2017-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "ATLiens",
        artist: "OutKast",
        year: "1996",
        image:
          "https://static.billboard.com/files/media/Outkast-ATliens-Album-2017-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Aoxomoxoa",
        artist: "The Greatful Dead",
        year: "1969",
        image:
          "https://static.billboard.com/files/media/Grateful-Dead-Aoxomoxoa-Album-2017-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "The Idler Wheel",
        artist: "Fiona Apple",
        year: "2012",
        image:
          "https://static.billboard.com/files/media/fiona-apple-idler-wheel-album-2017-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "The Resistence",
        artist: "Muse",
        year: "2009",
        image:
          "https://static.billboard.com/files/media/Muse-The-Resistance-Album-2017-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
      {
        name: "M3lli55X",
        artist: "FKA Twigs",
        year: "2015",
        image:
          "https://static.billboard.com/files/media/FKA-Twigs-M3LL155X-Album-2017-billboard-1240-compressed.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Sonidos de Karmática Resonancia",
        artist: "Zoe",
        year: "2021",
        image:
          "https://i.scdn.co/image/ab67616d0000b2733e3fc382980680109a199208",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Nobody But You",
        artist: "Jorja Smith",
        year: "2021",
        image:
          "https://images.genius.com/0faddc3ca8184c9bffbb164943f06cbd.1000x1000x1.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "True Colors ",
        artist: "Zedd",
        year: "2015",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c9/Zedd-True-Colors.png",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Superstar",
        artist: "Majid Jordan",
        year: "2019",
        image: "https://i.ytimg.com/vi/TX2Rs2Exo9E/maxresdefault.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Majid Jordan",
        artist: "Majid Jordan",
        year: "2011",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/40/MajidJordanalbum.jpg",
        genre: "6137fd6261ec664eb85930cb",
      },
      {
        name: "Freudian",
        artist: "Daniel Caesar",
        year: "2017",
        image:
          "https://upload.wikimedia.org/wikipedia/en/b/b9/Freudian_by_Daniel_Caesar.jpg",
        genre: "6137fd6261ec664eb85930ca",
      },
      {
        name: "Nothing Was the Same",
        artist: "Drake",
        year: "2013",
        image:
          "https://i.scdn.co/image/ab67616d0000b273a4dfa7122ec07fe3a1af22e7",
        genre: "6137fd6261ec664eb85930cc",
      },
      {
        name: "Walking With Thee",
        artist: "Clinic",
        year: "2002",
        image:
          "https://media.pitchfork.com/photos/5929a5fe9d034d5c69bf3420/1:1/w_320/6989fca4.jpg",
        genre: "6137fd6261ec664eb85930c9",
      },
    ]);

    console.log('Albums seeded!!!');
    process.exit(0);
})