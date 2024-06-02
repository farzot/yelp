import { Model } from 'sequelize-typescript';
import { Business } from '../../business/models/business.model';
import { User } from '../../users/models/user.model';
import { OrderDriver } from '../../order_driver/model/order_driver.model';
import { OrderItem } from '../../order_items/model/order_item.model';
import { Cart } from '../../cart/model/cart.model';
interface IOrderCreationAttr {
    totalPrice: number;
    shipping_price: number;
    total_price: number;
    client_id: number;
    business_id: number;
    cart_id: number;
    payment_type: string;
    status: string;
    comment: string;
}
export declare class Order extends Model<Order, IOrderCreationAttr> {
    id: number;
    totalPrice: number;
    shipping_price: number;
    total_price: number;
    client_id: number;
    client: User;
    business_id: number;
    business: Business;
    cart_id: number;
    cart: Cart;
    payment_type: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
    comment: string;
    order_driver: OrderDriver;
    orderItems: OrderItem[];
    recalculateTotalPrice(): Promise<void>;
}
export {};
