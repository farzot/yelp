"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrServiceController = void 0;
const common_1 = require("@nestjs/common");
const product_or_service_service_1 = require("./product_or_service.service");
const create_product_or_service_dto_1 = require("./dto/create-product_or_service.dto");
const update_product_or_service_dto_1 = require("./dto/update-product_or_service.dto");
const swagger_1 = require("@nestjs/swagger");
const product_or_service_model_1 = require("./models/product_or_service.model");
let ProductOrServiceController = class ProductOrServiceController {
    constructor(productOrServiceService) {
        this.productOrServiceService = productOrServiceService;
    }
    async createProduct(createProductOrServiceDto) {
        try {
            return this.productOrServiceService.create(createProductOrServiceDto);
        }
        catch (error) {
            throw error;
        }
    }
    async findAllProduct() {
        try {
            return this.productOrServiceService.findAll();
        }
        catch (error) {
            throw error;
        }
    }
    async findOneProduct(id) {
        try {
            return this.productOrServiceService.findOne(+id);
        }
        catch (error) {
            throw error;
        }
    }
    async findProductByName(name) {
        try {
            return this.productOrServiceService.findProductByName(name);
        }
        catch (error) {
            throw error;
        }
    }
    async mostSelling(name) {
        try {
            return this.productOrServiceService.findProductByAmountSelling();
        }
        catch (error) {
            throw error;
        }
    }
    async updateProduct(id, updateProductOrServiceDto) {
        try {
            return this.productOrServiceService.update(+id, updateProductOrServiceDto);
        }
        catch (error) {
            throw error;
        }
    }
    async removeProduct(id) {
        try {
            return this.productOrServiceService.remove(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProductOrServiceController = ProductOrServiceController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_or_service_model_1.ProductOrService }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_or_service_dto_1.CreateProductOrServiceDto]),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "createProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all product' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_or_service_model_1.ProductOrService] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "findAllProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get product by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_or_service_model_1.ProductOrService }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "findOneProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get product by name' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_or_service_model_1.ProductOrService }),
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "findProductByName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get products by most selling' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_or_service_model_1.ProductOrService] }),
    (0, common_1.Get)(':trends/product'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "mostSelling", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update product by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_or_service_model_1.ProductOrService }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_or_service_dto_1.UpdateProductOrServiceDto]),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "updateProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete product by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductOrServiceController.prototype, "removeProduct", null);
exports.ProductOrServiceController = ProductOrServiceController = __decorate([
    (0, swagger_1.ApiTags)('Product-or-service'),
    (0, common_1.Controller)('product-or-service'),
    __metadata("design:paramtypes", [product_or_service_service_1.ProductOrServiceService])
], ProductOrServiceController);
//# sourceMappingURL=product_or_service.controller.js.map