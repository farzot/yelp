import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Order]),JwtModule],
  controllers: [OrderController],
  providers: [OrderService,JwtService],
})
export class OrderModule {}
