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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("./business.service");
const create_business_dto_1 = require("./dto/create-business.dto");
const update_business_dto_1 = require("./dto/update-business.dto");
const swagger_1 = require("@nestjs/swagger");
const business_model_1 = require("./models/business.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let BusinessController = class BusinessController {
    constructor(businessService) {
        this.businessService = businessService;
    }
    async createBusiness(createBusinessDto) {
        try {
            return this.businessService.create(createBusinessDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllBusiness() {
        try {
            return this.businessService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneBusiness(id) {
        try {
            return this.businessService.findOne(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateBusiness(id, updateBusinessDto) {
        return this.businessService.update(+id, updateBusinessDto);
    }
    async removeBusiness(id) {
        return this.businessService.remove(+id);
    }
};
exports.BusinessController = BusinessController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new business' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: business_model_1.Business }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.CreateBusinessDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "createBusiness", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all business' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [business_model_1.Business] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "findAllBusiness", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get business by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: business_model_1.Business }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "findOneBusiness", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update business by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: business_model_1.Business }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_dto_1.UpdateBusinessDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "updateBusiness", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete business by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "removeBusiness", null);
exports.BusinessController = BusinessController = __decorate([
    (0, swagger_1.ApiTags)('Business'),
    (0, common_1.Controller)('business'),
    __metadata("design:paramtypes", [business_service_1.BusinessService])
], BusinessController);
//# sourceMappingURL=business.controller.js.map