import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductOrServiceDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  price: number;
  @IsBoolean()
  is_available_onlineOrders: boolean;
  @IsNumber()
  business_id: number;
}
