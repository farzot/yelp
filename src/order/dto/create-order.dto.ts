import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  totalPrice: number;
  shipping_price: number;
  total_price: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  client_id: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  business_id: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
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
