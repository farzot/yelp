import { CreateDriverCarImageDto } from './dto/create-driver_car_image.dto';
import { UpdateDriverCarImageDto } from './dto/update-driver_car_image.dto';
import { DriverCarImagesService } from './driver_car_image.service';
export declare class DriverCarImagesController {
    private readonly driverCarImagesService;
    constructor(driverCarImagesService: DriverCarImagesService);
    createCarImage(createDriverCarImageDto: CreateDriverCarImageDto): Promise<any>;
    findAllCarImage(): Promise<any>;
    findCarImageByID(id: string): Promise<any>;
    updateCarImage(id: string, updateDriverCarImageDto: UpdateDriverCarImageDto): Promise<[affectedCount: number]>;
    removeCarImage(id: string): Promise<number>;
}
