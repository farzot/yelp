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
exports.Business = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const work_time_model_1 = require("../../work_time/models/work_time.model");
const big_category_model_1 = require("../../big_category/models/big_category.model");
const small_category_model_1 = require("../../small_category/models/small_category.model");
const commentary_model_1 = require("../../commentary/models/commentary.model");
const order_model_1 = require("../../order/models/order.model");
const star_model_1 = require("../../stars/models/star.model");
const product_or_service_model_1 = require("../../product_or_service/models/product_or_service.model");
const user_model_1 = require("../../users/models/user.model");
const business_image_model_1 = require("../../business_images/model/business_image.model");
let Business = class Business extends sequelize_typescript_1.Model {
};
exports.Business = Business;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Business.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ShoxBaraka', description: "Business's name" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'example@gmail.com',
        description: "Business's email",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998990001122', description: "Business's phone" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Akay city', description: "Business's location" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Akay city, Marvarid street',
        description: "Business's address",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'example.com',
        description: "Business's web address",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "web_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business big category ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => big_category_model_1.BigCategory),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Business.prototype, "big_category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => big_category_model_1.BigCategory),
    __metadata("design:type", big_category_model_1.BigCategory)
], Business.prototype, "big_category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business small category ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => small_category_model_1.SmallCategory),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Business.prototype, "small_category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => small_category_model_1.SmallCategory),
    __metadata("design:type", small_category_model_1.SmallCategory)
], Business.prototype, "small_category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business average star' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Business.prototype, "average_star", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Business description',
        description: "Business's description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Extra information about the business',
        description: 'There is wi-fi, free shipping and international shipping services available for business customers.....',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "extra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business reviews' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Business.prototype, "reviews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business likes' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Business.prototype, "likes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Business owner ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Business.prototype, "owner_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Business.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Business is active' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], Business.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Business is yelp guaranteed' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], Business.prototype, "is_yelp_guaranteed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Business is verified license' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], Business.prototype, "is_verified_license", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://t.me/ali_valiyev',
        description: "Business's Telegram link",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Business.prototype, "social_media", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => order_model_1.Order),
    __metadata("design:type", order_model_1.Order)
], Business.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => commentary_model_1.Commentary),
    __metadata("design:type", Array)
], Business.prototype, "commentary", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => star_model_1.Stars),
    __metadata("design:type", Array)
], Business.prototype, "stars", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => work_time_model_1.WorkTime),
    __metadata("design:type", Array)
], Business.prototype, "workTime", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_or_service_model_1.ProductOrService),
    __metadata("design:type", Array)
], Business.prototype, "product_or_service", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => business_image_model_1.BusinessImage),
    __metadata("design:type", Array)
], Business.prototype, "business_image", void 0);
exports.Business = Business = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Business' })
], Business);
//# sourceMappingURL=business.model.js.map