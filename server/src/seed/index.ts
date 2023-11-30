import 'dotenv';
import express from 'express';
import routes from './routes';
import config from 'config';
import { prisma, logger } from '@config';
const app = express();

const seed_port = config.get<number>('seed_port');


const seedServer = async () => {

  app.listen(seed_port, async (): Promise<void> => {
    logger.info('LINE 16');
    routes(app);

  });
};
seedServer();