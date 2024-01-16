import { UserProfileRes } from "..";
import { apiInstance, API_URL } from "@shared/api";
import Cookies from "js-cookie";

type UserProfileReturn = { userName: string, firstName: string, lastName: string; };

export const userprofile = async (query: string): Promise<UserProfileReturn> => {
  try {
    const userProfileResponse = await apiInstance.post(API_URL, {
      query: query,
      variables: {},
      headers: {
        Authorization: Cookies.get('token')
      }
    }) as UserProfileRes;

    const { data } = userProfileResponse;
    if ('message' in data.getUserProfile) {
      throw new Error(data.getUserProfile.message);
    } else {
      return {
        userName: data.getUserProfile.data.userName,
        firstName: data.getUserProfile.data.firstName,
        lastName: data.getUserProfile.data.lastName,
      };
    }
  } catch (e: unknown) {
    throw new Error((e as Error).message);
  }
};