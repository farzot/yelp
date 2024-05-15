import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './model/address.model';
export declare class AddressService {
    private readonly addressRepo;
    constructor(addressRepo: typeof Address);
    create(createAddressDto: CreateAddressDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<any>;
    remove(id: number): Promise<any>;
}
