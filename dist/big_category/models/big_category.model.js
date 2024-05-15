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
exports.BigCategory = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const business_model_1 = require("../../business/models/business.model");
const small_category_model_1 = require("../../small_category/models/small_category.model");
let BigCategory = class BigCategory extends sequelize_typescript_1.Model {
};
exports.BigCategory = BigCategory;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'BigCategory ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], BigCategory.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "BigCategory's name",
        description: "BigCategory's name",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], BigCategory.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "BigCategory's description",
        description: "BigCategory's description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], BigCategory.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => business_model_1.Business),
    __metadata("design:type", Array)
], BigCategory.prototype, "business", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => small_category_model_1.SmallCategory),
    __metadata("design:type", Array)
], BigCategory.prototype, "small_category", void 0);
exports.BigCategory = BigCategory = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Big_category' })
], BigCategory);
//# sourceMappingURL=big_category.model.js.map