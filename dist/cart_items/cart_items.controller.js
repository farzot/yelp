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
exports.CartItemsController = void 0;
const common_1 = require("@nestjs/common");
const cart_items_service_1 = require("./cart_items.service");
const create_cart_item_dto_1 = require("./dto/create-cart_item.dto");
const update_cart_item_dto_1 = require("./dto/update-cart_item.dto");
const swagger_1 = require("@nestjs/swagger");
const cart_item_model_1 = require("./model/cart_item.model");
let CartItemsController = class CartItemsController {
    constructor(cartItemsService) {
        this.cartItemsService = cartItemsService;
    }
    async createCartItem(createCartItemDto) {
        try {
            return await this.cartItemsService.create(createCartItemDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAllCartItems() {
        try {
            return await this.cartItemsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOneCartItem(id) {
        try {
            return await this.cartItemsService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async updateCartItem(id, updateCartItemDto) {
        try {
            return await this.cartItemsService.update(+id, updateCartItemDto);
        }
        catch (error) {
            return error;
        }
    }
    async removeCartItem(id) {
        try {
            return await this.cartItemsService.remove(+id);
        }
        catch (error) {
            return error;
        }
    }
    async findOneByCartID(id) {
        try {
            return await this.cartItemsService.findOneByCartID(+id);
        }
        catch (error) {
            return error;
        }
    }
};
exports.CartItemsController = CartItemsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Create a cart item' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_model_1.CartItem }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "createCartItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get all cart items' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_model_1.CartItem }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "findAllCartItems", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Get cart item by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_model_1.CartItem }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "findOneCartItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update cart item by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_model_1.CartItem }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_item_dto_1.UpdateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "updateCartItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete cart item by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_model_1.CartItem }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "removeCartItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get cart item by cart id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_model_1.CartItem }),
    (0, common_1.Get)('cart/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "findOneByCartID", null);
exports.CartItemsController = CartItemsController = __decorate([
    (0, swagger_1.ApiTags)('Cart_items'),
    (0, common_1.Controller)('cart-items'),
    __metadata("design:paramtypes", [cart_items_service_1.CartItemsService])
], CartItemsController);
//# sourceMappingURL=cart_items.controller.js.map