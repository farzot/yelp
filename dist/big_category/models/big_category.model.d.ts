import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { SmallCategory } from "../../small_category/models/small_category.model";
interface IBigCategoryCreationAttr {
    name: string;
    description: string;
}
export declare class BigCategory extends Model<BigCategory, IBigCategoryCreationAttr> {
    id: number;
    name: string;
    description: string;
    business: Business[];
    small_category: SmallCategory[];
}
export {};
