import { Model } from "sequelize-typescript";
import { Business } from "../../business/models/business.model";
import { OrderDetail } from "../../order_detail/models/order_detail.model";
interface IProductOrServiceCreationAttr {
    name: string;
    price: number;
    is_available_onlineOrders: boolean;
    business_id: number;
}
export declare class ProductOrService extends Model<ProductOrService, IProductOrServiceCreationAttr> {
    id: number;
    name: string;
    price: number;
    is_available_onlineOrders: boolean;
    business_id: number;
    business: Business;
    order_detail: OrderDetail[];
}
export {};
