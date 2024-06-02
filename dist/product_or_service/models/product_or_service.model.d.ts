import { Model } from 'sequelize-typescript';
import { Business } from '../../business/models/business.model';
import { OrderItem } from '../../order_items/model/order_item.model';
import { CartItem } from '../../cart_items/model/cart_item.model';
interface IProductOrServiceCreationAttr {
    name: string;
    price: number;
    is_available_onlineOrders: boolean;
    business_id: number;
    quantity_of_selling: number;
    image: string;
}
export declare class ProductOrService extends Model<ProductOrService, IProductOrServiceCreationAttr> {
    id: number;
    name: string;
    price: number;
    is_available_onlineOrders: boolean;
    business_id: number;
    business: Business;
    quantity_of_selling: number;
    image: string;
    orderItem: OrderItem;
    cartItem: CartItem;
}
export {};
