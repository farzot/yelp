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
exports.Driver = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const driver_car_model_1 = require("../../driver_car/model/driver_car.model");
const order_driver_model_1 = require("../../order_driver/model/order_driver.model");
let Driver = class Driver extends sequelize_typescript_1.Model {
};
exports.Driver = Driver;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Driver.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ali', description: 'Driver first name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Driver.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Valiyev', description: 'Driver last name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Driver.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ali@gamil.com', description: 'Driver email' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Driver.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123ali', description: 'Driver email password' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Driver.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AD012****', description: 'Driver passportID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Driver.prototype, "passportID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '86006214****', description: 'Driver card number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Driver.prototype, "card_number", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => driver_car_model_1.DriverCar),
    __metadata("design:type", Array)
], Driver.prototype, "driver_car", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_driver_model_1.OrderDriver),
    __metadata("design:type", Array)
], Driver.prototype, "order_driver", void 0);
exports.Driver = Driver = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Driver' })
], Driver);
//# sourceMappingURL=driver.model.js.map