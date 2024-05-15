import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Owner } from './models/owner.model';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Owner]),JwtModule],
  controllers: [OwnerController],
  providers: [OwnerService,JwtService],
})
export class OwnerModule {}
