import { Model } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";
import { ProductOrService } from "../../product_or_service/models/product_or_service.model";
interface IOrderDetailCreationAttr {
    price: number;
    order_id: number;
    payment_type: string;
    status: string;
    product_or_service_id: number;
    quantity: number;
}
export declare class OrderDetail extends Model<OrderDetail, IOrderDetailCreationAttr> {
    id: number;
    order_id: number;
    order: Order[];
    product_or_service_id: number;
    product_or_service: ProductOrService;
    quantity: number;
    price: number;
    payment_type: string;
    status: string;
}
export {};
