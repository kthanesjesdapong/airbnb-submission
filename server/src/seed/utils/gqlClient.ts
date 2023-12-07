import('dotenv/config');
import config from 'config';
import { GraphQLClient } from 'graphql-request';

export const yelpGQLEndpoint = config.get<string>('yelp_endpoint');
const yelp_api_key = config.get<string>('yelp_api_key');

export const gqlClient = new GraphQLClient(yelpGQLEndpoint, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${yelp_api_key}`,
    "Content-Type": "application/graphql"
  }
});