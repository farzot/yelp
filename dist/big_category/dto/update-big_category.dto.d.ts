import { CreateBigCategoryDto } from './create-big_category.dto';
declare const UpdateBigCategoryDto_base: import("@nestjs/common").Type<Partial<CreateBigCategoryDto>>;
export declare class UpdateBigCategoryDto extends UpdateBigCategoryDto_base {
    name: string;
    description: string;
}
export {};
