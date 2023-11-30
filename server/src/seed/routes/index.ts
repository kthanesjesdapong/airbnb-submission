import { Express } from 'express';
import { getRestaurantsHandler } from '@seed/controller/restaurants.controller';

export default function routes(app: Express) {
  app.get('/restaurants', getRestaurantsHandler);
}