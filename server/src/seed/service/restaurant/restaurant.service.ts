import { QueryDataResponse } from '@seed/types/restaurants';
import { getBusiness } from '@seed/types/getBusiness.type';


export const getRestaurants: getBusiness = async (client, query, restaurantsVars) => {
  try {
    const restaurantsResponse: QueryDataResponse = await client.request(query, restaurantsVars);
    if (restaurantsResponse !== undefined) {
      return restaurantsResponse;
    }
  } catch (e: unknown) {
    console.error(e);
  }
};