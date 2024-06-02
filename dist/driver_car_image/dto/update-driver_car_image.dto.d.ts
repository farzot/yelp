import { CreateDriverCarImageDto } from './create-driver_car_image.dto';
declare const UpdateDriverCarImageDto_base: import("@nestjs/common").Type<Partial<CreateDriverCarImageDto>>;
export declare class UpdateDriverCarImageDto extends UpdateDriverCarImageDto_base {
    image: string;
    car_id: number;
}
export {};
