import { CreateOrderDetailDto } from './create-order_detail.dto';
declare const UpdateOrderDetailDto_base: import("@nestjs/common").Type<Partial<CreateOrderDetailDto>>;
export declare class UpdateOrderDetailDto extends UpdateOrderDetailDto_base {
    price: number;
    order_id: number;
    payment_type: string;
    status: string;
    product_or_service_id: number;
    quantity: number;
}
export {};
