import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateWorkTimeDto {
  @IsNotEmpty()
  @IsString()
  Day: string;
  open_hour: string;
  close_hour: string;
  @IsNumber()
  @IsNotEmpty()
  business_id: number;
}
