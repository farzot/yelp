import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IOwnerCreationAttr {
  experience: number;
  depend_businesses: string;
  total_commercial: number;
  social_media: string;
  is_active: boolean;
}

@Table({ tableName: 'Owner' })
export class Owner extends Model<Owner, IOwnerCreationAttr> {
  @ApiProperty({ example: 1, description: 'Owner ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'Owner experience ',
  })
  @Column({
    type: DataType.INTEGER,
  })
  experience: number;

  @ApiProperty({
    example: 'Ali Asia ',
    description: 'Depend business on the owner',
  })
  @Column({
    type: DataType.STRING,
  })
  depend_businesses: string;

  @ApiProperty({
    example: 10000,
    description: 'Total commercial',
  })
  @Column({
    type: DataType.INTEGER,
  })
  total_commercial: number;

  @ApiProperty({
    example: '@example',
    description: 'Social media',
  })
  @Column({
    type: DataType.STRING,
  })
  social_media: string;

  @ApiProperty({
    example: true,
    description: 'Is active',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
}
