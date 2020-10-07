import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisConfigModule } from '../config/redis/config.module';
import { MonolithService } from './services/monolith.service';
import { MonolithController } from './controllers/monolith.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    RedisConfigModule
  ],
  controllers: [
    MonolithController
  ],
  providers: [
    MonolithService
  ],
})
export class MonolithModule {}
