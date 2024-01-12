import { useMutation } from "react-query";
import { signup } from ".";
import { SignUpInput } from "..";

export const useSignUp = () => useMutation(
  (variables: {
    query: string,
    userInput: SignUpInput;
  }
  ) => signup(variables.query, variables.userInput));