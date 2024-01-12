import { gql } from "graphql-request";

export const createUserMutation = gql`
  mutation CreateUser($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
      id
      role
      email
      createdAt
    }
  }
`;