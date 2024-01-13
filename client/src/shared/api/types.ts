import { AxiosRequestConfig } from "axios";

export type variablesOptions = {
  variables: { [index: string]: string | number; };
};

export type OptionsConfig = {
  query: string;
  variables: { [index: string]: string | number; };
} & AxiosRequestConfig & variablesOptions;


export type UserActionResponseData<T> = {
  errors?: any[]; // Adjust the type of 'errors' based on what you expect
  content: T; // Assuming your actual data is of type T
  // Add other properties if necessary
};

export type UserActionResponse<T> = UserActionResponseData<T> | undefined;


