import { Express } from 'express';
import { createRestaurantsHandler } from '@seed/controller/restaurants.controller';
import { createBarsHandler } from '@seed/controller/bars.handler';

export default function routes(app: Express) {
  app.get('/restaurants', createRestaurantsHandler);
  app.get('/bars', createBarsHandler);
}