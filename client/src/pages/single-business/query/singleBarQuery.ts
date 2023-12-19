import { gql } from 'graphql-request';

export const singleRestaurantQuery = gql`
query getRestaurant($restaurantId: Int!) {
  getRestaurant(restaurant_id: $restaurantId) {
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
`;
