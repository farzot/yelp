import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Business } from './models/business.model';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Business]),JwtModule],
  controllers: [BusinessController],
  providers: [BusinessService,JwtService],
})
export class BusinessModule {}
