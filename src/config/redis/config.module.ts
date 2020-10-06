import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { RedisConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        REDIS_NAME: Joi.string().default('client1'),
        REDIS_HOST: Joi.string().default('127.0.0.1'),
        REDIS_PORT: Joi.number().default(6379),
      }),
    }),
  ],
  providers: [ConfigService, RedisConfigService],
  exports: [ConfigService, RedisConfigService],
})
export class RedisConfigModule {}
