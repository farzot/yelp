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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const create_address_dto_1 = require("./dto/create-address.dto");
const update_address_dto_1 = require("./dto/update-address.dto");
const swagger_1 = require("@nestjs/swagger");
const address_model_1 = require("./model/address.model");
const admin_auth_guard_1 = require("../common/guards/admin-auth.guard");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async createAdress(createAddressDto) {
        try {
            return this.addressService.create(createAddressDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAllAdress() {
        try {
            return this.addressService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOneAdress(id) {
        try {
            return this.addressService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async updateAdress(id, updateAddressDto) {
        try {
            return this.addressService.update(+id, updateAddressDto);
        }
        catch (error) {
            return error;
        }
    }
    async removeAdress(id) {
        try {
            return this.addressService.remove(+id);
        }
        catch (error) {
            return error;
        }
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new address' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: address_model_1.Address }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "createAdress", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all address' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [address_model_1.Address] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findAllAdress", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get address by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: address_model_1.Address }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findOneAdress", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update address by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: address_model_1.Address }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_address_dto_1.UpdateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "updateAdress", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.JwtAdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete address by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "removeAdress", null);
exports.AddressController = AddressController = __decorate([
    (0, swagger_1.ApiTags)('Address'),
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
//# sourceMappingURL=address.controller.js.map