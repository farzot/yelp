import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsOptional()
  @IsNotEmpty()
  total_price: number;
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  client_id: number;
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  business_id: number;
}
