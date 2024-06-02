import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CartModule } from '../cart/cart.module';
import { ProductOrServiceModule } from '../product_or_service/product_or_service.module';
import { OrderItemsModule } from '../order_items/order_items.module';
import { OrderItem } from '../order_items/model/order_item.model';
import { Cart } from '../cart/model/cart.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Order,OrderItem,Cart]),
    JwtModule,
    CartModule,
    OrderItemsModule,
    ProductOrServiceModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, JwtService],
  exports: [OrderService],
})
export class OrderModule {}
