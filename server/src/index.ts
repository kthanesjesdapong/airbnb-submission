import 'dotenv/config';
import config from 'config';

import { Request } from 'express';
import { json } from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import { logger } from '@config';

import { ApolloServer } from '@apollo/server';
import { app } from '@config/apollo/config';
import { httpServer } from '@config/apollo/config';

import apolloServerConfig from '@config/apollo/config';

import connect from '@config/prisma/connect';

import { Context } from '@types';
import apolloServerContext from '@config/apollo/context';
import { prisma } from '$prisma/client';


const port = config.get<number>('port');




export const server = async () => {

  const apolloServer = new ApolloServer<Context>(apolloServerConfig);
  await apolloServer.start();

  app.use(json());
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }: { req: Request; }) => {
        const authToken = req.headers.authorization || '';
        console.log(req.headers.authorization);
        const role = 'USER';
        return await apolloServerContext(prisma, authToken, role);
      }
    })
  );

  await new Promise<void>(() => httpServer.listen({
    port: port
  }, () => {
    logger.info(`App is running on http://localhost:${port}/graphql`);
  }));
  await connect();
};

server();