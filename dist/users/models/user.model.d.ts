import { Model } from 'sequelize-typescript';
import { Order } from '../../order/models/order.model';
import { Stars } from '../../stars/models/star.model';
import { Commentary } from '../../commentary/models/commentary.model';
import { Address } from '../../address/model/address.model';
import { Cart } from '../../cart/model/cart.model';
interface IClientCreationAttr {
    full_name: string;
    phone: string;
    email: string;
    password: string;
    confirm_password: string;
    social_media: string;
    card_number: string;
    hashed_refresh_token: string;
    is_businessman: boolean;
    address_id: number;
    activation_link: string;
    is_active: boolean;
}
export declare class User extends Model<User, IClientCreationAttr> {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    password: string;
    confirm_password: string;
    social_media: string;
    card_number: string;
    hashed_refresh_token: string;
    is_businessman: boolean;
    address_id: number;
    activation_link: string;
    is_active: boolean;
    address: Address;
    orders: Order[];
    commentray: Commentary[];
    star: Stars[];
    cart: Cart[];
}
export {};
