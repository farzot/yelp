import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './models/owner.model';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner>;
    findAllOwner(): Promise<Owner[]>;
    findOneOwner(id: string): Promise<Owner>;
    updateOwner(id: string, updateOwnerDto: UpdateOwnerDto): Promise<void>;
    removeOwner(id: string): Promise<number>;
}
