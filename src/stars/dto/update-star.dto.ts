import { PartialType } from '@nestjs/swagger';
import { CreateStarDto } from './create-star.dto';

export class UpdateStarDto extends PartialType(CreateStarDto) {
  client_id: number;
  business_id: number;
  star: number;
}
