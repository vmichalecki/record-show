import { gql } from "@apollo/client";

export const QUERY_ALBUMS = gql`
  query allAlbums {
    albums {
      _id
      name
      artist
      genre {
          name
      }
    },
  }`;

export const QUERY_IDS = gql`
query allAlbumIds {
    albums {
        _id
    }
}`;

export const QUERY_RESULTS = gql`
query albumResults {
    albums {
        _id
        name
    }
}`;



