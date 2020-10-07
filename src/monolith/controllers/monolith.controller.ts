import { Body, Controller, Get, Header, Ip, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MonolithService } from '../services/monolith.service';

@ApiTags('Redis API')
@Controller('/api/resource')
export class MonolithController {
  constructor(private monolithService: MonolithService) {
  }

  @ApiOperation({ description: 'Use /GET to receive a messages.' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Get()
  @Header('Content-Type', 'application/json;charset=UTF-8')
  getMessage(@Ip() ip: string) {
    return  this.monolithService.getMessageByReq(ip)
  }

  @ApiOperation({ description: 'Use /POST for adding a new message to Redis.'})
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiBody({type: 'string'})
  @Post()
  @Header('Content-Type', 'application/json;charset=UTF-8')
   async postMessage(@Ip() ip: string, @Body() body: JSON): Promise<any> {
      return  this.monolithService.postMessage(ip, JSON.stringify(body))
  }
}
