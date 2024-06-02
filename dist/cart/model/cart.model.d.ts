import { Model } from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { Order } from '../../order/models/order.model';
import { CartItem } from '../../cart_items/model/cart_item.model';
import { Business } from '../../business/models/business.model';
interface ICartCreationAttr {
    client_id: number;
    business_id: number;
    totalPrice: number;
    status: 'active' | 'completed' | 'converted';
}
export declare class Cart extends Model<Cart, ICartCreationAttr> {
    id: number;
    client_id: number;
    client: User;
    business_id: number;
    business: Business;
    status: 'active' | 'completed' | 'converted';
    totalPrice: number;
    cartItems: CartItem[];
    order: Order;
    recalculateTotalPrice(): Promise<void>;
}
export {};
