import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class RedisConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('redis.name');
  }
  get url(): string {
    return this.configService.get<string>('redis.url');
  }
  get port(): number {
    return Number(this.configService.get<number>('redis.port'));
  }
}
