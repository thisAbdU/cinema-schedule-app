import gql from 'graphql-tag'

export const GET_MOVIES = gql`
    query GetMovies($page: Int!, $pageSize: Int!) {
      movies(limit: $pageSize, offset: $offset, order_by: {id: asc}) {
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
