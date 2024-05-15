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
exports.StarsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const star_model_1 = require("./models/star.model");
let StarsService = class StarsService {
    constructor(starRepo) {
        this.starRepo = starRepo;
    }
    async create(createStarDto) {
        try {
            return await this.starRepo.create(createStarDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.starRepo.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.starRepo.findByPk(id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateStarDto) {
        try {
            const check = await this.findOne(id);
            if (!check)
                throw new common_1.NotFoundException(`Star ${id} not found`);
            return await this.starRepo.update(updateStarDto, { where: { id: id }, returning: true });
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const check = await this.findOne(id);
            if (!check)
                throw new common_1.NotFoundException(`Star ${id} not found`);
            return await this.starRepo.destroy({ where: { id } });
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.StarsService = StarsService;
exports.StarsService = StarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(star_model_1.Star)),
    __metadata("design:paramtypes", [Object])
], StarsService);
//# sourceMappingURL=stars.service.js.map