import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDetailDto {
  // @IsNotEmpty()
  // @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsNumber()
  order_id: number;
  @IsNotEmpty()
  @IsString()
  payment_type: string;
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsNotEmpty()
  @IsNumber()
  product_or_service_id: number;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
