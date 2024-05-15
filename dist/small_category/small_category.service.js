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
exports.SmallCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const small_category_model_1 = require("./models/small_category.model");
let SmallCategoryService = class SmallCategoryService {
    constructor(smalCategoryRepo) {
        this.smalCategoryRepo = smalCategoryRepo;
    }
    async create(createSmallCategoryDto) {
        try {
            return await this.smalCategoryRepo.create(createSmallCategoryDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.smalCategoryRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.smalCategoryRepo.findByPk(id, {
                include: { all: true },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateSmallCategoryDto) {
        try {
            const check = await this.findOne(id);
            if (!check)
                throw new Error('No such small category exists');
            return await this.smalCategoryRepo.update(updateSmallCategoryDto, {
                where: { id: id },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const check = await this.findOne(id);
            if (!check)
                throw new Error('No such small category exists');
            return await this.smalCategoryRepo.destroy({ where: { id } });
        }
        catch (error) { }
    }
};
exports.SmallCategoryService = SmallCategoryService;
exports.SmallCategoryService = SmallCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(small_category_model_1.SmallCategory)),
    __metadata("design:paramtypes", [Object])
], SmallCategoryService);
//# sourceMappingURL=small_category.service.js.map