import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {
  // @IsNotEmpty()
  total_price: number;
  @IsNumber()
  @IsNotEmpty()
  client_id: number;
  @IsNumber()
  @IsNotEmpty()
  business_id: number;
}
