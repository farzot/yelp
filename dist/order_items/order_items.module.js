"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsModule = void 0;
const common_1 = require("@nestjs/common");
const order_items_service_1 = require("./order_items.service");
const order_items_controller_1 = require("./order_items.controller");
const sequelize_1 = require("@nestjs/sequelize");
const order_item_model_1 = require("./model/order_item.model");
const product_or_service_module_1 = require("../product_or_service/product_or_service.module");
const jwt_1 = require("@nestjs/jwt");
let OrderItemsModule = class OrderItemsModule {
};
exports.OrderItemsModule = OrderItemsModule;
exports.OrderItemsModule = OrderItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([order_item_model_1.OrderItem]), product_or_service_module_1.ProductOrServiceModule, jwt_1.JwtModule],
        controllers: [order_items_controller_1.OrderItemsController],
        providers: [order_items_service_1.OrderItemsService],
        exports: [order_items_service_1.OrderItemsService],
    })
], OrderItemsModule);
//# sourceMappingURL=order_items.module.js.map