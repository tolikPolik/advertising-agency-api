import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AddressModule } from 'src/address/address.module';
import { ShiftsModule } from 'src/shifts/shifts.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsModule],
  imports: [DatabaseModule, AddressModule, ShiftsModule],
})
export class PostsModule {}
