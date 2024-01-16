import { LoginInput, LoginRes, } from '..';
import { apiInstance, API_URL } from '@shared/api';

import Cookies from 'js-cookie';


export type LoginReturn = { token: string; };

//Returns to us the token
export const login = async (mutation: string, { email, password }: LoginInput): Promise<LoginReturn> => {
  try {
    const loginResponse = await apiInstance.post(API_URL, {
      query: mutation,
      variables: { email, password }
    }) as LoginRes;
    const { data } = loginResponse;
    if ('message' in data.login) {
      throw new Error(data.login.message);
    } else {
      Cookies.set('token', data.login.data.token), { expires: 7, secure: true };
      return {
        token: data.login.data.token
      };
    }
  } catch (e: unknown) {
    throw new Error((e as Error).message);
  }
};