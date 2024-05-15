import { CreateStarDto } from './dto/create-star.dto';
import { UpdateStarDto } from './dto/update-star.dto';
import { Star } from './models/star.model';
export declare class StarsService {
    private readonly starRepo;
    constructor(starRepo: typeof Star);
    create(createStarDto: CreateStarDto): Promise<Star>;
    findAll(): Promise<Star[]>;
    findOne(id: number): Promise<Star>;
    update(id: number, updateStarDto: UpdateStarDto): Promise<[affectedCount: number, affectedRows: Star[]]>;
    remove(id: number): Promise<number>;
}
