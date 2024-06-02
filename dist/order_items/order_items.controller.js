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
exports.OrderItemsController = void 0;
const common_1 = require("@nestjs/common");
const order_items_service_1 = require("./order_items.service");
const create_order_item_dto_1 = require("./dto/create-order_item.dto");
const update_order_item_dto_1 = require("./dto/update-order_item.dto");
const swagger_1 = require("@nestjs/swagger");
const order_item_model_1 = require("./model/order_item.model");
let OrderItemsController = class OrderItemsController {
    constructor(orderItemsService) {
        this.orderItemsService = orderItemsService;
    }
    async create(createOrderItemDto) {
        try {
            return this.orderItemsService.create(createOrderItemDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllOrderItem() {
        try {
            return this.orderItemsService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneByIdOrderItem(id) {
        try {
            return this.orderItemsService.findOneById(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateByIdOrderItem(id, updateOrderItemDto) {
        try {
            return this.orderItemsService.update(+id, updateOrderItemDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeByIdOrderItem(id) {
        try {
            this.orderItemsService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.OrderItemsController = OrderItemsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Order Item' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_item_model_1.OrderItem }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_item_dto_1.CreateOrderItemDto]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all Order Items' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [order_item_model_1.OrderItem] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "findAllOrderItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Order Item by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_item_model_1.OrderItem }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "findOneByIdOrderItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Order Item by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_item_model_1.OrderItem }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_item_dto_1.UpdateOrderItemDto]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "updateByIdOrderItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Order Item by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "removeByIdOrderItem", null);
exports.OrderItemsController = OrderItemsController = __decorate([
    (0, swagger_1.ApiTags)('Order_items'),
    (0, common_1.Controller)('order-items'),
    __metadata("design:paramtypes", [order_items_service_1.OrderItemsService])
], OrderItemsController);
//# sourceMappingURL=order_items.controller.js.map