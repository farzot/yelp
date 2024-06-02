import { CreateProductOrServiceDto } from './dto/create-product_or_service.dto';
import { UpdateProductOrServiceDto } from './dto/update-product_or_service.dto';
import { ProductOrService } from './models/product_or_service.model';
export declare class ProductOrServiceService {
    private readonly productOrServiceRepo;
    constructor(productOrServiceRepo: typeof ProductOrService);
    create(createProductOrServiceDto: CreateProductOrServiceDto): Promise<ProductOrService>;
    findAll(): Promise<ProductOrService[]>;
    findOne(id: number): Promise<ProductOrService>;
    findProductByName(name: any): Promise<ProductOrService>;
    update(id: number, updateProductOrServiceDto: UpdateProductOrServiceDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
    findProductByAmountSelling(): Promise<ProductOrService[]>;
    findProductByPrice(): Promise<ProductOrService[]>;
    findProductByRatingAndPrice(): Promise<ProductOrService[]>;
    findProductByRatingAndAmountSelling(): Promise<ProductOrService[]>;
    addQuantityOfSelling(id: any, amount: any): Promise<ProductOrService>;
}
