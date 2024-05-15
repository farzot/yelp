import { CommentaryService } from './commentary.service';
import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';
import { Commentary } from './models/commentary.model';
export declare class CommentaryController {
    private readonly commentaryService;
    constructor(commentaryService: CommentaryService);
    createCommentary(createCommentaryDto: CreateCommentaryDto): Promise<Commentary>;
    findAllCommentary(): Promise<Commentary[]>;
    findOneCommentary(id: string): Promise<Commentary>;
    updateCommentary(id: string, updateCommentaryDto: UpdateCommentaryDto): Promise<[affectedCount: number, affectedRows: Commentary[]]>;
    removeCommentary(id: string): Promise<number>;
}
