import { Module } from '@nestjs/common';
import { StarsService } from './stars.service';
import { StarsController } from './stars.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Star } from './models/star.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Star])],
  controllers: [StarsController],
  providers: [StarsService,JwtService],
})
export class StarsModule {}
