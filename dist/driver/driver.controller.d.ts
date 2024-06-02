import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './model/driver.model';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    findAllDriver(): Promise<Driver[]>;
    findDriverByID(id: string): Promise<Driver>;
    findDriverByFName(firstName: string): Promise<Driver>;
    findDriverByPassport(pasport_seriya: string): Promise<Driver>;
    update(id: string, updateDriverDto: UpdateDriverDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
