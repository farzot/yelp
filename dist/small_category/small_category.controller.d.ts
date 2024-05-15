import { SmallCategoryService } from './small_category.service';
import { CreateSmallCategoryDto } from './dto/create-small_category.dto';
import { UpdateSmallCategoryDto } from './dto/update-small_category.dto';
export declare class SmallCategoryController {
    private readonly smallCategoryService;
    constructor(smallCategoryService: SmallCategoryService);
    createSmallCategory(createSmallCategoryDto: CreateSmallCategoryDto): Promise<any>;
    findAllSmallCategory(): Promise<any>;
    findOneSmallCategory(id: string): Promise<any>;
    updateSmallCategory(id: string, updateSmallCategoryDto: UpdateSmallCategoryDto): Promise<any>;
    removeSmallCategory(id: string): Promise<any>;
}
