import { StarsService } from './stars.service';
import { CreateStarDto } from './dto/create-star.dto';
import { UpdateStarDto } from './dto/update-star.dto';
import { Star } from './models/star.model';
export declare class StarsController {
    private readonly starsService;
    constructor(starsService: StarsService);
    createStar(createStarDto: CreateStarDto): Promise<Star>;
    findAllStar(): Promise<Star[]>;
    findOneStar(id: string): Promise<Star>;
    updateStar(id: string, updateStarDto: UpdateStarDto): Promise<[affectedCount: number, affectedRows: Star[]]>;
    removeStar(id: string): Promise<number>;
}
