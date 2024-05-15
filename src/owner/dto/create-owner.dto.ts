import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOwnerDto {
  @IsNumber()
  @IsNotEmpty()
  experience: number;
  @IsString()
  @IsNotEmpty()
  depend_businesses: string;
  @IsNumber()
  @IsNotEmpty()
  total_commercial: number;
  @IsNotEmpty()
  social_media: string;
  @IsBoolean()
  is_active: boolean;
}
