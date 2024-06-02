import { Model } from "sequelize-typescript";
import { Driver } from "../../driver/model/driver.model";
import { DriverCarImage } from "../../driver_car_image/model/driver_car_image.model";
interface IDriverCarCreationAttr {
    model: string;
    number: string;
    driver_id: number;
}
export declare class DriverCar extends Model<DriverCar, IDriverCarCreationAttr> {
    id: number;
    driver_id: number;
    driver: Driver;
    model: string;
    number: string;
    driver_car_image: DriverCarImage[];
}
export {};
