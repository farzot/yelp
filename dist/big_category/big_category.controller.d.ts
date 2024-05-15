import { BigCategoryService } from './big_category.service';
import { CreateBigCategoryDto } from './dto/create-big_category.dto';
import { UpdateBigCategoryDto } from './dto/update-big_category.dto';
export declare class BigCategoryController {
    private readonly bigCategoryService;
    constructor(bigCategoryService: BigCategoryService);
    createBigCategory(createBigCategoryDto: CreateBigCategoryDto): Promise<any>;
    findAllBigCategory(): Promise<any>;
    findOneBigCategory(id: string): Promise<any>;
    updateBigCategory(id: string, updateBigCategoryDto: UpdateBigCategoryDto): Promise<any>;
    removeBigCategory(id: string): Promise<any>;
}
