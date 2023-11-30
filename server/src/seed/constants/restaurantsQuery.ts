import { gql } from 'graphql-request';

export const restraurantsQuery = gql`
query search($term: String!, $location: String!, $categories: String!) {
  search(
    term:$term,
    location:$location,
    categories: $categories
  ) {
    total
    business {
      name
      rating
      review_count
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
        is_open_now
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
        parent_categories {
          title
          alias
        }
        alias
      }
    }
  }  
}
`;