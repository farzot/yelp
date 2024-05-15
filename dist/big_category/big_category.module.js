"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const big_category_service_1 = require("./big_category.service");
const big_category_controller_1 = require("./big_category.controller");
const sequelize_1 = require("@nestjs/sequelize");
const big_category_model_1 = require("./models/big_category.model");
const jwt_1 = require("@nestjs/jwt");
let BigCategoryModule = class BigCategoryModule {
};
exports.BigCategoryModule = BigCategoryModule;
exports.BigCategoryModule = BigCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([big_category_model_1.BigCategory]), jwt_1.JwtModule],
        controllers: [big_category_controller_1.BigCategoryController],
        providers: [big_category_service_1.BigCategoryService, jwt_1.JwtService],
    })
], BigCategoryModule);
//# sourceMappingURL=big_category.module.js.map