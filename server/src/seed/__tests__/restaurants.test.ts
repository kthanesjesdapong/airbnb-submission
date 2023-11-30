import supertest from 'supertest';
import routes from '@seed/routes';
import createServer from '@api/utils/server';


const app = createServer();
routes(app);


describe('restaurants route', () => {
  it('returns 404 when provided given an incorrect endpoint', async () => {
    await supertest(app).get('/').expect(404);
  });

  it('returns a 200 when given the correct route', async () => {
    await supertest(app).get('/restaurants').expect(200);
  });
});