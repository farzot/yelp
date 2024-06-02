import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  totalPrice?: number;
  shipping_price?: number;
  total_price?: number;
  client_id: number;
  business_id: number;
  cart_id: number;
  payment_type: string;
  status:
    | 'pending'
    | 'processing'
    | 'shipped'
    | 'delivered'
    | 'cancelled'
    | 'refunded';
  comment: string;
}
