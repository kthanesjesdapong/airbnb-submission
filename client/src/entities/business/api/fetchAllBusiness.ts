import { QueryResult, FormattedBusinessResponse } from '@entities/business';
import { apiInstance, API_URL } from '@shared/api';

export const fetchBusinessList = async (
  cursorId: number,
  query: string,
  businessType: string
): Promise<FormattedBusinessResponse | undefined> => {
  try {
    businessType = businessType === 'restaurant' ? 'allRestaurants' : 'allBars';
    const businessDataResponse = (await apiInstance.post(API_URL, {
      query: query,
      variables: { cursorId: cursorId },
    })) as QueryResult;
    const totalCount = businessDataResponse?.data[businessType].totalCount;
    const formattedBusinessDataResponse = businessDataResponse?.data[
      businessType
    ].edges.map((businessData) => {
      const {
        id,
        name,
        rating,
        price,
        photos,
        hours,
        display_phone,
        category,
        location,
      } = businessData.node;
      const businessPrice = price.edges[0].node.priceStr;
      const businessHours = hours.edges.map((hour) => {
        return [hour.node.day, hour.node.start, hour.node.end];
      });
      const businessLocation = location.edges[0].node.locationAddress;
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
        location: businessLocation,
        display_phone: display_phone,
        category: businessCategories,
      };
    });

    return {
      data: { business: formattedBusinessDataResponse, totalCount: totalCount },
    };
  } catch (error: unknown) {
    console.error('Error: ', error);
  }
};
