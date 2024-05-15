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
exports.Star = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const business_model_1 = require("../../business/models/business.model");
const user_model_1 = require("../../users/models/user.model");
let Star = class Star extends sequelize_typescript_1.Model {
};
exports.Star = Star;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Star ID' }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Star.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Client ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Star.prototype, "client_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Star.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Business ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => business_model_1.Business),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Star.prototype, "business_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => business_model_1.Business),
    __metadata("design:type", business_model_1.Business)
], Star.prototype, "business", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Number of stars by 5' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Star.prototype, "star", void 0);
exports.Star = Star = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Star' })
], Star);
//# sourceMappingURL=star.model.js.map