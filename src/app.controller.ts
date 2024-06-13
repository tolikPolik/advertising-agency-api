import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IMessage } from './dto/message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get(): Promise<IMessage> {
    return await this.appService.get();
  }
}
