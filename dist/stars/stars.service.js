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
const business_service_1 = require("../business/business.service");
const business_model_1 = require("../business/models/business.model");
let StarsService = class StarsService {
    constructor(starRepo, businessService, businessRepo) {
        this.starRepo = starRepo;
        this.businessService = businessService;
        this.businessRepo = businessRepo;
    }
    async create(createStarDto) {
        try {
            const stars = await this.starRepo.create(createStarDto);
            const business = await this.businessService.findOne(createStarDto.business_id);
            let sum = 0;
            for (let i = 0; i < business.stars.length; i++) {
                sum = sum + business.stars[i].star;
            }
            console.log('Summa --> ', sum);
            console.log('Stars.length --> ', business.stars.length);
            const avg = Math.round(sum / business.stars.length);
            console.log('sum / business.stars.length --> ', sum / business.stars.length);
            await this.businessRepo.update({ average_star: avg }, { where: { id: business.id } });
            await business.save();
            return business.stars;
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.starRepo.findAll({ include: { all: true } });
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
            return await this.starRepo.update(updateStarDto, {
                where: { id: id },
                returning: true,
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
    __param(0, (0, sequelize_1.InjectModel)(star_model_1.Stars)),
    __param(2, (0, sequelize_1.InjectModel)(business_model_1.Business)),
    __metadata("design:paramtypes", [Object, business_service_1.BusinessService, Object])
], StarsService);
//# sourceMappingURL=stars.service.js.map