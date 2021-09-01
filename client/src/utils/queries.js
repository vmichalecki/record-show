import { gql } from "@apollo/client";

export const QUERY_ALBUMS = gql`
  query allAlbums {
    albums {
      _id
      name
      artist
    }
  }
`;


