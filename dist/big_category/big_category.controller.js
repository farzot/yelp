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
exports.BigCategoryController = void 0;
const common_1 = require("@nestjs/common");
const big_category_service_1 = require("./big_category.service");
const create_big_category_dto_1 = require("./dto/create-big_category.dto");
const update_big_category_dto_1 = require("./dto/update-big_category.dto");
const swagger_1 = require("@nestjs/swagger");
const big_category_model_1 = require("./models/big_category.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let BigCategoryController = class BigCategoryController {
    constructor(bigCategoryService) {
        this.bigCategoryService = bigCategoryService;
    }
    async createBigCategory(createBigCategoryDto) {
        try {
            return await this.bigCategoryService.create(createBigCategoryDto);
        }
        catch (error) {
            return error.message;
        }
    }
    async findAllBigCategory() {
        try {
            return await this.bigCategoryService.findAll();
        }
        catch (error) {
            return error.message;
        }
    }
    async findOneBigCategory(id) {
        try {
            return await this.bigCategoryService.findOne(+id);
        }
        catch (error) {
            return error.message;
        }
    }
    async findBigCategoryByName(name) {
        try {
            return await this.bigCategoryService.findBigCategoryByName(name);
        }
        catch (error) {
            return error.message;
        }
    }
    async updateBigCategory(id, updateBigCategoryDto) {
        try {
            return await this.bigCategoryService.update(+id, updateBigCategoryDto);
        }
        catch (error) {
            return error.message;
        }
    }
    async removeBigCategory(id) {
        try {
            return await this.bigCategoryService.remove(+id);
        }
        catch (error) {
            return error.message;
        }
    }
};
exports.BigCategoryController = BigCategoryController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Big Category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: big_category_model_1.BigCategory }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_big_category_dto_1.CreateBigCategoryDto]),
    __metadata("design:returntype", Promise)
], BigCategoryController.prototype, "createBigCategory", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Big Categories' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [big_category_model_1.BigCategory] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BigCategoryController.prototype, "findAllBigCategory", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get one Big Category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: big_category_model_1.BigCategory }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BigCategoryController.prototype, "findOneBigCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get one Big Category by name' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: big_category_model_1.BigCategory }),
    (0, common_1.Get)(':/name'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BigCategoryController.prototype, "findBigCategoryByName", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Big Category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: big_category_model_1.BigCategory }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_big_category_dto_1.UpdateBigCategoryDto]),
    __metadata("design:returntype", Promise)
], BigCategoryController.prototype, "updateBigCategory", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Big Category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BigCategoryController.prototype, "removeBigCategory", null);
exports.BigCategoryController = BigCategoryController = __decorate([
    (0, swagger_1.ApiTags)('Big-category'),
    (0, common_1.Controller)('big-category'),
    __metadata("design:paramtypes", [big_category_service_1.BigCategoryService])
], BigCategoryController);
//# sourceMappingURL=big_category.controller.js.map