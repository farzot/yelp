import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './models/business.model';
import { BusinessImagesService } from '../business_images/business_images.service';
import { Sequelize } from 'sequelize-typescript';
import { ProductOrService } from '../product_or_service/models/product_or_service.model';
import { BusinessImage } from '../business_images/model/business_image.model';
import { CreateBusinessImageDto } from '../business_images/dto/create-business_image.dto';
export declare class BusinessService {
    private readonly businessRepo;
    private readonly businessImageService;
    private readonly sequelize;
    constructor(businessRepo: typeof Business, businessImageService: BusinessImagesService, sequelize: Sequelize);
    create(createBusinessDto: CreateBusinessDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<[affectedCount: number, affectedRows: Business[]]>;
    remove(id: number): Promise<number>;
    getBusinessByName(name: any): Promise<Business>;
    addImageToBusiness(createBusinessImageDto: CreateBusinessImageDto): Promise<object>;
    findByLocation(location: any): Promise<Business[]>;
    fullMenu(businessId: number): Promise<ProductOrService[]>;
    mostBrend(): Promise<Business[]>;
    increaseLike(id: any): Promise<[affectedCount: number, affectedRows: Business[]]>;
    seeAllPhotos(id: any): Promise<BusinessImage[]>;
}
