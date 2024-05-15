import { Model } from 'sequelize-typescript';
import { Order } from '../../order/models/order.model';
import { Star } from '../../stars/models/star.model';
import { Commentary } from '../../commentary/models/commentary.model';
import { Address } from '../../address/model/address.model';
interface IClientCreationAttr {
    full_name: string;
    phone: string;
    email: string;
    password: string;
    confirm_password: string;
    social_media: string;
    card: string;
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
    card: string;
    hashed_refresh_token: string;
    is_businessman: boolean;
    address_id: number;
    activation_link: string;
    is_active: boolean;
    address: Address;
    orders: Order[];
    commentray: Commentary[];
    star: Star[];
}
export {};
