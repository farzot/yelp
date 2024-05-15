"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkTimeModule = void 0;
const common_1 = require("@nestjs/common");
const work_time_service_1 = require("./work_time.service");
const work_time_controller_1 = require("./work_time.controller");
const sequelize_1 = require("@nestjs/sequelize");
const work_time_model_1 = require("./models/work_time.model");
const jwt_1 = require("@nestjs/jwt");
let WorkTimeModule = class WorkTimeModule {
};
exports.WorkTimeModule = WorkTimeModule;
exports.WorkTimeModule = WorkTimeModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([work_time_model_1.WorkTime])],
        controllers: [work_time_controller_1.WorkTimeController],
        providers: [work_time_service_1.WorkTimeService, jwt_1.JwtService],
    })
], WorkTimeModule);
//# sourceMappingURL=work_time.module.js.map