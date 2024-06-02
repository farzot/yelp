import { CreateBigCategoryDto } from './dto/create-big_category.dto';
import { UpdateBigCategoryDto } from './dto/update-big_category.dto';
import { BigCategory } from './models/big_category.model';
export declare class BigCategoryService {
    private readonly categoryRepo;
    constructor(categoryRepo: typeof BigCategory);
    create(createBigCategoryDto: CreateBigCategoryDto): Promise<BigCategory>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateBigCategoryDto: UpdateBigCategoryDto): Promise<any>;
    remove(id: number): Promise<any>;
    findBigCategoryByName(name: string): Promise<BigCategory>;
}
