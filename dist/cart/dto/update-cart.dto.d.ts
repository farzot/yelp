import { CreateCartDto } from './create-cart.dto';
declare const UpdateCartDto_base: import("@nestjs/common").Type<Partial<CreateCartDto>>;
export declare class UpdateCartDto extends UpdateCartDto_base {
    client_id?: number;
    business_id?: number;
    totalPrice?: number;
    status?: 'active' | 'completed' | 'converted';
}
export {};
