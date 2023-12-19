import { SingleBusinessQueryResult, FormattedSingleBusinessResponse } from "..";
import { apiInstance, API_URL } from "@shared/api";

export const fetchSingleBusiness = async (businessId: number, query: string, businessType: string): Promise<FormattedSingleBusinessResponse | undefined> => {
  try {
    const queryVariable = businessType === 'r' ? 'restaurantId' : 'barId';
    businessType = businessType === 'r' ? 'getRestaurant' : 'getBar';


    const singleBusinessDataResponse = await apiInstance.post(API_URL, {
      query: query,
      variables: { [queryVariable]: businessId }
    }) as SingleBusinessQueryResult;

    const formattedSingleBusinessResponse = singleBusinessDataResponse?.data;
    const { id, name, rating, price, photos, hours, display_phone, category, location, latitude, longitude } = formattedSingleBusinessResponse[businessType];

    const businessPrice = price.edges[0].node.priceStr;

    const businessHours = hours.edges.map((hour) => {
      return [hour.node.day, hour.node.start, hour.node.end];
    });

    const businessLocation = location.edges[0].node.locationAddress;
    const businessCategories = category.edges.map((category) => {
      return category.node.categoryAlias;
    });

    const formattedResponse = {
      id: id,
      name: name,
      rating: rating,
      price: businessPrice,
      photos: photos,
      hours: businessHours,
      location: businessLocation,
      display_phone: display_phone,
      category: businessCategories,
      latitude: latitude as number,
      longitude: longitude as number
    };


    return { data: formattedResponse };


  } catch (error: unknown) {
    console.error('Error: ', error);
  }
};