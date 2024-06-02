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
exports.DriverCarImagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const driver_car_image_model_1 = require("./model/driver_car_image.model");
const create_driver_car_image_dto_1 = require("./dto/create-driver_car_image.dto");
const update_driver_car_image_dto_1 = require("./dto/update-driver_car_image.dto");
const driver_car_image_service_1 = require("./driver_car_image.service");
let DriverCarImagesController = class DriverCarImagesController {
    constructor(driverCarImagesService) {
        this.driverCarImagesService = driverCarImagesService;
    }
    async createCarImage(createDriverCarImageDto) {
        try {
            return await this.driverCarImagesService.create(createDriverCarImageDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAllCarImage() {
        try {
            return await this.driverCarImagesService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findCarImageByID(id) {
        try {
            return await this.driverCarImagesService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async updateCarImage(id, updateDriverCarImageDto) {
        return await this.driverCarImagesService.update(+id, updateDriverCarImageDto);
    }
    async removeCarImage(id) {
        try {
            return await this.driverCarImagesService.remove(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.DriverCarImagesController = DriverCarImagesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Create a Car image' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_car_image_model_1.DriverCarImage }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_driver_car_image_dto_1.CreateDriverCarImageDto]),
    __metadata("design:returntype", Promise)
], DriverCarImagesController.prototype, "createCarImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get all Car image' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [driver_car_image_model_1.DriverCarImage] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverCarImagesController.prototype, "findAllCarImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get Car image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_car_image_model_1.DriverCarImage }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverCarImagesController.prototype, "findCarImageByID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Car image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: driver_car_image_model_1.DriverCarImage }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_driver_car_image_dto_1.UpdateDriverCarImageDto]),
    __metadata("design:returntype", Promise)
], DriverCarImagesController.prototype, "updateCarImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Car image by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverCarImagesController.prototype, "removeCarImage", null);
exports.DriverCarImagesController = DriverCarImagesController = __decorate([
    (0, swagger_1.ApiTags)('DriverCarImage'),
    (0, common_1.Controller)('driver_car_images'),
    __metadata("design:paramtypes", [driver_car_image_service_1.DriverCarImagesService])
], DriverCarImagesController);
//# sourceMappingURL=driver_car_image.controller.js.map