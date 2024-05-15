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
exports.Owner = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Owner = class Owner extends sequelize_typescript_1.Model {
};
exports.Owner = Owner;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Owner ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Owner.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Owner experience ',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Owner.prototype, "experience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ali Asia ',
        description: 'Depend business on the owner',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Owner.prototype, "depend_businesses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10000,
        description: 'Total commercial',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Owner.prototype, "total_commercial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '@example',
        description: 'Social media',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Owner.prototype, "social_media", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Is active',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Owner.prototype, "is_active", void 0);
exports.Owner = Owner = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Owner' })
], Owner);
//# sourceMappingURL=owner.model.js.map