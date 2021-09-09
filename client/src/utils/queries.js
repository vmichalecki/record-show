import { gql } from "@apollo/client";

export const QUERY_ALBUMS = gql`
  query allAlbums {
    albums {
      _id
      name
      artist
      year
      image
      genre {
          _id
      }
    },
  }`;

export const QUERY_ALBUM_GENRES = gql`
  query albumGenres($genreId: ID!) {
    albumsByGenre(genreId: $genreId) {
      _id
      name
      artist
      year
      image
      genre {
          _id
          name
      }
    },
  }`;

export const QUERY_ALBUM = gql`
query album($albumId:ID!) {
    album(albumId: $albumId) {
        _id
        name
        artist
      year
      image
    }
}`;

export const QUERY_GENRES = gql`
query allGenres {
    genres {
        _id
        name
    }
}`;


