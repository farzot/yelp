import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateSmallCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsNumber()
  big_category_id: number;
  @IsString()
  description: string;
}
