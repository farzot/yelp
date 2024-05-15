"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrServiceModule = void 0;
const common_1 = require("@nestjs/common");
const product_or_service_service_1 = require("./product_or_service.service");
const product_or_service_controller_1 = require("./product_or_service.controller");
const sequelize_1 = require("@nestjs/sequelize");
const product_or_service_model_1 = require("./models/product_or_service.model");
const jwt_1 = require("@nestjs/jwt");
let ProductOrServiceModule = class ProductOrServiceModule {
};
exports.ProductOrServiceModule = ProductOrServiceModule;
exports.ProductOrServiceModule = ProductOrServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([product_or_service_model_1.ProductOrService]), jwt_1.JwtModule],
        controllers: [product_or_service_controller_1.ProductOrServiceController],
        providers: [product_or_service_service_1.ProductOrServiceService, jwt_1.JwtService],
    })
], ProductOrServiceModule);
//# sourceMappingURL=product_or_service.module.js.map