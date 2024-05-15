"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const small_category_service_1 = require("./small_category.service");
const small_category_controller_1 = require("./small_category.controller");
const sequelize_1 = require("@nestjs/sequelize");
const small_category_model_1 = require("./models/small_category.model");
const jwt_1 = require("@nestjs/jwt");
let SmallCategoryModule = class SmallCategoryModule {
};
exports.SmallCategoryModule = SmallCategoryModule;
exports.SmallCategoryModule = SmallCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([small_category_model_1.SmallCategory]), jwt_1.JwtModule],
        controllers: [small_category_controller_1.SmallCategoryController],
        providers: [small_category_service_1.SmallCategoryService, jwt_1.JwtService],
    })
], SmallCategoryModule);
//# sourceMappingURL=small_category.module.js.map