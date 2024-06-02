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
exports.OrderDriversController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_guard_1 = require("../common/guards/user.guard");
const order_driver_service_1 = require("./order_driver.service");
const order_driver_model_1 = require("./model/order_driver.model");
const create_order_driver_dto_1 = require("./dto/create-order_driver.dto");
const update_order_driver_dto_1 = require("./dto/update-order_driver.dto");
let OrderDriversController = class OrderDriversController {
    constructor(orderDriversService) {
        this.orderDriversService = orderDriversService;
    }
    async create(createOrderDriverDto) {
        try {
            return await this.orderDriversService.create(createOrderDriverDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.orderDriversService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.orderDriversService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateOrderDriverDto) {
        return await this.orderDriversService.update(+id, updateOrderDriverDto);
    }
    async remove(id) {
        try {
            return await this.orderDriversService.remove(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.OrderDriversController = OrderDriversController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Create a order_driver' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_driver_model_1.OrderDriver }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_driver_dto_1.CreateOrderDriverDto]),
    __metadata("design:returntype", Promise)
], OrderDriversController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get all order_driver' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [order_driver_model_1.OrderDriver] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderDriversController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get order_driver by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_driver_model_1.OrderDriver }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDriversController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update order_driver by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_driver_model_1.OrderDriver }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_driver_dto_1.UpdateOrderDriverDto]),
    __metadata("design:returntype", Promise)
], OrderDriversController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete order_driver by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDriversController.prototype, "remove", null);
exports.OrderDriversController = OrderDriversController = __decorate([
    (0, swagger_1.ApiTags)('OrderDriver'),
    (0, common_1.Controller)('order_driver'),
    __metadata("design:paramtypes", [order_driver_service_1.OrderDriversService])
], OrderDriversController);
//# sourceMappingURL=order_driver.controller.js.map