import { QueryResult } from './types';
import { apiInstance, API_URL } from '@shared/api';

export const fetchBusinessList = async (cursorId: number, query: string, businessType: string) => {
  try {
    businessType = businessType === 'restaurant' ? 'allRestaurants' : 'allBars';
    const businessDataResponse = await apiInstance.post(API_URL, {
      query: query,
      variables: { cursorId: cursorId }
    }) as QueryResult;
    const formattedBusinessDataResponse = businessDataResponse?.data[businessType].edges.map((businessData) => {
      const { id, name, rating, price, photos, hours, display_phone, category } = businessData.node;
      const businessPrice = price.edges[0].node.priceStr;
      const businessHours = hours.edges.map((hour) => {
        return [hour.node.start, hour.node.end];
      });
      const businessCategories = category.edges.map((category) => {
        return category.node.categoryAlias;
      });

      return {
        id: id,
        name: name,
        rating: rating,
        price: businessPrice,
        photos: photos,
        hours: businessHours,
        display_phone: display_phone,
        category: businessCategories
      };
    });
    return formattedBusinessDataResponse;
  } catch (error: unknown) {
    console.error('Error: ', error);
  }
};