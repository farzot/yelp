import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBigCategoryDto } from './create-big_category.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBigCategoryDto extends PartialType(CreateBigCategoryDto) {
  @ApiProperty({
    example: 'BigCategory name',
    description: 'BigCategory description',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'BigCategory description',
    description: 'BigCategory description',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;
}
