import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { User } from "../../users/models/user.model";

interface IStarCreationAttr{
    client_id: number;
    business_id: number;
    star: number;
}

@Table({ tableName: 'Star' })
export class Star extends Model<Star, IStarCreationAttr> {
  @ApiProperty({ example: 1, description: 'Star ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ApiProperty({ example: 2, description: 'Client ID' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  client_id: number;
  @BelongsTo(() => User)
  client: User;

  @ApiProperty({ example: 2, description: 'Business ID' })
  @ForeignKey(() => Business)
  @Column({
    type: DataType.INTEGER,
  })
  business_id: number;
  @BelongsTo(() => Business)
  business: Business;

  @ApiProperty({ example: 3, description: 'Number of stars by 5' })
  @Column({
    type: DataType.INTEGER,
  })
  star: number;
}
