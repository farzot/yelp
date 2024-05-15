import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    createAdress(createAddressDto: CreateAddressDto): Promise<any>;
    findAllAdress(): Promise<any>;
    findOneAdress(id: string): Promise<any>;
    updateAdress(id: string, updateAddressDto: UpdateAddressDto): Promise<any>;
    removeAdress(id: string): Promise<any>;
}
