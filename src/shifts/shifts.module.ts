import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ShiftsService],
  exports: [ShiftsService],
  imports: [DatabaseModule],
})
export class ShiftsModule {}
