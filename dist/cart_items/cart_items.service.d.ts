import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { CartItem } from './model/cart_item.model';
import { CartService } from '../cart/cart.service';
import { ProductOrServiceService } from '../product_or_service/product_or_service.service';
export declare class CartItemsService {
    private readonly cartItemsRepo;
    private readonly cartService;
    private readonly productSer;
    constructor(cartItemsRepo: typeof CartItem, cartService: CartService, productSer: ProductOrServiceService);
    create(createCartItemDto: CreateCartItemDto): Promise<CartItem>;
    findAll(): Promise<CartItem[]>;
    findOne(id: number): Promise<CartItem>;
    update(id: number, updateCartItemDto: UpdateCartItemDto): Promise<CartItem>;
    remove(id: number): Promise<void>;
    findOneByCartID(id: number): Promise<CartItem>;
    increaseQuantity(id: number, amount: number): Promise<CartItem>;
    decreaseQuantity(id: number, amount: number): Promise<CartItem>;
}
