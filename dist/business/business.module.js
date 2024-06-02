"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const business_controller_1 = require("./business.controller");
const sequelize_1 = require("@nestjs/sequelize");
const business_model_1 = require("./models/business.model");
const jwt_1 = require("@nestjs/jwt");
const business_service_1 = require("./business.service");
const business_images_module_1 = require("../business_images/business_images.module");
const star_model_1 = require("../stars/models/star.model");
const product_or_service_model_1 = require("../product_or_service/models/product_or_service.model");
let BusinessModule = class BusinessModule {
};
exports.BusinessModule = BusinessModule;
exports.BusinessModule = BusinessModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([business_model_1.Business, star_model_1.Stars, product_or_service_model_1.ProductOrService]), jwt_1.JwtModule, business_images_module_1.BusinessImagesModule],
        controllers: [business_controller_1.BusinessController],
        providers: [business_service_1.BusinessService, jwt_1.JwtService],
        exports: [business_service_1.BusinessService]
    })
], BusinessModule);
//# sourceMappingURL=business.module.js.map