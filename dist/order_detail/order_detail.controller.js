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
exports.OrderDetailController = void 0;
const common_1 = require("@nestjs/common");
const order_detail_service_1 = require("./order_detail.service");
const create_order_detail_dto_1 = require("./dto/create-order_detail.dto");
const update_order_detail_dto_1 = require("./dto/update-order_detail.dto");
const swagger_1 = require("@nestjs/swagger");
const order_detail_model_1 = require("./models/order_detail.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let OrderDetailController = class OrderDetailController {
    constructor(orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    async createOrderDetail(createOrderDetailDto) {
        try {
            return this.orderDetailService.create(createOrderDetailDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllOrderDetail() {
        try {
            return this.orderDetailService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneOrderDetail(id) {
        try {
            return this.orderDetailService.findOne(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateOrderDetail(id, updateOrderDetailDto) {
        try {
            return this.orderDetailService.update(+id, updateOrderDetailDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeOrderDetail(id) {
        try {
            return this.orderDetailService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.OrderDetailController = OrderDetailController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new order_detail' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_detail_model_1.OrderDetail }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_detail_dto_1.CreateOrderDetailDto]),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "createOrderDetail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all order_detail' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [order_detail_model_1.OrderDetail] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "findAllOrderDetail", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get order_detail by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_detail_model_1.OrderDetail }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "findOneOrderDetail", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update order_detail by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_detail_model_1.OrderDetail }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_detail_dto_1.UpdateOrderDetailDto]),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "updateOrderDetail", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete order_detail by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "removeOrderDetail", null);
exports.OrderDetailController = OrderDetailController = __decorate([
    (0, swagger_1.ApiTags)('Order_detail'),
    (0, common_1.Controller)('order-detail'),
    __metadata("design:paramtypes", [order_detail_service_1.OrderDetailService])
], OrderDetailController);
//# sourceMappingURL=order_detail.controller.js.map