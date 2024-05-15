import { Model } from 'sequelize-typescript';
interface IOwnerCreationAttr {
    experience: number;
    depend_businesses: string;
    total_commercial: number;
    social_media: string;
    is_active: boolean;
}
export declare class Owner extends Model<Owner, IOwnerCreationAttr> {
    id: number;
    experience: number;
    depend_businesses: string;
    total_commercial: number;
    social_media: string;
    is_active: boolean;
}
export {};
