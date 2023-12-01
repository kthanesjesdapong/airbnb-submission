import { getBusiness } from "@seed/types/getBusiness.type";
import { GraphQLClient } from "graphql-request";
import { type searchVars } from "@seed/types/searchVars";
import { Business } from "@seed/types/business";

export const navigateTotalResults = async <T extends number>(limit: T, resultTotalPages: T, callBack: getBusiness, query: string, client: GraphQLClient, queryVariables: searchVars) => {

  const dataArr: Business[] = [];
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