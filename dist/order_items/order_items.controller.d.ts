import { OrderItemsService } from './order_items.service';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { OrderItem } from './model/order_item.model';
export declare class OrderItemsController {
    private readonly orderItemsService;
    constructor(orderItemsService: OrderItemsService);
    create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem>;
    findAllOrderItem(): Promise<OrderItem[]>;
    findOneByIdOrderItem(id: string): Promise<OrderItem>;
    updateByIdOrderItem(id: string, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItem>;
    removeByIdOrderItem(id: string): Promise<void>;
}
