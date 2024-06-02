import { OrderDriver } from './model/order_driver.model';
import { CreateOrderDriverDto } from './dto/create-order_driver.dto';
import { UpdateOrderDriverDto } from './dto/update-order_driver.dto';
export declare class OrderDriversService {
    private readonly orderDriverRepo;
    constructor(orderDriverRepo: typeof OrderDriver);
    create(createOrderDriverDto: CreateOrderDriverDto): Promise<OrderDriver>;
    findAll(): Promise<OrderDriver[]>;
    findOne(id: number): Promise<OrderDriver>;
    update(id: number, updateOrderDriverDto: UpdateOrderDriverDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
