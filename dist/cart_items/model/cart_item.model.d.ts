import { Model } from "sequelize-typescript";
import { Cart } from "../../cart/model/cart.model";
import { ProductOrService } from "../../product_or_service/models/product_or_service.model";
interface ICartItemsCreationAttr {
    readonly cartId: number;
    readonly productId: number;
    readonly quantity: number;
    readonly totalPrice: number;
}
export declare class CartItem extends Model<CartItem, ICartItemsCreationAttr> {
    id: number;
    cartId: number;
    cart: Cart;
    productId: number;
    product: ProductOrService;
    quantity: number;
    totalPrice: number;
    static calculateTotalPrice(instance: CartItem): Promise<void>;
    increaseQuantity(amount?: number): Promise<void>;
    decreaseQuantity(amount?: number): Promise<void>;
}
export {};
