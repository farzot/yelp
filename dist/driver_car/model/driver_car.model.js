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
exports.DriverCar = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const driver_model_1 = require("../../driver/model/driver.model");
const driver_car_image_model_1 = require("../../driver_car_image/model/driver_car_image.model");
let DriverCar = class DriverCar extends sequelize_typescript_1.Model {
};
exports.DriverCar = DriverCar;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver Car ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], DriverCar.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => driver_model_1.Driver),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], DriverCar.prototype, "driver_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => driver_model_1.Driver),
    __metadata("design:type", driver_model_1.Driver)
], DriverCar.prototype, "driver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nexia 1', description: 'Car model' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], DriverCar.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AB123**', description: 'Car number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], DriverCar.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => driver_car_image_model_1.DriverCarImage),
    __metadata("design:type", Array)
], DriverCar.prototype, "driver_car_image", void 0);
exports.DriverCar = DriverCar = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Driver_car' })
], DriverCar);
//# sourceMappingURL=driver_car.model.js.map