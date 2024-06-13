import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { DatabaseModule } from 'src/database/database.module';
import { AddressController } from './address.controller';

@Module({
  providers: [AddressService],
  exports: [AddressService],
  imports: [DatabaseModule],
  controllers: [AddressController],
})
export class AddressModule {}
