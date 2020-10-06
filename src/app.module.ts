import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { RedisConfigModule } from './config/redis/config.module';
import { MonolithTestModule } from './monolith-test/monolith-test.module';
import { RedisModule } from 'nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [AppConfigModule,
    RedisConfigModule,
    MonolithTestModule,
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('redis'),
      inject: [ConfigService],
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
