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
exports.ProductOrService = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const business_model_1 = require("../../business/models/business.model");
const order_detail_model_1 = require("../../order_detail/models/order_detail.model");
let ProductOrService = class ProductOrService extends sequelize_typescript_1.Model {
};
exports.ProductOrService = ProductOrService;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Product_Service ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductOrService.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Product_Service name', description: 'Product_Service name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductOrService.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Product_Service price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductOrService.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Product_Service is_available_onlineOrders' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], ProductOrService.prototype, "is_available_onlineOrders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => business_model_1.Business),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductOrService.prototype, "business_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => business_model_1.Business),
    __metadata("design:type", business_model_1.Business)
], ProductOrService.prototype, "business", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_detail_model_1.OrderDetail),
    __metadata("design:type", Array)
], ProductOrService.prototype, "order_detail", void 0);
exports.ProductOrService = ProductOrService = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'product_or_service' })
], ProductOrService);
//# sourceMappingURL=product_or_service.model.js.map