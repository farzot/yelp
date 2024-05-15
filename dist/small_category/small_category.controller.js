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
exports.SmallCategoryController = void 0;
const common_1 = require("@nestjs/common");
const small_category_service_1 = require("./small_category.service");
const create_small_category_dto_1 = require("./dto/create-small_category.dto");
const update_small_category_dto_1 = require("./dto/update-small_category.dto");
const swagger_1 = require("@nestjs/swagger");
const small_category_model_1 = require("./models/small_category.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let SmallCategoryController = class SmallCategoryController {
    constructor(smallCategoryService) {
        this.smallCategoryService = smallCategoryService;
    }
    async createSmallCategory(createSmallCategoryDto) {
        try {
            return await this.smallCategoryService.create(createSmallCategoryDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAllSmallCategory() {
        try {
            return await this.smallCategoryService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOneSmallCategory(id) {
        try {
            return await this.smallCategoryService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async updateSmallCategory(id, updateSmallCategoryDto) {
        try {
            return await this.smallCategoryService.update(+id, updateSmallCategoryDto);
        }
        catch (error) {
            return error;
        }
    }
    async removeSmallCategory(id) {
        try {
            return await this.smallCategoryService.remove(+id);
        }
        catch (error) {
            return error;
        }
    }
};
exports.SmallCategoryController = SmallCategoryController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Small Category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: small_category_model_1.SmallCategory }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_small_category_dto_1.CreateSmallCategoryDto]),
    __metadata("design:returntype", Promise)
], SmallCategoryController.prototype, "createSmallCategory", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Small Category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [small_category_model_1.SmallCategory] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SmallCategoryController.prototype, "findAllSmallCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Small Category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: small_category_model_1.SmallCategory }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SmallCategoryController.prototype, "findOneSmallCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Small Category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: small_category_model_1.SmallCategory }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_small_category_dto_1.UpdateSmallCategoryDto]),
    __metadata("design:returntype", Promise)
], SmallCategoryController.prototype, "updateSmallCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Small Category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SmallCategoryController.prototype, "removeSmallCategory", null);
exports.SmallCategoryController = SmallCategoryController = __decorate([
    (0, swagger_1.ApiTags)('Small-Category'),
    (0, common_1.Controller)('small-category'),
    __metadata("design:paramtypes", [small_category_service_1.SmallCategoryService])
], SmallCategoryController);
//# sourceMappingURL=small_category.controller.js.map