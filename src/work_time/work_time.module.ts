import { Module } from '@nestjs/common';
import { WorkTimeService } from './work_time.service';
import { WorkTimeController } from './work_time.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkTime } from './models/work_time.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([WorkTime])],
  controllers: [WorkTimeController],
  providers: [WorkTimeService,JwtService],
})
export class WorkTimeModule {}
