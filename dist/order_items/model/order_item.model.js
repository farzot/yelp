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
exports.OrderItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("../../order/models/order.model");
const product_or_service_model_1 = require("../../product_or_service/models/product_or_service.model");
const swagger_1 = require("@nestjs/swagger");
let OrderItem = class OrderItem extends sequelize_typescript_1.Model {
    static async calculateTotalPrice(instance) {
        const product = await instance.$get('product');
        instance.totalPrice = product.price * instance.quantity;
    }
    async increaseQuantity(amount = 1) {
        this.quantity += amount;
        await this.save();
        await this.order.recalculateTotalPrice();
    }
    async decreaseQuantity(amount = 1) {
        if (this.quantity - amount < 1) {
            throw new Error('Quantity cannot be less than 1');
        }
        this.quantity -= amount;
        await this.save();
        await this.order.recalculateTotalPrice();
    }
};
exports.OrderItem = OrderItem;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'OrderItem ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Order ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => order_model_1.Order),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "order_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_model_1.Order),
    __metadata("design:type", order_model_1.Order)
], OrderItem.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Product ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_or_service_model_1.ProductOrService),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_or_service_model_1.ProductOrService),
    __metadata("design:type", product_or_service_model_1.ProductOrService)
], OrderItem.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Quantity of products' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Total price of products' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "totalPrice", void 0);
__decorate([
    sequelize_typescript_1.BeforeSave,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderItem]),
    __metadata("design:returntype", Promise)
], OrderItem, "calculateTotalPrice", null);
exports.OrderItem = OrderItem = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'OrderItems' })
], OrderItem);
//# sourceMappingURL=order_item.model.js.map