import { gql } from "graphql-request";

const getUserProfileQuery = gql`
query Query {
  getUserProfile {
    ... on BaseError {
      message
    }
    ... on QueryGetUserProfileSuccess {
      data {
        userName
        firstName
        lastName
      }
    }
  }
}
`;