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
exports.OrderDetail = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("../../order/models/order.model");
const product_or_service_model_1 = require("../../product_or_service/models/product_or_service.model");
let OrderDetail = class OrderDetail extends sequelize_typescript_1.Model {
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Order ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => order_model_1.Order),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "order_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_model_1.Order),
    __metadata("design:type", Array)
], OrderDetail.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Product ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_or_service_model_1.ProductOrService),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "product_or_service_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_or_service_model_1.ProductOrService),
    __metadata("design:type", product_or_service_model_1.ProductOrService)
], OrderDetail.prototype, "product_or_service", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Quantity' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 125, description: 'Price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cash', description: 'Payment type' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "payment_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Online', description: 'Status' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "status", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Order_detail' })
], OrderDetail);
//# sourceMappingURL=order_detail.model.js.map