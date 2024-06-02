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
exports.OrderItemsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_item_model_1 = require("./model/order_item.model");
const product_or_service_service_1 = require("../product_or_service/product_or_service.service");
let OrderItemsService = class OrderItemsService {
    constructor(orderItemRepo, productService) {
        this.orderItemRepo = orderItemRepo;
        this.productService = productService;
    }
    async create(createOrderItemDto) {
        try {
            console.log("ga OrderItemsService dan salom");
            const orderItem = await this.orderItemRepo.create(createOrderItemDto);
            return orderItem;
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.orderItemRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneById(id) {
        try {
            return await this.orderItemRepo.findByPk(id, {
                include: { all: true },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateOrderItemDto) {
        try {
            const orderItem = await this.findOneById(id);
            if (!orderItem) {
                throw new common_1.NotFoundException(`OrderItem with id ${id} not found`);
            }
            const updatedOrderItem = await orderItem.update(updateOrderItemDto);
            await updatedOrderItem.order.recalculateTotalPrice();
            return updatedOrderItem;
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const orderItem = await this.findOneById(id);
            await orderItem.destroy();
            const order = await orderItem.$get('order');
            await order.recalculateTotalPrice();
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.OrderItemsService = OrderItemsService;
exports.OrderItemsService = OrderItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_item_model_1.OrderItem)),
    __metadata("design:paramtypes", [Object, product_or_service_service_1.ProductOrServiceService])
], OrderItemsService);
//# sourceMappingURL=order_items.service.js.map