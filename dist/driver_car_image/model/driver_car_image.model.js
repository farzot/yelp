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
exports.DriverCarImage = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const driver_car_model_1 = require("../../driver_car/model/driver_car.model");
let DriverCarImage = class DriverCarImage extends sequelize_typescript_1.Model {
};
exports.DriverCarImage = DriverCarImage;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Car Image ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], DriverCarImage.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'car.png', description: 'Image' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], DriverCarImage.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Car ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => driver_car_model_1.DriverCar),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], DriverCarImage.prototype, "car_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => driver_car_model_1.DriverCar),
    __metadata("design:type", driver_car_model_1.DriverCar)
], DriverCarImage.prototype, "driver_Car", void 0);
exports.DriverCarImage = DriverCarImage = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'car_images' })
], DriverCarImage);
//# sourceMappingURL=driver_car_image.model.js.map