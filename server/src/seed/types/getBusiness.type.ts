import type { GraphQLClient } from "graphql-request";
import { searchVars } from "./searchVars";
import { QueryDataResponse } from "./restaurants";

export type getBusiness = (client: GraphQLClient, query: string, restaurantVars: searchVars) => Promise<QueryDataResponse | undefined>;