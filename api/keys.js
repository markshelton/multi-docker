module.exports = {
  redisHost: process.env.CACHE_HOST,
  redisPort: process.env.CACHE_PORT,
  pgHost: process.env.DATABASE_HOST,
  pgUser: process.env.DATABASE_USER,
  pgDatabase: process.env.DATABASE_URI,
  pgPassword: process.env.DATABASE_PASSWORD,
  pgPort: process.env.DATABASE_PORT,
  apiPort: process.env.API_PORT
};
