import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_ALBUM = gql`
mutation updateAlbum($albumId: ID!, $genre: ID!) {
  updateAlbum(albumId: $albumId, genre: $genre) {
    name
  }
}
`;

export const ADD_RESULT = gql`
mutation addResult($userId: ID!, $albumId: ID!, $genreId: ID!) {
  addResult(user: $userId, album: $albumId, genre: $genreId) {
    _id
  }
}
`;