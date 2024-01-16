import { gql } from 'graphql-request';

export const singleBarQuery = gql`
query getBar($barId: Int!) {
  getBar(bar_id: $barId) {
    ... onBaseError {
      message
    }
    ... QueryGetBarSuccess {
      data {
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
  }
}
`

