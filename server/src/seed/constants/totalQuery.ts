import { gql } from 'graphql-request';

export const totalQuery = gql`
query search($term: String!, $location: String!, $categories: String!, $limit: Int!, $offset: Int!) {
  search(
    term:$term,
    location:$location,
    categories: $categories,
    limit: $limit,
    offet: $offset
  ) {
    total
  }  
}
`;