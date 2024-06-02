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
exports.Cart = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../users/models/user.model");
const order_model_1 = require("../../order/models/order.model");
const cart_item_model_1 = require("../../cart_items/model/cart_item.model");
const business_model_1 = require("../../business/models/business.model");
let Cart = class Cart extends sequelize_typescript_1.Model {
    async recalculateTotalPrice() {
        const cartItems = await this.$get('cartItems');
        const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
        await this.update({ totalPrice });
    }
};
exports.Cart = Cart;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Cart ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Client ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "client_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Cart.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => business_model_1.Business),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "business_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => business_model_1.Business),
    __metadata("design:type", business_model_1.Business)
], Cart.prototype, "business", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Cart status' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('active', 'completed', 'converted'),
        defaultValue: 'active',
    }),
    __metadata("design:type", String)
], Cart.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Total price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "totalPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cart_item_model_1.CartItem),
    __metadata("design:type", Array)
], Cart.prototype, "cartItems", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => order_model_1.Order),
    __metadata("design:type", order_model_1.Order)
], Cart.prototype, "order", void 0);
exports.Cart = Cart = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Cart' })
], Cart);
//# sourceMappingURL=cart.model.js.map