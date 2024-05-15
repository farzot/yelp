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
exports.BusinessService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const business_model_1 = require("./models/business.model");
let BusinessService = class BusinessService {
    constructor(businessRepo) {
        this.businessRepo = businessRepo;
    }
    async create(createBusinessDto) {
        try {
            return await this.businessRepo.create(createBusinessDto);
        }
        catch (error) {
            return error.message;
        }
    }
    async findAll() {
        try {
            return await this.businessRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            return error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.businessRepo.findByPk(id, { include: { all: true } });
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateBusinessDto) {
        try {
            const check = this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Business with ID ${id} not found`);
            }
            const upBusiness = await this.businessRepo.update(updateBusinessDto, { where: { id: id }, returning: true });
            return upBusiness;
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const check = this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Business with ID ${id} not found`);
            }
            const deletedBusiness = await this.businessRepo.destroy({ where: { id } });
            return deletedBusiness;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.BusinessService = BusinessService;
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(business_model_1.Business)),
    __metadata("design:paramtypes", [Object])
], BusinessService);
//# sourceMappingURL=business.service.js.map