// import { Prisma, PrismaClient } from '@prisma/client';
import { searchTerm } from '@seed/types/searchTerm.type';
import { gqlClient } from '@seed/utils/gqlClient';
import { gql } from 'graphql-request';
import { QueryDataResponse } from '@seed/types/restaurants';

export const getRestaurants = async (client: typeof gqlClient, query: ReturnType<typeof gql>, restaurantsVars: searchTerm): Promise<QueryDataResponse | undefined> => {
  try {
    const restaurantsResponse: QueryDataResponse = await client.request(query, restaurantsVars);
    if (restaurantsResponse !== undefined) {
      return restaurantsResponse;
    }
  } catch (e: unknown) {
    console.error(e);
  }
};