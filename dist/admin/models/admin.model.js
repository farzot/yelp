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
exports.Admin = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Admin = class Admin extends sequelize_typescript_1.Model {
};
exports.Admin = Admin;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Unique identifier of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Admin.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'adminName',
        description: 'Name of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin',
        description: 'Login of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'telegram_link',
        description: 'Telegram link of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "telegram_link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin_photo',
        description: 'Photo of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "admin_photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hashed_password',
        description: 'Hashed password of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'is_active',
        description: 'Is active of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'is_creater',
        description: 'Is creater of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_creater", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hashed_refresh_token',
        description: 'Hashed refresh token of the admin',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "hashed_refresh_token", void 0);
exports.Admin = Admin = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'admin' })
], Admin);
//# sourceMappingURL=admin.model.js.map