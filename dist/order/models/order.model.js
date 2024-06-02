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
exports.Order = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const business_model_1 = require("../../business/models/business.model");
const user_model_1 = require("../../users/models/user.model");
const order_driver_model_1 = require("../../order_driver/model/order_driver.model");
const order_item_model_1 = require("../../order_items/model/order_item.model");
const cart_model_1 = require("../../cart/model/cart.model");
let Order = class Order extends sequelize_typescript_1.Model {
    async recalculateTotalPrice() {
        const orderItems = await this.$get('orderItems');
        const totalPrice = orderItems.reduce((sum, item) => sum + item.totalPrice, 0);
        await this.update({ totalPrice });
    }
};
exports.Order = Order;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Order ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 16000, description: 'Total_priceOf_products' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1500, description: 'Shipping price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 7000,
    }),
    __metadata("design:type", Number)
], Order.prototype, "shipping_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1500, description: 'Total price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Client ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Order.prototype, "client_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Order.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => business_model_1.Business),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Order.prototype, "business_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => business_model_1.Business),
    __metadata("design:type", business_model_1.Business)
], Order.prototype, "business", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Cart ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => cart_model_1.Cart),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Order.prototype, "cart_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cart_model_1.Cart),
    __metadata("design:type", cart_model_1.Cart)
], Order.prototype, "cart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cash', description: 'Payment type' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Order.prototype, "payment_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Online', description: 'Status' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'),
        defaultValue: 'pending',
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Please deliver as soon as possible!',
        description: 'Comment of order',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Order.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => order_driver_model_1.OrderDriver),
    __metadata("design:type", order_driver_model_1.OrderDriver)
], Order.prototype, "order_driver", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_item_model_1.OrderItem),
    __metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
exports.Order = Order = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Order' })
], Order);
//# sourceMappingURL=order.model.js.map