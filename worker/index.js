const keys = require("./keys");

const redis = require("redis");

const fib = index => {
  if (index < 0) return 0;
  else if (index === 0) return 1;
  else if (index === 1) return 1;
  return fib(index - 1) + fib(index - 2);
};

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const redisSubscriber = redisClient.duplicate();

redisSubscriber.on("message", (channel, message) => {
  redisClient.hset("values", message, fib(parseInt(message)));
});

redisSubscriber.subscribe("insert");
