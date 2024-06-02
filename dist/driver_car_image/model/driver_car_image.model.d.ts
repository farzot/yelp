import { Model } from "sequelize-typescript";
import { DriverCar } from "../../driver_car/model/driver_car.model";
interface ICarImageCreationAttr {
    image: string;
    car_id: number;
}
export declare class DriverCarImage extends Model<DriverCarImage, ICarImageCreationAttr> {
    id: number;
    image: string;
    car_id: number;
    driver_Car: DriverCar;
}
export {};
