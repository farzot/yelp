import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
import { UpdateOrderStatusDto } from './dto/update-orderStatus.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): Promise<any>;
    findAllOrder(): Promise<{
        order: Order[];
    }>;
    findOneOrderById(id: string): Promise<Order>;
    updateOrder(id: string, updateOrderDto: UpdateOrderDto): Promise<[affectedCount: number]>;
    removeOrder(id: string): Promise<number>;
    updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order>;
}
