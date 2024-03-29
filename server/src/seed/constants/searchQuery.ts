import { gql } from 'graphql-request';

export const searchQuery = gql`
query search($term: String!, $location: String!, $categories: String! $limit: Int! $offset: Int!) {
  search(
    term:$term,
    location:$location,
    categories: $categories,
    limit: $limit,
    offset: $offset
  ) {
    total
    business {
      name
      rating
      price
      photos
      coordinates {
        latitude
        longitude
      }
      hours {
        open {
          start
          end
          day
        }
      }
      location {
        address1
        city
        state
        country
      }
      display_phone
      categories {
        title
        alias
      }
    }
  }  
}
`;