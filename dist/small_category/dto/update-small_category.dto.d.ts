import { CreateSmallCategoryDto } from './create-small_category.dto';
declare const UpdateSmallCategoryDto_base: import("@nestjs/common").Type<Partial<CreateSmallCategoryDto>>;
export declare class UpdateSmallCategoryDto extends UpdateSmallCategoryDto_base {
    name: string;
    big_category_id: number;
    description: string;
}
export {};
