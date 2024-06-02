import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './model/driver.model';
export declare class DriverService {
    private readonly driverRepo;
    constructor(driverRepo: typeof Driver);
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    findAllDriver(): Promise<Driver[]>;
    findDriverByID(id: number): Promise<Driver>;
    findDriverByFName(firstName: string): Promise<Driver>;
    findDriverByPassport(pasport_raqam: string): Promise<Driver>;
    update(id: number, updateDriverDto: UpdateDriverDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
