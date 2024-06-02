import { CreateBusinessImageDto } from './create-business_image.dto';
declare const UpdateBusinessImageDto_base: import("@nestjs/common").Type<Partial<CreateBusinessImageDto>>;
export declare class UpdateBusinessImageDto extends UpdateBusinessImageDto_base {
    image: string;
    business_id: number;
    is_main_image: boolean;
    is_active: boolean;
    image_comment: string;
}
export {};
