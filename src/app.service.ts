import { Injectable } from '@nestjs/common';
import { IMessage } from './dto/message';
import { DatabaseService } from './database/database.service';
import { getApplicationName } from './utils';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(): Promise<IMessage> {
    return await {
      message: `Welcome to the ${getApplicationName().toLowerCase()}!`,
    };
  }
}
