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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const address_model_1 = require("./model/address.model");
let AddressService = class AddressService {
    constructor(addressRepo) {
        this.addressRepo = addressRepo;
    }
    async create(createAddressDto) {
        try {
            return await this.addressRepo.create(createAddressDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.addressRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.addressRepo.findByPk(id, { include: { all: true } });
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateAddressDto) {
        try {
            const check = this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Address with ID ${id} not found`);
            }
            return await this.addressRepo.update(updateAddressDto, {
                where: { id: id },
            });
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            const check = this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException(`Address with ID ${id} not found`);
            }
            return await this.addressRepo.destroy({ where: { id } });
        }
        catch (error) {
            return error;
        }
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(address_model_1.Address)),
    __metadata("design:paramtypes", [Object])
], AddressService);
//# sourceMappingURL=address.service.js.map