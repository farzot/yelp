import { CreateStarDto } from './create-star.dto';
declare const UpdateStarDto_base: import("@nestjs/common").Type<Partial<CreateStarDto>>;
export declare class UpdateStarDto extends UpdateStarDto_base {
    client_id: number;
    business_id: number;
    star: number;
}
export {};
