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
exports.BusinessImagesController = void 0;
const common_1 = require("@nestjs/common");
const business_images_service_1 = require("./business_images.service");
const create_business_image_dto_1 = require("./dto/create-business_image.dto");
const update_business_image_dto_1 = require("./dto/update-business_image.dto");
const swagger_1 = require("@nestjs/swagger");
const business_image_model_1 = require("./model/business_image.model");
const user_guard_1 = require("../common/guards/user.guard");
let BusinessImagesController = class BusinessImagesController {
    constructor(businessImagesService) {
        this.businessImagesService = businessImagesService;
    }
    async create(createBusinessImageDto) {
        try {
            return await this.businessImagesService.create(createBusinessImageDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.businessImagesService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.businessImagesService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateBusinessImageDto) {
        return await this.businessImagesService.update(+id, updateBusinessImageDto);
    }
    async remove(id) {
        try {
            return await this.businessImagesService.remove(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.BusinessImagesController = BusinessImagesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Create a business image' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: business_image_model_1.BusinessImage }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_image_dto_1.CreateBusinessImageDto]),
    __metadata("design:returntype", Promise)
], BusinessImagesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get all business image' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [business_image_model_1.BusinessImage] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessImagesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get business image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: business_image_model_1.BusinessImage }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessImagesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update business image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: business_image_model_1.BusinessImage }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_image_dto_1.UpdateBusinessImageDto]),
    __metadata("design:returntype", Promise)
], BusinessImagesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete business image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessImagesController.prototype, "remove", null);
exports.BusinessImagesController = BusinessImagesController = __decorate([
    (0, swagger_1.ApiTags)('BusinessImage'),
    (0, common_1.Controller)('business_images'),
    __metadata("design:paramtypes", [business_images_service_1.BusinessImagesService])
], BusinessImagesController);
//# sourceMappingURL=business_images.controller.js.map