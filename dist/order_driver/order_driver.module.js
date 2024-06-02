"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDriverModule = void 0;
const common_1 = require("@nestjs/common");
const order_driver_controller_1 = require("./order_driver.controller");
const order_driver_service_1 = require("./order_driver.service");
const sequelize_1 = require("@nestjs/sequelize");
const order_driver_model_1 = require("./model/order_driver.model");
const jwt_1 = require("@nestjs/jwt");
let OrderDriverModule = class OrderDriverModule {
};
exports.OrderDriverModule = OrderDriverModule;
exports.OrderDriverModule = OrderDriverModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([order_driver_model_1.OrderDriver]), jwt_1.JwtModule],
        controllers: [order_driver_controller_1.OrderDriversController],
        providers: [order_driver_service_1.OrderDriversService],
        exports: [order_driver_service_1.OrderDriversService],
    })
], OrderDriverModule);
//# sourceMappingURL=order_driver.module.js.map