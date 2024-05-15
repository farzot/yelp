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
exports.SmallCategory = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const business_model_1 = require("../../business/models/business.model");
const big_category_model_1 = require("../../big_category/models/big_category.model");
let SmallCategory = class SmallCategory extends sequelize_typescript_1.Model {
};
exports.SmallCategory = SmallCategory;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Small_category ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SmallCategory.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Small_category name',
        description: 'Small_category name',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], SmallCategory.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Description1',
        description: 'Small_category description',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], SmallCategory.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Big_category ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => big_category_model_1.BigCategory),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SmallCategory.prototype, "big_category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => big_category_model_1.BigCategory),
    __metadata("design:type", big_category_model_1.BigCategory)
], SmallCategory.prototype, "big_category", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => business_model_1.Business),
    __metadata("design:type", Array)
], SmallCategory.prototype, "business", void 0);
exports.SmallCategory = SmallCategory = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Small_category' })
], SmallCategory);
//# sourceMappingURL=small_category.model.js.map