import 'dotenv/config';

export default {
  yelp_api_key: process.env.YELP_API_KEY,
  yelp_endpoint: process.env.YELP_ENDPOINT,
  port: process.env.PORT,
  seed_port: process.env.SEED_PORT,
  jwt_secret: process.env.JWT_SECRET,
  salt_rounds: process.env.SALT_ROUNDS
};