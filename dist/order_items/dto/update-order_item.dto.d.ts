import { CreateOrderItemDto } from './create-order_item.dto';
declare const UpdateOrderItemDto_base: import("@nestjs/common").Type<Partial<CreateOrderItemDto>>;
export declare class UpdateOrderItemDto extends UpdateOrderItemDto_base {
    order_id?: number;
    product_id?: number;
    quantity?: number;
    totalPrice?: number;
}
export {};
