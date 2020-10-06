import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MonolithTestController } from './controllers/monolith-test.controller';
import { MonolithTestService } from './services/monolith-test.service';
import { RedisConfigModule } from '../config/redis/config.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    RedisConfigModule
  ],
  controllers: [
    MonolithTestController
  ],
  providers: [
    MonolithTestService
  ],
})
export class MonolithTestModule {}
