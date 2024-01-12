import { SignUpRes, SignUpInput } from "../types";
import { apiInstance, API_URL } from "@shared/api";

type SignUpReturn = { id: number; email: string; };

export const signup = async (
  query: string,
  { firstName, lastName, email, password }: SignUpInput
): Promise<SignUpReturn> => {
  try {
    const signUpResponse = await apiInstance.post(API_URL, {
      query: query,
      variables: { firstName, lastName, email, password },
    }) as SignUpRes;

    const { data } = signUpResponse;

    if ('message' in data.createUser) {
      throw new Error(data.createUser.message);
    } else {
      return {
        id: data.createUser.id,
        email: data.createUser.email,
      };
    }
  } catch (e: unknown) {
    throw new Error((e as Error).message);
  }
};
