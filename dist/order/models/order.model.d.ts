import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { OrderDetail } from "../../order_detail/models/order_detail.model";
import { User } from "../../users/models/user.model";
interface IOrderCreationAttr {
    total_price: number;
    client_id: number;
    business_id: number;
}
export declare class Order extends Model<Order, IOrderCreationAttr> {
    id: number;
    total_price: number;
    client_id: number;
    client: User;
    business_id: number;
    business: Business;
    orderDetail: OrderDetail[];
}
export {};
