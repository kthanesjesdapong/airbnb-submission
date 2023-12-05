import { gql } from "graphql-request";

export const categoryQuery = gql`
query search(
  $term: String!,
  $location: String!,
  $categories: String!,
  $limit: Int!,
  $offset: Int!
) {
  search (
    term: $term,
    location: $location,
    $categories: $categories,
    limit: $limit,
    offset: $offset    
  ) {
    total
    business {
    }
  }
}
`;