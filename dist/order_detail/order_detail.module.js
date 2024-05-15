"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_detail_model_1 = require("./models/order_detail.model");
const order_detail_controller_1 = require("./order_detail.controller");
const order_detail_service_1 = require("./order_detail.service");
const jwt_1 = require("@nestjs/jwt");
let OrderDetailModule = class OrderDetailModule {
};
exports.OrderDetailModule = OrderDetailModule;
exports.OrderDetailModule = OrderDetailModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([order_detail_model_1.OrderDetail]), jwt_1.JwtModule],
        controllers: [order_detail_controller_1.OrderDetailController],
        providers: [order_detail_service_1.OrderDetailService, jwt_1.JwtService],
    })
], OrderDetailModule);
//# sourceMappingURL=order_detail.module.js.map