import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { OrderDetail } from "../../order_detail/models/order_detail.model";
import { User } from "../../users/models/user.model";

interface IOrderCreationAttr{
    total_price: number
    client_id: number;
    business_id: number;
}

@Table({ tableName: 'Order' })
export class Order extends Model<Order, IOrderCreationAttr> {
  @ApiProperty({ example: 1, description: 'Order ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Total price' })
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  total_price: number;

  @ApiProperty({ example: 1, description: 'Client ID' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  client_id: number;

  @BelongsTo(() => User)
  client: User;

  @ApiProperty({ example: 1, description: 'Business ID' })
  @ForeignKey(() => Business)
  @Column({
    type: DataType.INTEGER,
  })
  business_id: number;

  @BelongsTo(() => Business)
  business: Business;

  @HasMany(() => OrderDetail)
  orderDetail: OrderDetail[];
}
