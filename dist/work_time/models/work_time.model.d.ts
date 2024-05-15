import { Model } from 'sequelize-typescript';
import { Business } from '../../business/models/business.model';
interface IWorkTimeCreationAttr {
    Day: string;
    open_hour: string;
    close_hour: string;
    business_id: number;
}
export declare class WorkTime extends Model<WorkTime, IWorkTimeCreationAttr> {
    id: number;
    Day: string;
    open_hour: string;
    close_hour: string;
    business_id: number;
    business: Business;
}
export {};
