import { createClient } from 'redis';

  const redisClient = createClient({
    socket: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT)
    },
    password: process.env.REDIS_PASSWORD

  });
  redisClient.on('error', (err: Error) => console.error(err));
  redisClient.connect().then(
    () => console.log(`✅ Redis connected on port ${process.env.REDIS_PORT || 6379}!`)
  );

  export { redisClient };
