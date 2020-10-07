import { Test, TestingModule } from '@nestjs/testing';
import { MonolithTestController } from './monolith-test.controller';
import { MonolithTestService } from '../services/monolith-test.service';
import { RedisConfigService } from '../../config/redis/config.service';
import { ConfigService } from '@nestjs/config';
import { RedisService } from 'nestjs-redis';
import * as Redis from 'ioredis';



describe('MonolithTestController', () => {

  const redisService = {
    getClient() {
      return Redis
    }
  }
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MonolithTestController],
      providers: [MonolithTestService,
        ConfigService,
        {provide: RedisService, useValue: redisService},
        RedisConfigService],
    }).compile();
  });

  describe('Get the messages', () => {
    it('should return "{"first":"test"}"', () => {

      const monolithTestController = app.get<MonolithTestController>(MonolithTestController);
      expect(monolithTestController).toBeTruthy();
    });
  });

  describe('Post the messages', () => {
    it('should return {"Result": "Data added to Redis"}', () => {
      const monolithTestController = app.get<MonolithTestController>(MonolithTestController);
      expect(monolithTestController).toBeTruthy();
    });
  });
});
