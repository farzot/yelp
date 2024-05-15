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
exports.WorkTimeController = void 0;
const common_1 = require("@nestjs/common");
const work_time_service_1 = require("./work_time.service");
const create_work_time_dto_1 = require("./dto/create-work_time.dto");
const update_work_time_dto_1 = require("./dto/update-work_time.dto");
const swagger_1 = require("@nestjs/swagger");
const work_time_model_1 = require("./models/work_time.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let WorkTimeController = class WorkTimeController {
    constructor(workTimeService) {
        this.workTimeService = workTimeService;
    }
    async createWorkTime(createWorkTimeDto) {
        try {
            return this.workTimeService.create(createWorkTimeDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllWorkTime() {
        try {
            return this.workTimeService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneWorkTime(id) {
        try {
            return this.workTimeService.findOne(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateWorkTime(id, updateWorkTimeDto) {
        try {
            return this.workTimeService.update(+id, updateWorkTimeDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeWorkTime(id) {
        try {
            return this.workTimeService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.WorkTimeController = WorkTimeController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new work-time' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: work_time_model_1.WorkTime }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_work_time_dto_1.CreateWorkTimeDto]),
    __metadata("design:returntype", Promise)
], WorkTimeController.prototype, "createWorkTime", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all work-time' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: work_time_model_1.WorkTime }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkTimeController.prototype, "findAllWorkTime", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get work-time by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: work_time_model_1.WorkTime }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkTimeController.prototype, "findOneWorkTime", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update work-time by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: work_time_model_1.WorkTime }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_work_time_dto_1.UpdateWorkTimeDto]),
    __metadata("design:returntype", Promise)
], WorkTimeController.prototype, "updateWorkTime", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete work-time by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkTimeController.prototype, "removeWorkTime", null);
exports.WorkTimeController = WorkTimeController = __decorate([
    (0, swagger_1.ApiTags)('Work-Time'),
    (0, common_1.Controller)('work-time'),
    __metadata("design:paramtypes", [work_time_service_1.WorkTimeService])
], WorkTimeController);
//# sourceMappingURL=work_time.controller.js.map