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