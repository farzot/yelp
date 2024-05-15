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
exports.ProductOrServiceService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_or_service_model_1 = require("./models/product_or_service.model");
let ProductOrServiceService = class ProductOrServiceService {
    constructor(productOrServiceRepo) {
        this.productOrServiceRepo = productOrServiceRepo;
    }
    async create(createProductOrServiceDto) {
        try {
            return await this.productOrServiceRepo.create(createProductOrServiceDto);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.productOrServiceRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            return await this.productOrServiceRepo.findByPk(id, { include: { all: true } });
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateProductOrServiceDto) {
        try {
            const check = this.findOne(id);
            if (!check)
                throw new common_1.NotFoundException(`Product with ${id}-id not found`);
            return await this.productOrServiceRepo.update(updateProductOrServiceDto, { where: { id: id } });
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const check = this.findOne(id);
            if (!check)
                throw new common_1.NotFoundException(`Product with ${id}-id not found`);
            return await this.productOrServiceRepo.destroy({ where: { id: id } });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProductOrServiceService = ProductOrServiceService;
exports.ProductOrServiceService = ProductOrServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_or_service_model_1.ProductOrService)),
    __metadata("design:paramtypes", [Object])
], ProductOrServiceService);
//# sourceMappingURL=product_or_service.service.js.map