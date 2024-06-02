import { CreateOrderDriverDto } from './create-order_driver.dto';
declare const UpdateOrderDriverDto_base: import("@nestjs/common").Type<Partial<CreateOrderDriverDto>>;
export declare class UpdateOrderDriverDto extends UpdateOrderDriverDto_base {
    distance: number;
    get_product_time: Date;
    arrived_product_time: Date;
    duration: string;
    driver_id: number;
    order_id: number;
    comment: string;
}
export {};
