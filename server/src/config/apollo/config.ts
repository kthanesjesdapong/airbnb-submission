import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';

export const app = express();
export const httpServer = http.createServer(app);

const apolloServerConfig = {
  playground: process.env.NODE_ENV !== 'production',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
};

export default apolloServerConfig;