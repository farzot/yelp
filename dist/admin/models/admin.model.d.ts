import { Model } from 'sequelize-typescript';
interface ICreateAdminAttr {
    name: string;
    email: string;
    telegram_link: string;
    admin_photo: string;
    hashed_password: string;
    is_active: boolean;
    is_creater: boolean;
    hashed_refresh_token: string;
}
export declare class Admin extends Model<Admin, ICreateAdminAttr> {
    id: number;
    name: string;
    email: string;
    telegram_link: string;
    admin_photo: string;
    hashed_password: string;
    is_active: boolean;
    is_creater: boolean;
    hashed_refresh_token: string;
}
export {};
