import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, PostsModule, ShiftsModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
