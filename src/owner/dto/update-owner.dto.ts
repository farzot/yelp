import { PartialType } from '@nestjs/swagger';
import { CreateOwnerDto } from './create-owner.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  experience: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  depend_businesses: string;
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  total_commercial: number;
  @IsOptional()
  @IsNotEmpty()
  social_media: string;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
