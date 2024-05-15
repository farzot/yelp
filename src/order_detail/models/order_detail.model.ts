import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";
import { ProductOrService } from "../../product_or_service/models/product_or_service.model";

interface IOrderDetailCreationAttr{
    price: number;
    order_id: number;
    payment_type: string;
    status: string;
    product_or_service_id: number;
    quantity: number;
}

@Table({ tableName: 'Order_detail' })
export class OrderDetail extends Model<OrderDetail, IOrderDetailCreationAttr> {

  @ApiProperty({ example: 1, description: 'User ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Order ID' })
  @ForeignKey(()=>Order)
  @Column({
    type: DataType.INTEGER,
  })
  order_id: number;
  @BelongsTo(()=>Order)
  order: Order[]

  @ApiProperty({ example: 1, description: 'Product ID' })
  @ForeignKey(()=>ProductOrService)
  @Column({
    type: DataType.INTEGER,
  })
  product_or_service_id: number;
  @BelongsTo(()=>ProductOrService)
  product_or_service: ProductOrService;

  @ApiProperty({ example: 3, description: 'Quantity' })
  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @ApiProperty({ example: 125, description: 'Price' })
  @Column({
    type: DataType.INTEGER,
    // defaultValue: 0
  })
  price: number;

  @ApiProperty({ example: 'Cash', description: 'Payment type' })
  @Column({
    type: DataType.STRING,
  })
  payment_type: string;
  
  @ApiProperty({ example: 'Online', description: 'Status' })
  @Column({
    type: DataType.STRING,
  })
  status: string;
}
