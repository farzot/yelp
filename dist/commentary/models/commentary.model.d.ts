import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { User } from "../../users/models/user.model";
interface ICommentaryCreationAttr {
    comment: string;
    client_id: number;
    business_id: number;
    commentary_likes: number;
}
export declare class Commentary extends Model<Commentary, ICommentaryCreationAttr> {
    id: number;
    comment: string;
    commentary_likes: number;
    client_id: number;
    client: User;
    business_id: number;
    business: Business;
}
export {};
