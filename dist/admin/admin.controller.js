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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const cookie_getter_decorator_1 = require("../common/decorators/cookie_getter.decorator");
const login_admin_dto_1 = require("./dto/login.admin.dto");
const admin_model_1 = require("./models/admin.model");
const swagger_1 = require("@nestjs/swagger");
const self_admin_guard_1 = require("../common/guards/self-admin.guard");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
const user_model_1 = require("../users/models/user.model");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    registration(createAdminDto, res) {
        return this.adminService.registration(createAdminDto, res);
    }
    login(loginUserDto, res) {
        return this.adminService.login(loginUserDto, res);
    }
    logout(refreshToken, res) {
        return this.adminService.logout(refreshToken, res);
    }
    refresh(id, refreshToken, res) {
        return this.adminService.refreshToken(+id, refreshToken, res);
    }
    findAll() {
        return this.adminService.findAllAdmins();
    }
    findOne(id) {
        return this.adminService.findAdminById(+id);
    }
    update(id, updateAdminDto) {
        return this.adminService.updateAdmin(+id, updateAdminDto);
    }
    remove(id) {
        return this.adminService.removeAdmin(+id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.UseGuards)(self_admin_guard_1.AdminGuard),
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Registration admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.Post)('registration'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "registration", null);
__decorate([
    (0, common_1.UseGuards)(user_model_1.User),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Login admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_admin_dto_1.LoginAdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Logout admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.Post)('logout'),
    __param(0, (0, cookie_getter_decorator_1.Cookiegetter)('refresh_token')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "logout", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh admin by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.Post)(':id/refresh'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, cookie_getter_decorator_1.Cookiegetter)('refresh_token')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "refresh", null);
__decorate([
    (0, common_1.UseGuards)(self_admin_guard_1.AdminGuard),
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [admin_model_1.Admin] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get admin by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(self_admin_guard_1.AdminGuard),
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update admin by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(self_admin_guard_1.AdminGuard),
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete admin by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map