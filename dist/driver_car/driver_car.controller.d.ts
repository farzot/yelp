import { DriverCarsService } from './driver_car.service';
import { CreateDriverCarDto } from './dto/create-driver_car.dto';
import { UpdateDriverCarDto } from './dto/update-driver_car.dto';
export declare class DriverCarsController {
    private readonly driverCarsService;
    constructor(driverCarsService: DriverCarsService);
    createDriverCar(createDriverCarDto: CreateDriverCarDto): Promise<any>;
    findAllDriverCar(): Promise<any>;
    findOneDriverCar(id: string): Promise<any>;
    updateDriverCar(id: string, updateDriverCarDto: UpdateDriverCarDto): Promise<[affectedCount: number]>;
    removeDriverCar(id: string): Promise<number>;
}
