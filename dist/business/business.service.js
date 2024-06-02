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
const business_images_service_1 = require("../business_images/business_images.service");
const sequelize_typescript_1 = require("sequelize-typescript");
const moment = require('moment');
let BusinessService = class BusinessService {
    constructor(businessRepo, businessImageService, sequelize) {
        this.businessRepo = businessRepo;
        this.businessImageService = businessImageService;
        this.sequelize = sequelize;
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
            const data = await this.businessRepo.findAll({ include: { all: true } });
            return data;
        }
        catch (error) {
            return error.message;
        }
    }
    async findOne(id) {
        try {
            const data = await this.businessRepo.findByPk(id, {
                include: { all: true },
            });
            return data;
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
            const upBusiness = await this.businessRepo.update(updateBusinessDto, {
                where: { id: id },
                returning: true,
            });
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
            const deletedBusiness = await this.businessRepo.destroy({
                where: { id },
            });
            return deletedBusiness;
        }
        catch (error) {
            throw error;
        }
    }
    async getBusinessByName(name) {
        try {
            const business = await business_model_1.Business.findOne({ where: { name } });
            if (business) {
                console.log('Business found:', business.toJSON());
                return business;
            }
            else {
                console.log('Business not found');
                return null;
            }
        }
        catch (error) {
            console.error('Error fetching business:', error);
        }
    }
    async addImageToBusiness(createBusinessImageDto) {
        try {
            const business = await this.businessRepo.findByPk(createBusinessImageDto.business_id);
            if (!business) {
                throw new common_1.NotFoundException(`Business with ID ${createBusinessImageDto.business_id} not found`);
            }
            const businessImage = await this.businessImageService.create(createBusinessImageDto);
            return businessImage;
        }
        catch (error) {
            console.error('Error adding image:', error);
        }
    }
    async findByLocation(location) {
        try {
            const business = await business_model_1.Business.findAll({
                where: { location: location },
            });
            if (business) {
                console.log('Business found:', business);
                return business;
            }
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async fullMenu(businessId) {
        const business = await this.findOne(businessId);
        return business.product_or_service;
    }
    async mostBrend() {
        return this.businessRepo.findAll({
            order: [
                ['average_star', 'DESC'],
                ['likes', 'DESC'],
            ],
            limit: 10,
            include: [
                'business_image',
                'product_or_service',
                'workTime',
                'commentary',
            ],
        });
    }
    async increaseLike(id) {
        const business = await this.businessRepo.findByPk(id);
        if (!business) {
            throw new common_1.NotFoundException(`Business with ID ${id} not found`);
        }
        const upBusiness = await this.businessRepo.update({ likes: business.likes + 1 }, {
            where: { id: id },
            returning: true,
        });
        return upBusiness;
    }
    async seeAllPhotos(id) {
        const business = await this.businessRepo.findByPk(id);
        if (!business) {
            throw new common_1.NotFoundException(`Business with ID ${id} not found`);
        }
        return business.business_image;
    }
};
exports.BusinessService = BusinessService;
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(business_model_1.Business)),
    __metadata("design:paramtypes", [Object, business_images_service_1.BusinessImagesService,
        sequelize_typescript_1.Sequelize])
], BusinessService);
//# sourceMappingURL=business.service.js.map