import { CreateOrderDto } from './create-order.dto';
declare const UpdateOrderDto_base: import("@nestjs/common").Type<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    total_price: number;
    client_id: number;
    business_id: number;
}
export {};
