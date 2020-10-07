import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST,
  name: process.env.REDIS_NAME,
  port: parseInt(process.env.REDIS_PORT),
}));
