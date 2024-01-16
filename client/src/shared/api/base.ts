import axios, { AxiosInstance, AxiosResponse } from "axios";
import type { OptionsConfig, UserActionResponseData, UserActionResponse } from './index';

export const API_URL = 'http://localhost:8009/graphql';

class ApiInstance {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      headers: {

      },
    });
  }

  //Promise<T | undefined>
  async post<T>(endpoint: string, options: OptionsConfig): Promise<T | UserActionResponse<T>> {
    try {
      const response: AxiosResponse<UserActionResponseData<T>> = await this.axios.post(
        endpoint,
        options
      );
      if (response && response.data.errors) {
        const errorMessage = response.data.errors[0].message;
        throw new Error(errorMessage);
      }
      else {
        return response.data;
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e);
        throw new Error((e as Error).message);
      }
    }
  }
}

export const apiInstance = new ApiInstance();