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
exports.DriverCarsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const driver_car_service_1 = require("./driver_car.service");
const driver_car_model_1 = require("./model/driver_car.model");
const create_driver_car_dto_1 = require("./dto/create-driver_car.dto");
const update_driver_car_dto_1 = require("./dto/update-driver_car.dto");
let DriverCarsController = class DriverCarsController {
    constructor(driverCarsService) {
        this.driverCarsService = driverCarsService;
    }
    async createDriverCar(createDriverCarDto) {
        try {
            return await this.driverCarsService.create(createDriverCarDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAllDriverCar() {
        try {
            return await this.driverCarsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOneDriverCar(id) {
        try {
            return await this.driverCarsService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async updateDriverCar(id, updateDriverCarDto) {
        return await this.driverCarsService.update(+id, updateDriverCarDto);
    }
    async removeDriverCar(id) {
        try {
            return await this.driverCarsService.remove(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.DriverCarsController = DriverCarsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Create a car image' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_car_model_1.DriverCar }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_driver_car_dto_1.CreateDriverCarDto]),
    __metadata("design:returntype", Promise)
], DriverCarsController.prototype, "createDriverCar", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get all car image' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [driver_car_model_1.DriverCar] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverCarsController.prototype, "findAllDriverCar", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get car image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_car_model_1.DriverCar }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverCarsController.prototype, "findOneDriverCar", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update car image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_car_model_1.DriverCar }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_driver_car_dto_1.UpdateDriverCarDto]),
    __metadata("design:returntype", Promise)
], DriverCarsController.prototype, "updateDriverCar", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete car image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverCarsController.prototype, "removeDriverCar", null);
exports.DriverCarsController = DriverCarsController = __decorate([
    (0, swagger_1.ApiTags)('DriverCar'),
    (0, common_1.Controller)('driver_car'),
    __metadata("design:paramtypes", [driver_car_service_1.DriverCarsService])
], DriverCarsController);
//# sourceMappingURL=driver_car.controller.js.map