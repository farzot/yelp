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
exports.OrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const order_detail_model_1 = require("./models/order_detail.model");
const sequelize_1 = require("@nestjs/sequelize");
let OrderDetailService = class OrderDetailService {
    constructor(orderDetailRepo) {
        this.orderDetailRepo = orderDetailRepo;
    }
    async create(createOrderDetailDto) {
        try {
            return await this.orderDetailRepo.create(createOrderDetailDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.orderDetailRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.orderDetailRepo.findByPk(id, {
                include: { all: true },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateOrderDetailDto) {
        try {
            const check = await this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`OrderDetail with ID ${id} not found`);
            }
            return await this.orderDetailRepo.update(updateOrderDetailDto, {
                where: { id: id },
                returning: true,
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        const check = await this.findOne(id);
        if (!check) {
            throw new common_1.NotFoundException(`OrderDetail with ID ${id} not found`);
        }
        return await this.orderDetailRepo.destroy({ where: { id: id } });
    }
};
exports.OrderDetailService = OrderDetailService;
exports.OrderDetailService = OrderDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_detail_model_1.OrderDetail)),
    __metadata("design:paramtypes", [Object])
], OrderDetailService);
//# sourceMappingURL=order_detail.service.js.map