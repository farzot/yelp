import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './models/owner.model';
export declare class OwnerService {
    private readonly ownerRepo;
    constructor(ownerRepo: typeof Owner);
    create(createOwnerDto: CreateOwnerDto): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: number): Promise<Owner>;
    update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<void>;
    remove(id: number): Promise<number>;
}
