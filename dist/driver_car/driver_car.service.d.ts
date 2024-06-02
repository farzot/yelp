import { DriverCar } from './model/driver_car.model';
import { CreateDriverCarDto } from './dto/create-driver_car.dto';
import { UpdateDriverCarDto } from './dto/update-driver_car.dto';
export declare class DriverCarsService {
    private readonly businesImageRepo;
    constructor(businesImageRepo: typeof DriverCar);
    create(createDriverCarDto: CreateDriverCarDto): Promise<DriverCar>;
    findAll(): Promise<DriverCar[]>;
    findOne(id: number): Promise<DriverCar>;
    update(id: number, updateDriverCarDto: UpdateDriverCarDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
