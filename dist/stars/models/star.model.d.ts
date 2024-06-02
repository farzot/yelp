import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { User } from "../../users/models/user.model";
interface IStarsCreationAttr {
    client_id: number;
    business_id: number;
    star: number;
}
export declare class Stars extends Model<Stars, IStarsCreationAttr> {
    id: number;
    client_id: number;
    client: User;
    business_id: number;
    business: Business;
    star: number;
}
export {};
