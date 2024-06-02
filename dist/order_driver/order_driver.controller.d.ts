import { OrderDriversService } from './order_driver.service';
import { CreateOrderDriverDto } from './dto/create-order_driver.dto';
import { UpdateOrderDriverDto } from './dto/update-order_driver.dto';
export declare class OrderDriversController {
    private readonly orderDriversService;
    constructor(orderDriversService: OrderDriversService);
    create(createOrderDriverDto: CreateOrderDriverDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOrderDriverDto: UpdateOrderDriverDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
