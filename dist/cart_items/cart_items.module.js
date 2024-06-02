"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemsModule = void 0;
const common_1 = require("@nestjs/common");
const cart_items_service_1 = require("./cart_items.service");
const cart_items_controller_1 = require("./cart_items.controller");
const sequelize_1 = require("@nestjs/sequelize");
const cart_item_model_1 = require("./model/cart_item.model");
const cart_module_1 = require("../cart/cart.module");
const product_or_service_module_1 = require("../product_or_service/product_or_service.module");
let CartItemsModule = class CartItemsModule {
};
exports.CartItemsModule = CartItemsModule;
exports.CartItemsModule = CartItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([cart_item_model_1.CartItem]), cart_module_1.CartModule, product_or_service_module_1.ProductOrServiceModule],
        controllers: [cart_items_controller_1.CartItemsController],
        providers: [cart_items_service_1.CartItemsService],
        exports: [cart_items_service_1.CartItemsService],
    })
], CartItemsModule);
//# sourceMappingURL=cart_items.module.js.map