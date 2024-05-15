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
exports.Address = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../users/models/user.model");
let Address = class Address extends sequelize_typescript_1.Model {
};
exports.Address = Address;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Address ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'City name', description: 'City' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'District name', description: 'District' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Address.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Street name', description: 'Street' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Home number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Address.prototype, "home_number", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_model_1.User),
    __metadata("design:type", Array)
], Address.prototype, "User", void 0);
exports.Address = Address = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Address' })
], Address);
//# sourceMappingURL=address.model.js.map