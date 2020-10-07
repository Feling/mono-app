import { Test, TestingModule } from '@nestjs/testing';
import { RedisConfigService } from '../../config/redis/config.service';
import { ConfigService } from '@nestjs/config';
import { RedisService } from 'nestjs-redis';
import * as Redis from 'ioredis';
import { MonolithService } from '../services/monolith.service';
import { MonolithController } from './monolith.controller';



describe('MonolithTestController', () => {

  const redisService = {
    getClient() {
      return Redis
    }
  }
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MonolithController],
      providers: [MonolithService,
        ConfigService,
        {provide: RedisService, useValue: redisService},
        RedisConfigService],
    }).compile();
  });

  describe('Get the messages', () => {
    it('should return "{"first":"test"}"', () => {

      const monolithTestController = app.get<MonolithController>(MonolithController);
      expect(monolithTestController).toBeTruthy();
    });
  });

  describe('Post the messages', () => {
    it('should return {"Result": "Data added to Redis"}', () => {
      const monolithTestController = app.get<MonolithController>(MonolithController);
      expect(monolithTestController).toBeTruthy();
    });
  });
});
