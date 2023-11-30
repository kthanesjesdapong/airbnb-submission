import supertest from 'supertest';
import express from 'express';
import routes from '@seed/routes';
import { getRestaurantsHandler } from '@seed/controller/restaurants.controller';
import { app } from '@config/app';

describe('get Restaurants', () => {
  it('returns 404 when provided given an incorrect endpoint', async () => {
    await supertest(app).get('/').expect(404);
  });

  it('returns a 200 when given the correct route', async () => {
    await supertest(app).get('/yv1/restaurants').expect(200);
  });
});