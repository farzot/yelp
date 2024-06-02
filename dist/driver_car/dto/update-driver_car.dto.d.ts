import { CreateDriverCarDto } from './create-driver_car.dto';
declare const UpdateDriverCarDto_base: import("@nestjs/common").Type<Partial<CreateDriverCarDto>>;
export declare class UpdateDriverCarDto extends UpdateDriverCarDto_base {
    model: string;
    number: string;
    driver_id: number;
}
export {};
