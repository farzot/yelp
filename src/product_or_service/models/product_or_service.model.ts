import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { OrderDetail } from "../../order_detail/models/order_detail.model";

interface IProductOrServiceCreationAttr {
  name: string;
  price: number;
  is_available_onlineOrders: boolean;
  business_id: number;
}

@Table({ tableName: 'product_or_service' })
export class ProductOrService extends Model<
  ProductOrService,
  IProductOrServiceCreationAttr
> {
  @ApiProperty({ example: 1, description: 'Product_Service ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;
  @ApiProperty({ example: 'Product_Service name', description: 'Product_Service name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @ApiProperty({ example: 1, description: 'Product_Service price' })
  @Column({
    type: DataType.INTEGER,
  })
  price: number;
  @ApiProperty({ example: true, description: 'Product_Service is_available_onlineOrders' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_available_onlineOrders: boolean;
  @ApiProperty({ example: 1, description: 'Business ID' })
  @ForeignKey(()=>Business)
  @Column({
    type: DataType.INTEGER,
  })
  business_id: number;
  @BelongsTo(()=>Business)
  business: Business;

  @HasMany(()=>OrderDetail)
  order_detail: OrderDetail[];
}
