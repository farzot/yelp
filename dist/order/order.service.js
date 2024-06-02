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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("./models/order.model");
const cart_service_1 = require("../cart/cart.service");
const product_or_service_service_1 = require("../product_or_service/product_or_service.service");
const cart_model_1 = require("../cart/model/cart.model");
const order_item_model_1 = require("../order_items/model/order_item.model");
const order_items_service_1 = require("../order_items/order_items.service");
let OrderService = class OrderService {
    constructor(orderRepo, cartModel, orderItemModel, orderItemService, cartService, productService) {
        this.orderRepo = orderRepo;
        this.cartModel = cartModel;
        this.orderItemModel = orderItemModel;
        this.orderItemService = orderItemService;
        this.cartService = cartService;
        this.productService = productService;
    }
    async create(createOrderDto) {
        const cart = await this.cartModel.findByPk(createOrderDto.cart_id, {
            include: ['cartItems'],
        });
        console.log('Order Service created');
        const order = await this.orderRepo.create({
            cart_id: createOrderDto.cart_id,
            client_id: cart.client_id,
            business_id: cart.business_id,
            status: 'processing',
            payment_type: createOrderDto.payment_type,
            comment: createOrderDto.comment,
            totalPrice: cart.totalPrice,
        });
        order.total_price = order.totalPrice + order.shipping_price;
        if (cart) {
            const orderItems = cart.cartItems.map((cartItem) => ({
                order_id: order.id,
                product_id: cartItem.productId,
                quantity: cartItem.quantity,
                totalPrice: cartItem.totalPrice,
            }));
            const orderItem = await this.orderItemModel.bulkCreate(orderItems);
            console.log('bulkCreate tagidagi console');
            orderItem.map((item) => {
                console.log("Prodcut_id", item.product_id);
                this.productService.addQuantityOfSelling(item.product_id, item.quantity);
            });
        }
        await this.cartModel.update({ status: 'converted' }, { where: { id: createOrderDto.cart_id } });
        await order.save();
        return order;
    }
    async findAll() {
        try {
            const order = await this.orderRepo.findAll({ include: { all: true } });
            return { order };
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            const oredercha = await this.orderRepo.findByPk(id, {
                include: { all: true },
            });
            return oredercha;
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateOrderDto) {
        try {
            const check = await this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Order with ID ${id} not found`);
            }
            return await this.orderRepo.update(updateOrderDto, { where: { id } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const check = await this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Order with ID ${id} not found`);
            }
            return await this.orderRepo.destroy({ where: { id } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateStatus(id, updateOrderStatusDto) {
        const order = await this.findOne(id);
        return order.update({ status: updateOrderStatusDto.status });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_model_1.Order)),
    __param(1, (0, sequelize_1.InjectModel)(cart_model_1.Cart)),
    __param(2, (0, sequelize_1.InjectModel)(order_item_model_1.OrderItem)),
    __metadata("design:paramtypes", [Object, Object, Object, order_items_service_1.OrderItemsService,
        cart_service_1.CartService,
        product_or_service_service_1.ProductOrServiceService])
], OrderService);
//# sourceMappingURL=order.service.js.map