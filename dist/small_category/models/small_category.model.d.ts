import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { BigCategory } from "../../big_category/models/big_category.model";
interface ISmallCategoryCreationAttr {
    name: string;
    big_category_id: number;
    description: string;
}
export declare class SmallCategory extends Model<SmallCategory, ISmallCategoryCreationAttr> {
    id: number;
    name: string;
    description: string;
    big_category_id: number;
    big_category: BigCategory;
    business: Business[];
}
export {};
