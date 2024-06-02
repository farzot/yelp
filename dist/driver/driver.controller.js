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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const driver_service_1 = require("./driver.service");
const create_driver_dto_1 = require("./dto/create-driver.dto");
const update_driver_dto_1 = require("./dto/update-driver.dto");
const swagger_1 = require("@nestjs/swagger");
const driver_model_1 = require("./model/driver.model");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    async createDriver(createDriverDto) {
        try {
            return await this.driverService.createDriver(createDriverDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllDriver() {
        try {
            return await this.driverService.findAllDriver();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findDriverByID(id) {
        try {
            return await this.driverService.findDriverByID(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findDriverByFName(firstName) {
        try {
            return await this.driverService.findDriverByFName(firstName);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findDriverByPassport(pasport_seriya) {
        try {
            return await this.driverService.findDriverByPassport(pasport_seriya);
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateDriverDto) {
        try {
            return await this.driverService.update(+id, updateDriverDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            return await this.driverService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new driver' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_model_1.Driver }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_driver_dto_1.CreateDriverDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "createDriver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all driver' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [driver_model_1.Driver] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findAllDriver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get driver by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_model_1.Driver }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findDriverByID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get driver by first name' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_model_1.Driver }),
    (0, common_1.Get)(':first_name'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findDriverByFName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get driver by pasport number' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_model_1.Driver }),
    (0, common_1.Get)(':passport'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findDriverByPassport", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update driver by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_model_1.Driver }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_driver_dto_1.UpdateDriverDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete driver by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "remove", null);
exports.DriverController = DriverController = __decorate([
    (0, swagger_1.ApiTags)('Driver'),
    (0, common_1.Controller)('driver'),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
//# sourceMappingURL=driver.controller.js.map