import { Model } from "sequelize-typescript";
import { DriverCar } from "../../driver_car/model/driver_car.model";
import { OrderDriver } from "../../order_driver/model/order_driver.model";
interface IDriverCreationAttr {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    passportID: string;
    card_number: string;
    refresh_token: string;
}
export declare class Driver extends Model<Driver, IDriverCreationAttr> {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    passportID: string;
    card_number: string;
    refresh_token: string;
    driver_car: DriverCar[];
    order_driver: OrderDriver[];
}
export {};
