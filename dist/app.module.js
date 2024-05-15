"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const small_category_module_1 = require("./small_category/small_category.module");
const big_category_module_1 = require("./big_category/big_category.module");
const business_module_1 = require("./business/business.module");
const work_time_module_1 = require("./work_time/work_time.module");
const owner_module_1 = require("./owner/owner.module");
const order_module_1 = require("./order/order.module");
const commentary_module_1 = require("./commentary/commentary.module");
const stars_module_1 = require("./stars/stars.module");
const address_module_1 = require("./address/address.module");
const address_model_1 = require("./address/model/address.model");
const big_category_model_1 = require("./big_category/models/big_category.model");
const business_model_1 = require("./business/models/business.model");
const commentary_model_1 = require("./commentary/models/commentary.model");
const order_model_1 = require("./order/models/order.model");
const owner_model_1 = require("./owner/models/owner.model");
const small_category_model_1 = require("./small_category/models/small_category.model");
const star_model_1 = require("./stars/models/star.model");
const work_time_model_1 = require("./work_time/models/work_time.model");
const order_detail_module_1 = require("./order_detail/order_detail.module");
const order_detail_model_1 = require("./order_detail/models/order_detail.model");
const product_or_service_module_1 = require("./product_or_service/product_or_service.module");
const product_or_service_model_1 = require("./product_or_service/models/product_or_service.model");
const user_module_1 = require("./users/user.module");
const user_model_1 = require("./users/models/user.model");
const admin_model_1 = require("./admin/models/admin.model");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [admin_model_1.Admin, address_model_1.Address, big_category_model_1.BigCategory, business_model_1.Business, user_model_1.User, commentary_model_1.Commentary, order_model_1.Order, order_detail_model_1.OrderDetail, owner_model_1.Owner, small_category_model_1.SmallCategory, star_model_1.Star, work_time_model_1.WorkTime, product_or_service_model_1.ProductOrService],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
            }),
            small_category_module_1.SmallCategoryModule,
            big_category_module_1.BigCategoryModule,
            business_module_1.BusinessModule,
            work_time_module_1.WorkTimeModule,
            owner_module_1.OwnerModule,
            order_module_1.OrderModule,
            commentary_module_1.CommentaryModule,
            stars_module_1.StarsModule,
            user_module_1.UsersModule,
            order_detail_module_1.OrderDetailModule,
            address_module_1.AddressModule,
            product_or_service_module_1.ProductOrServiceModule,
            admin_module_1.AdminModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map