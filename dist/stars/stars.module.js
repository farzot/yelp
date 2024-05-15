"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarsModule = void 0;
const common_1 = require("@nestjs/common");
const stars_service_1 = require("./stars.service");
const stars_controller_1 = require("./stars.controller");
const sequelize_1 = require("@nestjs/sequelize");
const star_model_1 = require("./models/star.model");
const jwt_1 = require("@nestjs/jwt");
let StarsModule = class StarsModule {
};
exports.StarsModule = StarsModule;
exports.StarsModule = StarsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([star_model_1.Star])],
        controllers: [stars_controller_1.StarsController],
        providers: [stars_service_1.StarsService, jwt_1.JwtService],
    })
], StarsModule);
//# sourceMappingURL=stars.module.js.map