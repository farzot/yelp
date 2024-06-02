import { DriverCarImage } from './model/driver_car_image.model';
import { CreateDriverCarImageDto } from './dto/create-driver_car_image.dto';
import { UpdateDriverCarImageDto } from './dto/update-driver_car_image.dto';
export declare class DriverCarImagesService {
    private readonly businesImageRepo;
    constructor(businesImageRepo: typeof DriverCarImage);
    create(createDriverCarImageDto: CreateDriverCarImageDto): Promise<DriverCarImage>;
    findAll(): Promise<DriverCarImage[]>;
    findOne(id: number): Promise<DriverCarImage>;
    update(id: number, updateDriverCarImageDto: UpdateDriverCarImageDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
