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
exports.BigCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const big_category_model_1 = require("./models/big_category.model");
let BigCategoryService = class BigCategoryService {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    async create(createBigCategoryDto) {
        try {
            return await this.categoryRepo.create(createBigCategoryDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.categoryRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            return error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.categoryRepo.findByPk(id, { include: { all: true } });
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, updateBigCategoryDto) {
        try {
            const check = this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Category with ID ${id} not found`);
            }
            return await this.categoryRepo.update(updateBigCategoryDto, {
                where: { id },
                returning: true,
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async remove(id) {
        try {
            const check = this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Category with ID ${id} not found`);
            }
            return await this.categoryRepo.destroy({ where: { id } });
        }
        catch (error) {
            return error.message;
        }
    }
    async findBigCategoryByName(name) {
        try {
            return await this.categoryRepo.findOne({
                where: { name: name },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.BigCategoryService = BigCategoryService;
exports.BigCategoryService = BigCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(big_category_model_1.BigCategory)),
    __metadata("design:paramtypes", [Object])
], BigCategoryService);
//# sourceMappingURL=big_category.service.js.map