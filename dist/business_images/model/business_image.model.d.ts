import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
interface IBusinessImagesCreationAttr {
    image: string;
    business_id: number;
    is_main_image: boolean;
    is_active: boolean;
    image_comment: string;
}
export declare class BusinessImage extends Model<BusinessImage, IBusinessImagesCreationAttr> {
    id: number;
    image: string;
    business_id: number;
    business: Business;
    is_main_image: boolean;
    is_active: boolean;
    image_comment: string;
}
export {};
