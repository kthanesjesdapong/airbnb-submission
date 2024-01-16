import { SignUpRes, SignUpInput } from "../types";
import { apiInstance, API_URL } from "@shared/api";

type SignUpReturn = { id: number; email: string; userName: string; };

export const signup = async (
  query: string,
  { firstName, userName, lastName, email, password }: SignUpInput
): Promise<SignUpReturn> => {
  try {
    const signUpResponse = await apiInstance.post(API_URL, {
      query: query,
      variables: { email, firstName, lastName, password, userName },
    }) as SignUpRes;

    const { data } = signUpResponse;
    if ('message' in data.createUser) {
      throw new Error(data.createUser.message);
    } else {
      return {
        id: data.createUser.id,
        email: data.createUser.email,
        userName: data.createUser.userName
      };
    }
  } catch (e: unknown) {
    throw new Error((e as Error).message);
  }
};
