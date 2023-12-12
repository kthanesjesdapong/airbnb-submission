import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";


export type variablesOptions = {
  variables: { [index: string]: string | number; };
};

export type OptionsConfig = {
  query: string;
  variables: { [index: string]: string | number; };
} & AxiosRequestConfig & variablesOptions;



export const API_URL = 'http://localhost:8009/graphql';

class ApiInstance {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      headers: {
      },
    });
  }

  async post<T>(endpoint: string, options: OptionsConfig): Promise<T | undefined> {
    try {

      const response: AxiosResponse<T> = await this.axios.post(
        endpoint,
        options
      );
      return response.data;
    } catch (e: unknown) {
      console.error(e);
    }
  }

}

export const apiInstance = new ApiInstance();