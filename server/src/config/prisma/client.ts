import { prisma } from './connect';
import { logger } from '..';



export async function connect(): Promise<void> {
  try {
    await prisma.$connect();
    logger.info(`Connected to DB`);
  } catch (error: unknown) {
    logger.error(`Could not connect to DB`);
    process.exit(1);
  }
}
connect().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});

export default connect;