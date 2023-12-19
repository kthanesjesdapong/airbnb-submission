import { gql } from "graphql-request";

export const allBarsQuery = gql`
query allBars($cursorId: Int) {
  allBars(cursorId: $cursorId) {
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
              day
            }
          }
        }
        location {
          edges {
            node {
              locationAddress
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