import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginAdminDto {
  @IsString()
  name;
    
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}