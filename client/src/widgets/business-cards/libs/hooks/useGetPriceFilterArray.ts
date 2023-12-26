import { FormattedBusiness } from "@entities/business";


export const useGetPriceFilteredArray = (business: FormattedBusiness[], pricesFilterArray: string[], ratingFilter: number
) => {

  const rating = ratingFilter;

  let filteredBusiness;

  if (!pricesFilterArray.length) {
    filteredBusiness = business.filter((b) => b.rating >= rating);
  }

  else if (!ratingFilter) {
    filteredBusiness = business.filter((b) => pricesFilterArray.includes(b.price));
  }

  else {
    filteredBusiness = business.filter((b) => pricesFilterArray.includes(b.price)).filter((b) => b.rating >= rating);
  }

  const filteredBusinessCount = filteredBusiness.length;

  return { filteredBusiness, filteredBusinessCount };

};