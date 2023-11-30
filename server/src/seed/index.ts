import 'dotenv';
import express from 'express';
import routes from './routes';
import config from 'config';
import { prisma, logger } from '@config';
const app = express();

const seed_port = config.get<number>('seed_port');


//start server,

const seedServer = async () => {

  app.listen(seed_port, async (): Promise<void> => {
    logger.info('LINE 16');
    routes(app);
    // const newRestaurant = await prisma.restaurant.create({
    //   data: {
    //     name: 'Makers & Finders',
    //     rating: 4,
    //     photos: [
    //       "https://s3-media4.fl.yelpcdn.com/bphoto/OXH3YZsT6qc707NOg39zAw/o.jpg"
    //     ],
    //     coordinates: {
    //       latitude: 36.1579472959742,
    //       longitude: -115.153866894525
    //     },
    //   }
    // });
  });
  // const restaurants = await prisma.restaurant.findMany();
  // console.log(restaurants);

};

/*
Write Unit test sfor seeding and e2e tests
*/

seedServer();