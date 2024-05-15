import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './models/business.model';
export declare class BusinessService {
    private readonly businessRepo;
    constructor(businessRepo: typeof Business);
    create(createBusinessDto: CreateBusinessDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<[affectedCount: number, affectedRows: Business[]]>;
    remove(id: number): Promise<number>;
}
