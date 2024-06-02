"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("./models/order.model");
const jwt_1 = require("@nestjs/jwt");
const cart_module_1 = require("../cart/cart.module");
const product_or_service_module_1 = require("../product_or_service/product_or_service.module");
const order_items_module_1 = require("../order_items/order_items.module");
const order_item_model_1 = require("../order_items/model/order_item.model");
const cart_model_1 = require("../cart/model/cart.model");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([order_model_1.Order, order_item_model_1.OrderItem, cart_model_1.Cart]),
            jwt_1.JwtModule,
            cart_module_1.CartModule,
            order_items_module_1.OrderItemsModule,
            product_or_service_module_1.ProductOrServiceModule,
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, jwt_1.JwtService],
        exports: [order_service_1.OrderService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map