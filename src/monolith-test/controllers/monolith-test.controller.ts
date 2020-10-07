import { Body, Controller, Get, Header, HttpException, HttpStatus, Ip, Post } from '@nestjs/common';
import { MonolithTestService } from '../services/monolith-test.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Redis API')
@Controller('/api/resource')
export class MonolithTestController {
  constructor(private monolithService: MonolithTestService) {
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
