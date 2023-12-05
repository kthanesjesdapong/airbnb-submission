import { getCategories } from "@seed/service/category/getCategory";
import { GraphQLClient } from "graphql-request";
import { type searchVars } from "@seed/types/searchVars";
import { CategoryBusiness } from "@seed/service/category/createCategory.service";


export const navigateTotalCategories = async <T extends number>(limit: T, resultTotalPages: T, callBack: getCategories, query: string, client: GraphQLClient, queryVariables: searchVars) => {

  const dataArr: CategoryBusiness[] = [];
  queryVariables.limit = limit;
  try {
    for (let i = 0; i < resultTotalPages; i++) {
      const businessData = await callBack(client, query, queryVariables);
      const businessArray = businessData?.search.business;
      businessArray?.forEach(business => {
        dataArr.push(business);
      });
      i === 0 ? queryVariables.offset += limit + 1 : queryVariables.offset += limit;
    }
  } catch (e: unknown) {
    console.error(e);
  }
  return dataArr;
};