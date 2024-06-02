import { Model } from 'sequelize-typescript';
import { Order } from '../../order/models/order.model';
import { ProductOrService } from '../../product_or_service/models/product_or_service.model';
interface IOrderItemCreationAttr {
    order_id: number;
    product_id: number;
    quantity: number;
    totalPrice: number;
}
export declare class OrderItem extends Model<Order, IOrderItemCreationAttr> {
    id: number;
    order_id: number;
    order: Order;
    product_id: number;
    product: ProductOrService;
    quantity: number;
    totalPrice: number;
    static calculateTotalPrice(instance: OrderItem): Promise<void>;
    increaseQuantity(amount?: number): Promise<void>;
    decreaseQuantity(amount?: number): Promise<void>;
}
export {};
