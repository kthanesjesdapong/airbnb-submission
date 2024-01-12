import { SignUpRes, SignUpInput } from "../types";
import { apiInstance, API_URL } from "@shared/api";


type SignUpReturn = { id: number, email: string; };

export const signup = async (query: string, { firstName, lastName, email, password }: SignUpInput): Promise<SignUpReturn | undefined> => {
  try {
    const signUpResponse = await apiInstance.post(API_URL, {
      query: query,
      variables: { firstName, lastName, email, password }
    }) as SignUpRes;
    return {
      id: signUpResponse.data.createUser.id,
      email: signUpResponse.data.createUser.email
    };
  } catch (e: unknown) {
    console.error(e);
  }
};

