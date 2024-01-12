import { gql } from "graphql-request";

export const createUserMutation = gql`
  mutation Mutation($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
      ... on BaseError {
        message
      }
      ... on MutationCreateUserSuccess {
        data {
          id
          role
          email
          createdAt
        }
      }
    }
  }
`;
