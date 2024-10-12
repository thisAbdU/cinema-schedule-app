import gql from 'graphql-tag'

export const GET_MOVIES = gql`
  query GetMovies($limit: Int!, $offset: Int!) {
    movies(limit: $limit, offset: $offset) {
      id
      title
      poster_url
      genre
    }
    movies_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query GetMovieById($id: Int!) {
    movies_by_pk(id: $id) {
      title
      poster_url
      updated_at
      thumbnail_url
      duration
      genre
      description
    }
  }
`