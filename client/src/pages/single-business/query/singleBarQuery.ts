import { gql } from 'graphql-request';

export const singleBarQuery = gql`
query GetBar($barId: Int!) {
  getBar(bar_id: $barId) {
    ... on BaseError {
      message
    }
    ... on QueryGetBarSuccess {
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

