import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';
import { Commentary } from './models/commentary.model';
export declare class CommentaryService {
    private readonly commentRepo;
    constructor(commentRepo: typeof Commentary);
    create(createCommentaryDto: CreateCommentaryDto): Promise<Commentary>;
    findAll(): Promise<Commentary[]>;
    findOne(id: number): Promise<Commentary>;
    update(id: number, updateCommentaryDto: UpdateCommentaryDto): Promise<[affectedCount: number, affectedRows: Commentary[]]>;
    remove(id: number): Promise<number>;
}
