import { gql } from "graphql-request";

export const allBarsQuery = gql`
query allBars($cursorId: Int) {
  allallBars(cursorId: $cursorId) {
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
  }
}
`;