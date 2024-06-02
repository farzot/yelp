import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
import { CartService } from '../cart/cart.service';
import { ProductOrServiceService } from '../product_or_service/product_or_service.service';
import { Cart } from '../cart/model/cart.model';
import { OrderItem } from '../order_items/model/order_item.model';
import { UpdateOrderStatusDto } from './dto/update-orderStatus.dto';
import { OrderItemsService } from '../order_items/order_items.service';
export declare class OrderService {
    private readonly orderRepo;
    private readonly cartModel;
    private readonly orderItemModel;
    private readonly orderItemService;
    private readonly cartService;
    private readonly productService;
    constructor(orderRepo: typeof Order, cartModel: typeof Cart, orderItemModel: typeof OrderItem, orderItemService: OrderItemsService, cartService: CartService, productService: ProductOrServiceService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<{
        order: Order[];
    }>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
    updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order>;
}
