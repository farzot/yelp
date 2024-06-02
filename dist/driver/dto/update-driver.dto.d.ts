import { CreateDriverDto } from './create-driver.dto';
declare const UpdateDriverDto_base: import("@nestjs/common").Type<Partial<CreateDriverDto>>;
export declare class UpdateDriverDto extends UpdateDriverDto_base {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    passportID: string;
    card_number: string;
    refresh_token: string;
}
export {};
