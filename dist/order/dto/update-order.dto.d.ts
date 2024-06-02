import { CreateOrderDto } from './create-order.dto';
declare const UpdateOrderDto_base: import("@nestjs/common").Type<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    totalPrice?: number;
    shipping_price?: number;
    total_price?: number;
    client_id: number;
    business_id: number;
    cart_id: number;
    payment_type: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
    comment: string;
}
export {};
