import { Model } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";
import { Driver } from "../../driver/model/driver.model";
interface IOrderDrivertCreationAttr {
    distance: number;
    get_product_time: Date;
    arrived_product_time: Date;
    duration: string;
    driver_id: number;
    order_id: number;
    comment: string;
}
export declare class OrderDriver extends Model<OrderDriver, IOrderDrivertCreationAttr> {
    id: number;
    distance: number;
    get_product_time: Date;
    arrived_product_time: Date;
    duration: string;
    driver_id: number;
    driver: Driver;
    order_id: number;
    order: Order;
    comment: string;
}
export {};
