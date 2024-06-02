import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './model/cart.model';
export declare class CartService {
    private readonly cartRepo;
    constructor(cartRepo: typeof Cart);
    createCart(createCartDto: CreateCartDto): Promise<Cart>;
    findAllCart(): Promise<Cart[]>;
    findAllCartByClientID(id: number): Promise<Cart[]>;
    findCartByID(id: number): Promise<Cart>;
    updateCartByID(id: number, updateCartDto: UpdateCartDto): Promise<[affectedCount: number]>;
    removeCartByID(id: number): Promise<number>;
    removeCartByClientID(id: number): Promise<number>;
    findOneByClientID(id: number): Promise<Cart>;
    recalculateTotalPrice(cartId: number): Promise<void>;
}
