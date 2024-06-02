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
exports.CartItemsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const cart_item_model_1 = require("./model/cart_item.model");
const cart_service_1 = require("../cart/cart.service");
const product_or_service_service_1 = require("../product_or_service/product_or_service.service");
let CartItemsService = class CartItemsService {
    constructor(cartItemsRepo, cartService, productSer) {
        this.cartItemsRepo = cartItemsRepo;
        this.cartService = cartService;
        this.productSer = productSer;
    }
    async create(createCartItemDto) {
        try {
            const product = await this.productSer.findOne(createCartItemDto.productId);
            const cart = await this.cartService.findCartByID(createCartItemDto.cartId);
            if (cart.business_id !== product.business_id) {
                throw new common_1.NotFoundException('You are not authorized to add this product to this cart');
            }
            if (product.is_available_onlineOrders === false) {
                throw new common_1.NotFoundException('This product is not available for online orders');
            }
            const check = await this.cartItemsRepo.findOne({
                where: { cartId: createCartItemDto.cartId, productId: createCartItemDto.productId },
            });
            if (check) {
                throw new common_1.NotFoundException('This product is already added to this cart');
            }
            const cartItem = await this.cartItemsRepo.create(createCartItemDto);
            await this.cartService.recalculateTotalPrice(cartItem.cartId);
            return cartItem;
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.cartItemsRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.cartItemsRepo.findByPk(id, {
                include: { all: true },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateCartItemDto) {
        try {
            const cartItem = await this.findOne(id);
            const updatedCartItem = await cartItem.update(updateCartItemDto);
            await this.cartService.recalculateTotalPrice(updatedCartItem.cartId);
            return updatedCartItem;
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const cartItem = await this.findOne(id);
            await this.cartItemsRepo.destroy({ where: { id } });
            await this.cartService.recalculateTotalPrice(cartItem.cartId);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneByCartID(id) {
        try {
            return await this.cartItemsRepo.findOne({
                where: { cartId: id },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async increaseQuantity(id, amount) {
        const cartItem = await this.findOne(id);
        await cartItem.increaseQuantity(amount);
        return cartItem;
    }
    async decreaseQuantity(id, amount) {
        const cartItem = await this.findOne(id);
        await cartItem.decreaseQuantity(amount);
        return cartItem;
    }
};
exports.CartItemsService = CartItemsService;
exports.CartItemsService = CartItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(cart_item_model_1.CartItem)),
    __metadata("design:paramtypes", [Object, cart_service_1.CartService,
        product_or_service_service_1.ProductOrServiceService])
], CartItemsService);
//# sourceMappingURL=cart_items.service.js.map