import { Model } from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
interface IAdressCreationAttr {
    city: string;
    district: string;
    street: string;
    home_number: string;
}
export declare class Address extends Model<Address, IAdressCreationAttr> {
    id: number;
    city: string;
    district: string;
    street: string;
    home_number: string;
    User: User[];
}
export {};
