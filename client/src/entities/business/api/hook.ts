import { useQuery } from 'react-query';
import { fetchBusinessList, fetchSingleBusiness } from '@entities/business';

export const useFetchAllBusiness = (
  cursorId: number,
  query: string,
  model: string
) =>
  useQuery({
    queryKey: ['business', model],
    queryFn: () => fetchBusinessList(cursorId, query, model),
  });

export const useFetchSingleBusiness = (
  businessId: number,
  query: string,
  model: string
) =>
  useQuery({
    queryKey: ['businessId', model],
    queryFn: () => fetchSingleBusiness(businessId, query, model),
  });

/*
Ex:
    const { data: businessData } = useFetchAllBusiness(cursorId, allRestaurantsQuery, 'restaurant');
    const { data: businessData } = useFetchAllBusiness(cursorId, allBarsQuery, 'bar');

*/
