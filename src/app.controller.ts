import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiResponse({
    status: 200,
    type: 'string',
  })
  @Get('test')
  testHandler(@Res() res: Response) {
    res.json({
      status: 'SUCCESS'
    })
  }
}
