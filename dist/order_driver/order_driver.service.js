"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDriversService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_driver_model_1 = require("./model/order_driver.model");
let OrderDriversService = class OrderDriversService {
    constructor(orderDriverRepo) {
        this.orderDriverRepo = orderDriverRepo;
    }
    async create(createOrderDriverDto) {
        try {
            const orderDriver = await this.orderDriverRepo.create(createOrderDriverDto);
            return orderDriver;
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.orderDriverRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.orderDriverRepo.findByPk(id, {
                include: { all: true },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateOrderDriverDto) {
        try {
            const check = await this.findOne(id);
            if (check) {
                return await this.orderDriverRepo.update(updateOrderDriverDto, {
                    where: { id: id },
                });
            }
            else {
                throw new Error('Not Found');
            }
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const check = await this.findOne(id);
            if (check) {
                return await this.orderDriverRepo.destroy({ where: { id: id } });
            }
            else {
                throw new Error('Not Found');
            }
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.OrderDriversService = OrderDriversService;
exports.OrderDriversService = OrderDriversService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_driver_model_1.OrderDriver)),
    __metadata("design:paramtypes", [Object])
], OrderDriversService);
//# sourceMappingURL=order_driver.service.js.map