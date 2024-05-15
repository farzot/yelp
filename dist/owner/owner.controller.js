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
exports.OwnerController = void 0;
const common_1 = require("@nestjs/common");
const owner_service_1 = require("./owner.service");
const create_owner_dto_1 = require("./dto/create-owner.dto");
const update_owner_dto_1 = require("./dto/update-owner.dto");
const swagger_1 = require("@nestjs/swagger");
const owner_model_1 = require("./models/owner.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let OwnerController = class OwnerController {
    constructor(ownerService) {
        this.ownerService = ownerService;
    }
    async createOwner(createOwnerDto) {
        try {
            return await this.ownerService.create(createOwnerDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllOwner() {
        try {
            return this.ownerService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneOwner(id) {
        try {
            return this.ownerService.findOne(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateOwner(id, updateOwnerDto) {
        try {
            return this.ownerService.update(+id, updateOwnerDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeOwner(id) {
        try {
            return this.ownerService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.OwnerController = OwnerController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new owner' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: owner_model_1.Owner }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_owner_dto_1.CreateOwnerDto]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "createOwner", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all owner' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [owner_model_1.Owner] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "findAllOwner", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get owner by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: owner_model_1.Owner }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "findOneOwner", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update owner by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: owner_model_1.Owner }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_owner_dto_1.UpdateOwnerDto]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "updateOwner", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete owner by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "removeOwner", null);
exports.OwnerController = OwnerController = __decorate([
    (0, swagger_1.ApiTags)('Owner'),
    (0, common_1.Controller)('owner'),
    __metadata("design:paramtypes", [owner_service_1.OwnerService])
], OwnerController);
//# sourceMappingURL=owner.controller.js.map