import { OrderDetailService } from './order_detail.service';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { OrderDetail } from './models/order_detail.model';
export declare class OrderDetailController {
    private readonly orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    createOrderDetail(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail>;
    findAllOrderDetail(): Promise<OrderDetail[]>;
    findOneOrderDetail(id: string): Promise<OrderDetail>;
    updateOrderDetail(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<[affectedCount: number, affectedRows: OrderDetail[]]>;
    removeOrderDetail(id: string): Promise<number>;
}
