import 'dotenv';
import config from 'config';
import { logger } from '@config'; //prisma, 
import routes from './routes';
import createServer from '@api/utils/server';
import { errorMiddleware } from './middleware/errorMiddleWare';

const seed_port = config.get<number>('seed_port');
const app = createServer();

const seedServer = async () => {
  app.listen(seed_port, async (): Promise<void> => {
    logger.info(`Listening on PORT:${seed_port}`);
    routes(app);
    app.use(errorMiddleware);
  });
};

seedServer();