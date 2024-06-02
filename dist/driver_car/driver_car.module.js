"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverCarModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const driver_car_model_1 = require("./model/driver_car.model");
const driver_car_service_1 = require("./driver_car.service");
const driver_car_controller_1 = require("./driver_car.controller");
let DriverCarModule = class DriverCarModule {
};
exports.DriverCarModule = DriverCarModule;
exports.DriverCarModule = DriverCarModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([driver_car_model_1.DriverCar])],
        controllers: [driver_car_controller_1.DriverCarsController],
        providers: [driver_car_service_1.DriverCarsService],
    })
], DriverCarModule);
//# sourceMappingURL=driver_car.module.js.map