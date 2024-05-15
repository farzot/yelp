import { PartialType } from '@nestjs/swagger';
import { CreateOrderDetailDto } from './create-order_detail.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  order_id: number;
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  payment_type: string;
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  product_or_service_id: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
