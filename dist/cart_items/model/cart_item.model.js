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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const cart_model_1 = require("../../cart/model/cart.model");
const product_or_service_model_1 = require("../../product_or_service/models/product_or_service.model");
let CartItem = class CartItem extends sequelize_typescript_1.Model {
    static async calculateTotalPrice(instance) {
        const product = await instance.$get('product');
        instance.totalPrice = product.price * instance.quantity;
    }
    async increaseQuantity(amount = 1) {
        this.quantity += amount;
        await this.save();
        await this.cart.recalculateTotalPrice();
    }
    async decreaseQuantity(amount = 1) {
        if (this.quantity - amount < 1) {
            throw new Error('Quantity cannot be less than 1');
        }
        this.quantity -= amount;
        await this.save();
        await this.cart.recalculateTotalPrice();
    }
};
exports.CartItem = CartItem;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Cart_items ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Cart ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => cart_model_1.Cart),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "cartId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cart_model_1.Cart),
    __metadata("design:type", cart_model_1.Cart)
], CartItem.prototype, "cart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Product ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_or_service_model_1.ProductOrService),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_or_service_model_1.ProductOrService),
    __metadata("design:type", product_or_service_model_1.ProductOrService)
], CartItem.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12500, description: 'Quantity of cart items' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "totalPrice", void 0);
__decorate([
    sequelize_typescript_1.BeforeSave,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CartItem]),
    __metadata("design:returntype", Promise)
], CartItem, "calculateTotalPrice", null);
exports.CartItem = CartItem = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Cart_items' })
], CartItem);
//# sourceMappingURL=cart_item.model.js.map