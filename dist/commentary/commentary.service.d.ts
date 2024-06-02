import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';
import { Commentary } from './models/commentary.model';
import { BusinessService } from '../business/business.service';
export declare class CommentaryService {
    private readonly commentRepo;
    private readonly businessService;
    constructor(commentRepo: typeof Commentary, businessService: BusinessService);
    create(createCommentaryDto: CreateCommentaryDto): Promise<Commentary>;
    findAll(): Promise<Commentary[]>;
    findOne(id: number): Promise<Commentary>;
    update(id: number, updateCommentaryDto: UpdateCommentaryDto): Promise<[affectedCount: number, affectedRows: Commentary[]]>;
    remove(id: number): Promise<number>;
    increaseLike(id: any): Promise<Commentary>;
}
