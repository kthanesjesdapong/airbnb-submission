import { gql } from 'graphql-request';

export const loginMutation = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ... on BaseError {
        message
      }
      ... on MutationLoginSuccess {
        data {
          token
        }
      }
    }
  }
`;
