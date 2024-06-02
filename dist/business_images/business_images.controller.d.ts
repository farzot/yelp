import { BusinessImagesService } from './business_images.service';
import { CreateBusinessImageDto } from './dto/create-business_image.dto';
import { UpdateBusinessImageDto } from './dto/update-business_image.dto';
export declare class BusinessImagesController {
    private readonly businessImagesService;
    constructor(businessImagesService: BusinessImagesService);
    create(createBusinessImageDto: CreateBusinessImageDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateBusinessImageDto: UpdateBusinessImageDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
