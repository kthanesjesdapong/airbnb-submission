import { useMutation } from "react-query";
import { login } from "./login";
import { LoginInput } from "..";

export const useLogin = () => useMutation(

  (variables: {
    loginMutation: string,
    userInput: LoginInput;
  },
  ) => login(variables.loginMutation, variables.userInput));



