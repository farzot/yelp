import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderDetail } from './models/order_detail.model';
import { OrderDetailController } from './order_detail.controller';
import { OrderDetailService } from './order_detail.service';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  imports: [SequelizeModule.forFeature([OrderDetail]),JwtModule],
  controllers: [OrderDetailController],
  providers: [OrderDetailService,JwtService],
})
export class OrderDetailModule {}
