import { ProductOrServiceService } from './product_or_service.service';
import { CreateProductOrServiceDto } from './dto/create-product_or_service.dto';
import { UpdateProductOrServiceDto } from './dto/update-product_or_service.dto';
import { ProductOrService } from './models/product_or_service.model';
export declare class ProductOrServiceController {
    private readonly productOrServiceService;
    constructor(productOrServiceService: ProductOrServiceService);
    createProduct(createProductOrServiceDto: CreateProductOrServiceDto): Promise<ProductOrService>;
    findAllProduct(): Promise<ProductOrService[]>;
    findOneProduct(id: string): Promise<ProductOrService>;
    updateProduct(id: string, updateProductOrServiceDto: UpdateProductOrServiceDto): Promise<[affectedCount: number]>;
    removeProduct(id: string): Promise<number>;
}
