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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const driver_model_1 = require("./model/driver.model");
let DriverService = class DriverService {
    constructor(driverRepo) {
        this.driverRepo = driverRepo;
    }
    async createDriver(createDriverDto) {
        try {
            return await this.driverRepo.create(createDriverDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllDriver() {
        try {
            return await this.driverRepo.findAll();
        }
        catch (error) { }
    }
    async findDriverByID(id) {
        try {
            return await this.driverRepo.findByPk(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findDriverByFName(firstName) {
        try {
            return await this.driverRepo.findOne({
                where: { first_name: firstName },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findDriverByPassport(pasport_raqam) {
        try {
            return await this.driverRepo.findOne({
                where: { passportID: pasport_raqam },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateDriverDto) {
        try {
            const check = await this.findDriverByID(id);
            if (check) {
                return await this.driverRepo.update(updateDriverDto, {
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
            const check = await this.findDriverByID(id);
            if (check) {
                return await this.driverRepo.destroy({ where: { id: id } });
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
exports.DriverService = DriverService;
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(driver_model_1.Driver)),
    __metadata("design:paramtypes", [Object])
], DriverService);
//# sourceMappingURL=driver.service.js.map