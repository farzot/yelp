import { CreateStarDto } from './dto/create-star.dto';
import { UpdateStarDto } from './dto/update-star.dto';
import { Stars } from './models/star.model';
import { BusinessService } from '../business/business.service';
import { Business } from '../business/models/business.model';
export declare class StarsService {
    private readonly starRepo;
    private readonly businessService;
    private readonly businessRepo;
    constructor(starRepo: typeof Stars, businessService: BusinessService, businessRepo: typeof Business);
    create(createStarDto: CreateStarDto): Promise<any>;
    findAll(): Promise<Stars[]>;
    findOne(id: number): Promise<Stars>;
    update(id: number, updateStarDto: UpdateStarDto): Promise<[affectedCount: number, affectedRows: Stars[]]>;
    remove(id: number): Promise<number>;
}
