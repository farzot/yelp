"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessImagesModule = void 0;
const common_1 = require("@nestjs/common");
const business_images_service_1 = require("./business_images.service");
const business_images_controller_1 = require("./business_images.controller");
const sequelize_1 = require("@nestjs/sequelize");
const business_image_model_1 = require("./model/business_image.model");
const jwt_1 = require("@nestjs/jwt");
let BusinessImagesModule = class BusinessImagesModule {
};
exports.BusinessImagesModule = BusinessImagesModule;
exports.BusinessImagesModule = BusinessImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([business_image_model_1.BusinessImage])],
        controllers: [business_images_controller_1.BusinessImagesController],
        providers: [business_images_service_1.BusinessImagesService, jwt_1.JwtService],
        exports: [business_images_service_1.BusinessImagesService]
    })
], BusinessImagesModule);
//# sourceMappingURL=business_images.module.js.map