import { useMutation } from "react-query";
import { login } from "./login";
import { LoginInput } from "..";

export const useLogin = () => useMutation(
  (variables: {
    query: string,
    userInput: LoginInput;
  }
  ) => login(variables.query, variables.userInput));