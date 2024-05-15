import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { User } from "../../users/models/user.model";
interface IStarCreationAttr {
    client_id: number;
    business_id: number;
    star: number;
}
export declare class Star extends Model<Star, IStarCreationAttr> {
    id: number;
    client_id: number;
    client: User;
    business_id: number;
    business: Business;
    star: number;
}
export {};
