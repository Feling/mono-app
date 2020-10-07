import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { RedisConfigModule } from './config/redis/config.module';
import { RedisModule } from 'nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MonolithModule } from './monolith/monolith.module';

@Module({
  imports: [AppConfigModule,
    RedisConfigModule,
    MonolithModule,
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('redis'),
      inject: [ConfigService],
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
