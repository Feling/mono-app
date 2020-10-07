import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { RedisConfigService } from '../../config/redis/config.service';

@Injectable()
export class MonolithService {
  constructor(private readonly redisService: RedisService, private configService: RedisConfigService) {
  }

  async getMessageByReq(ip: string): Promise<any> {
    try {
      const client = this.redisService.getClient(this.configService.name);
      const result = await client.get(ip);
      if (result === null) {
        return `{"Result": "No data for user."}`;
      }
      await client.del(ip);
      return result;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async postMessage(ip: string, message: string): Promise<any> {
    try {
      const client = this.redisService.getClient(this.configService.name);
      const redisRes = await client.set(ip, message);
      return redisRes === 'OK' ? `{"Result": "Data added to Redis"}` : `{"Result": "Error adding data to Redis."`;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
