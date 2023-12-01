import type { GraphQLClient } from "graphql-request";
import { TotalDataResponse } from "@seed/types/restaurants";
import { searchVars } from "@seed/types/searchVars";

export type getTotalMatchType = (client: GraphQLClient, query: string, restaurantVars: searchVars) => Promise<TotalDataResponse | undefined>;

export const getTotalMatch: getTotalMatchType = async (client, query, restaurantVars) => {
  try {
    const totalMatchResponse: TotalDataResponse = await client.request(query, restaurantVars);
    if (totalMatchResponse !== undefined) {
      return totalMatchResponse;
    }
  } catch (e: unknown) {
    console.error(e);
  }
};