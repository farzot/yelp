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
exports.OrderDriver = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("../../order/models/order.model");
const driver_model_1 = require("../../driver/model/driver.model");
let OrderDriver = class OrderDriver extends sequelize_typescript_1.Model {
};
exports.OrderDriver = OrderDriver;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver order ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDriver.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12 km', description: 'Distance' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDriver.prototype, "distance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '17.02.2024 12:05', description: 'Get product time' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], OrderDriver.prototype, "get_product_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '17.02.2024 12:27',
        description: 'Arrived product time',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], OrderDriver.prototype, "arrived_product_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '17 min', description: 'Duration' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], OrderDriver.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => driver_model_1.Driver),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDriver.prototype, "driver_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => driver_model_1.Driver),
    __metadata("design:type", driver_model_1.Driver)
], OrderDriver.prototype, "driver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Order ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => order_model_1.Order),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDriver.prototype, "order_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_model_1.Order),
    __metadata("design:type", order_model_1.Order)
], OrderDriver.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Good job!', description: 'Comment' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], OrderDriver.prototype, "comment", void 0);
exports.OrderDriver = OrderDriver = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'OrderDriver' })
], OrderDriver);
//# sourceMappingURL=order_driver.model.js.map