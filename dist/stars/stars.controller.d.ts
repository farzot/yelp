import { StarsService } from './stars.service';
import { CreateStarDto } from './dto/create-star.dto';
import { UpdateStarDto } from './dto/update-star.dto';
import { Stars } from './models/star.model';
export declare class StarsController {
    private readonly starsService;
    constructor(starsService: StarsService);
    createStar(createStarDto: CreateStarDto): Promise<any>;
    findAllStar(): Promise<Stars[]>;
    findOneStar(id: string): Promise<Stars>;
    updateStar(id: string, updateStarDto: UpdateStarDto): Promise<[affectedCount: number, affectedRows: Stars[]]>;
    removeStar(id: string): Promise<number>;
}
