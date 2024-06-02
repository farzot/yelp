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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const swagger_1 = require("@nestjs/swagger");
const cart_model_1 = require("./model/cart.model");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async createCart(createCartDto) {
        try {
            return this.cartService.createCart(createCartDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllCart() {
        try {
            return this.cartService.findAllCart();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findCartByID(id) {
        try {
            return this.cartService.findCartByID(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findCartByClientID(id) {
        try {
            return this.cartService.findOneByClientID(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateCartByID(id, updateCartDto) {
        try {
            return this.cartService.updateCartByID(+id, updateCartDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeCartByID(id) {
        try {
            return this.cartService.removeCartByID(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.CartController = CartController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Cart' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_model_1.Cart }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createCart", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all Cart' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [cart_model_1.Cart] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findAllCart", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Cart by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_model_1.Cart }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findCartByID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Cart by clientID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_model_1.Cart }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findCartByClientID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Cart by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_model_1.Cart }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCartByID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Cart by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeCartByID", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('Cart'),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map