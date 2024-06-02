import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './model/cart.model';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    createCart(createCartDto: CreateCartDto): Promise<Cart>;
    findAllCart(): Promise<Cart[]>;
    findCartByID(id: string): Promise<Cart>;
    findCartByClientID(id: string): Promise<Cart>;
    updateCartByID(id: string, updateCartDto: UpdateCartDto): Promise<[affectedCount: number]>;
    removeCartByID(id: string): Promise<number>;
}
