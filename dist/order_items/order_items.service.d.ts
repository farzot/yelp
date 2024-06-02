import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { OrderItem } from './model/order_item.model';
import { ProductOrServiceService } from '../product_or_service/product_or_service.service';
export declare class OrderItemsService {
    private readonly orderItemRepo;
    private readonly productService;
    constructor(orderItemRepo: typeof OrderItem, productService: ProductOrServiceService);
    create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem>;
    findAll(): Promise<OrderItem[]>;
    findOneById(id: number): Promise<OrderItem>;
    update(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItem>;
    remove(id: number): Promise<void>;
}
