import { CreateSmallCategoryDto } from './dto/create-small_category.dto';
import { UpdateSmallCategoryDto } from './dto/update-small_category.dto';
import { SmallCategory } from './models/small_category.model';
export declare class SmallCategoryService {
    private readonly smalCategoryRepo;
    constructor(smalCategoryRepo: typeof SmallCategory);
    create(createSmallCategoryDto: CreateSmallCategoryDto): Promise<SmallCategory>;
    findAll(): Promise<SmallCategory[]>;
    findOne(id: number): Promise<SmallCategory>;
    update(id: number, updateSmallCategoryDto: UpdateSmallCategoryDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
