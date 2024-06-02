"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverCarImageModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const driver_car_image_model_1 = require("./model/driver_car_image.model");
const driver_car_image_controller_1 = require("./driver_car_image.controller");
const driver_car_image_service_1 = require("./driver_car_image.service");
const jwt_1 = require("@nestjs/jwt");
let DriverCarImageModule = class DriverCarImageModule {
};
exports.DriverCarImageModule = DriverCarImageModule;
exports.DriverCarImageModule = DriverCarImageModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([driver_car_image_model_1.DriverCarImage]), jwt_1.JwtModule],
        controllers: [driver_car_image_controller_1.DriverCarImagesController],
        providers: [driver_car_image_service_1.DriverCarImagesService],
    })
], DriverCarImageModule);
//# sourceMappingURL=driver_car_image.module.js.map