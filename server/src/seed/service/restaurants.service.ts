import { Prisma, PrismaClient } from '@prisma/client';
import { searchTerm } from '@seed/types/searchTerm.type';
import { gqlClient } from '@seed/utils/gqlClient';
import { gql } from 'graphql-request';

export const getRestaurants = async (client: typeof gqlClient, query: ReturnType<typeof gql>, restaurantsVars: searchTerm) => {
  try {
    const restaurantsResponse = await client.request(query, restaurantsVars);
    return restaurantsResponse;
  } catch (e: unknown) {
    console.error(e);
  }
};