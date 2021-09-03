import { gql } from "@apollo/client";

export const QUERY_ALBUMS = gql`
  query allAlbums {
    albums {
      _id
      name
      artist
      genre {
          _id
      }
    },
  }`;

export const QUERY_RESULTS = gql`
query albumResults {
    albums {
        _id
        name
    }
}`;

export const QUERY_GENRES = gql`
query allGenres {
    genres {
        _id
        name
    }
}`;


