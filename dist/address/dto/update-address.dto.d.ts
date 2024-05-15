import { CreateAddressDto } from './create-address.dto';
declare const UpdateAddressDto_base: import("@nestjs/common").Type<Partial<CreateAddressDto>>;
export declare class UpdateAddressDto extends UpdateAddressDto_base {
    city: string;
    district: string;
    street: string;
    home_number: string;
}
export {};
