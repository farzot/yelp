import { CreateCartItemDto } from './create-cart_item.dto';
declare const UpdateCartItemDto_base: import("@nestjs/common").Type<Partial<CreateCartItemDto>>;
export declare class UpdateCartItemDto extends UpdateCartItemDto_base {
    readonly cartId?: number;
    readonly productId?: number;
    readonly quantity?: number;
    readonly totalPrice?: number;
}
export {};
