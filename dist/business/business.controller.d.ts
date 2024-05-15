import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './models/business.model';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    createBusiness(createBusinessDto: CreateBusinessDto): Promise<any>;
    findAllBusiness(): Promise<any>;
    findOneBusiness(id: string): Promise<any>;
    updateBusiness(id: string, updateBusinessDto: UpdateBusinessDto): Promise<[affectedCount: number, affectedRows: Business[]]>;
    removeBusiness(id: string): Promise<number>;
}
