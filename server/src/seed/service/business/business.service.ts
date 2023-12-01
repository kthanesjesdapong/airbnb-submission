import { QueryDataResponse } from '@seed/types/business';
import type { GraphQLClient } from "graphql-request";
import { searchVars } from '@seed/types/searchVars';

export type getBusiness = (client: GraphQLClient, query: string, restaurantVars: searchVars) => Promise<QueryDataResponse | undefined>;

export const getBusiness: getBusiness = async (client, query, restaurantsVars) => {
  try {
    const restaurantsResponse: QueryDataResponse = await client.request(query, restaurantsVars);
    if (restaurantsResponse !== undefined) {
      return restaurantsResponse;
    }
  } catch (e: unknown) {
    console.error(e);
  }
};