import { useQuery } from "react-query";
import { fetchBusinessList } from "@entities/business";

export const useFetchAllBusiness = (cursorId: number, query: string, model: string) => useQuery({
  queryKey: ['business', model],
  queryFn: () => fetchBusinessList(cursorId, query, model)
});

/*
Ex:
    const { data: businessData } = useFetchAllBusiness(cursorId, allRestaurantsQuery, 'restaurant');
    const { data: businessData } = useFetchAllBusiness(cursorId, allBarsQuery, 'bar');

*/