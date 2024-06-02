import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './models/business.model';
import { ProductOrService } from '../product_or_service/models/product_or_service.model';
import { BusinessImage } from '../business_images/model/business_image.model';
import { CreateBusinessImageDto } from '../business_images/dto/create-business_image.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    createBusiness(createBusinessDto: CreateBusinessDto): Promise<any>;
    findAllBusiness(): Promise<any>;
    findAllBusinessByLocation(location: string): Promise<Business[]>;
    getMostBrend(): Promise<Business[]>;
    findOneBusiness(id: string): Promise<any>;
    updateBusiness(id: string, updateBusinessDto: UpdateBusinessDto): Promise<[affectedCount: number, affectedRows: Business[]]>;
    removeBusiness(id: string): Promise<number>;
    addBusinessImage(createBusinessImageDto: CreateBusinessImageDto): Promise<object>;
    getFullMenu(businessId: number): Promise<ProductOrService[]>;
    increaseLike(id: string): Promise<[affectedCount: number, affectedRows: Business[]]>;
    getAllPhotos(id: string): Promise<BusinessImage[]>;
}
