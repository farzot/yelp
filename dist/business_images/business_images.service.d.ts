import { CreateBusinessImageDto } from './dto/create-business_image.dto';
import { UpdateBusinessImageDto } from './dto/update-business_image.dto';
import { BusinessImage } from './model/business_image.model';
export declare class BusinessImagesService {
    private readonly businesImageRepo;
    constructor(businesImageRepo: typeof BusinessImage);
    create(createBusinessImageDto: CreateBusinessImageDto): Promise<BusinessImage>;
    findAll(): Promise<BusinessImage[]>;
    findOne(id: number): Promise<BusinessImage>;
    update(id: number, updateBusinessImageDto: UpdateBusinessImageDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
