import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { CartItem } from './model/cart_item.model';
export declare class CartItemsController {
    private readonly cartItemsService;
    constructor(cartItemsService: CartItemsService);
    createCartItem(createCartItemDto: CreateCartItemDto): Promise<CreateCartItemDto>;
    findAllCartItems(): Promise<CartItem[]>;
    findOneCartItem(id: string): Promise<any>;
    updateCartItem(id: string, updateCartItemDto: UpdateCartItemDto): Promise<any>;
    removeCartItem(id: string): Promise<any>;
    findOneByCartID(id: string): Promise<any>;
}
