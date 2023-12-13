import { gql } from 'graphql-request';

export const allRestaurantsQuery = gql`
query allRestaurants($cursorId: Int) {
  allRestaurants(cursorId: $cursorId) {
    edges {
      node {
        id
        name
        rating
        price {
          edges {
            node {
              priceStr
            }
          }
        }
        photos
        hours {
          edges {
            node {
              start
              end
            }
          }
        }
        display_phone
        category {
          edges {
            node {
              categoryAlias
            }
          }
        }
      }
    }
    totalCount
  }
}
`;