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
exports.StarsController = void 0;
const common_1 = require("@nestjs/common");
const stars_service_1 = require("./stars.service");
const create_star_dto_1 = require("./dto/create-star.dto");
const update_star_dto_1 = require("./dto/update-star.dto");
const swagger_1 = require("@nestjs/swagger");
const star_model_1 = require("./models/star.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let StarsController = class StarsController {
    constructor(starsService) {
        this.starsService = starsService;
    }
    async createStar(createStarDto) {
        try {
            return await this.starsService.create(createStarDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllStar() {
        try {
            return await this.starsService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneStar(id) {
        try {
            return await this.starsService.findOne(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateStar(id, updateStarDto) {
        try {
            return await this.starsService.update(+id, updateStarDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeStar(id) {
        try {
            return await this.starsService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.StarsController = StarsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new star' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: star_model_1.Stars }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_star_dto_1.CreateStarDto]),
    __metadata("design:returntype", Promise)
], StarsController.prototype, "createStar", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all star' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [star_model_1.Stars] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StarsController.prototype, "findAllStar", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get star by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: star_model_1.Stars }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StarsController.prototype, "findOneStar", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update star by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: star_model_1.Stars }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_star_dto_1.UpdateStarDto]),
    __metadata("design:returntype", Promise)
], StarsController.prototype, "updateStar", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete star by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StarsController.prototype, "removeStar", null);
exports.StarsController = StarsController = __decorate([
    (0, swagger_1.ApiTags)('Star'),
    (0, common_1.Controller)('stars'),
    __metadata("design:paramtypes", [stars_service_1.StarsService])
], StarsController);
//# sourceMappingURL=stars.controller.js.map