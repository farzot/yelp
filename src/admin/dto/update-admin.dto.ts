import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';


export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  tg_link: string;
  @IsString()
  @IsOptional()
  admin_photo: string;
  @IsString()
  @IsOptional()
  hashed_password: string;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
  @IsOptional()
  @IsBoolean()
  is_creator: boolean;
  @IsString()
  @IsOptional()
  hashed_refresh_token: string;
}
