import type { GraphQLClient } from "graphql-request";
import { TotalDataResponse } from "@seed/types/business";
import { searchVars } from "@seed/types/searchVars";
import { prismaErrorHandler } from "@seed/middleware/prismaError";

export type getTotalMatchType = (client: GraphQLClient, query: string, restaurantVars: searchVars) => Promise<TotalDataResponse | undefined>;

export const getTotalMatch: getTotalMatchType = async (client, query, restaurantVars) => {
  try {
    const totalMatchResponse: TotalDataResponse = await client.request(query, restaurantVars);
    if (totalMatchResponse !== undefined) {
      return totalMatchResponse;
    }
  } catch (e: unknown) {
    prismaErrorHandler(e);
  }
};