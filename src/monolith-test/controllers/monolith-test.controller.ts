import { Body, Controller, Get, Header, HttpException, HttpStatus, Ip, Post } from '@nestjs/common';
import { MonolithTestService } from '../services/monolith-test.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('/api/resource')
export class MonolithTestController {
  constructor(private monolithService: MonolithTestService) {
  }

  @ApiOperation({ description: 'Get the messages' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Get()
  @Header('Content-Type', 'application/json;charset=UTF-8')
  getMessage(@Ip() ip: string) {
    return  this.monolithService.getMessageByReq(ip)
  }

  @ApiOperation({ description: 'Post the message' })
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiBody({type: 'string'})
  @Post()
  @Header('Content-Type', 'application/json;charset=UTF-8')
   async postMessage(@Ip() ip: string, @Body() body: JSON): Promise<any> {
      return  this.monolithService.postMessage(ip, JSON.stringify(body))
  }
}
