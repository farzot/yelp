import { CreateOwnerDto } from './create-owner.dto';
declare const UpdateOwnerDto_base: import("@nestjs/common").Type<Partial<CreateOwnerDto>>;
export declare class UpdateOwnerDto extends UpdateOwnerDto_base {
    experience: number;
    depend_businesses: string;
    total_commercial: number;
    social_media: string;
    is_active: boolean;
}
export {};
