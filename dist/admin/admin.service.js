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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const admin_model_1 = require("./models/admin.model");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
    }
    async getTokens(admin) {
        const payload = {
            id: admin.id,
            is_active: admin.is_active,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    }
    async registration(createAdminDto, res) {
        const admin = await this.adminRepo.findOne({
            where: { email: createAdminDto.email },
        });
        if (admin) {
            throw new common_1.BadRequestException('Admin already registered');
        }
        const hashed_password = await bcrypt.hash(createAdminDto.hashed_password, 7);
        const newAdmin = await this.adminRepo.create({
            ...createAdminDto,
            hashed_password,
        });
        const tokens = await this.getTokens(newAdmin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedAdmin = await this.adminRepo.update({ hashed_refresh_token }, { where: { id: newAdmin.id }, returning: true });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'Registration successful',
            admin: updatedAdmin[1][0],
            tokens,
        };
        return response;
    }
    async findAllAdmins() {
        try {
            return this.adminRepo.findAll({ include: { all: true } });
        }
        catch (err) {
            throw err;
        }
    }
    async findAdminById(id) {
        try {
            const admin = await this.adminRepo.findByPk(id);
            return admin;
        }
        catch (error) {
            throw error;
        }
    }
    async updateAdmin(id, updateAdminDto) {
        try {
            const [numberOfAffectedRows, [updateAdmin]] = await this.adminRepo.update(updateAdminDto, {
                where: { id },
                returning: true,
            });
            if (numberOfAffectedRows === 0) {
                throw new common_1.NotFoundException(`Admin with ID ${id} not found`);
            }
            return updateAdmin;
        }
        catch (error) {
            throw error;
        }
    }
    async removeAdmin(id) {
        try {
            const check = await this.findAdminById(id);
            if (!check)
                throw new common_1.NotFoundException('Admin is not found');
            const deletedAdmin = this.adminRepo.destroy({ where: { id } });
            return deletedAdmin;
        }
        catch (error) {
            throw error;
        }
    }
    async login(loginadminDto, res) {
        const { email, password } = loginadminDto;
        const admin = await this.adminRepo.findOne({ where: { email: email } });
        if (!admin) {
            throw new common_1.BadRequestException('Admin not found');
        }
        if (!admin.is_active) {
            throw new common_1.BadRequestException('Admin is not activated');
        }
        const isMatch = await bcrypt.compare(password, admin.hashed_password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const tokens = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedAdmin = await this.adminRepo.update({ hashed_refresh_token }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'Admin logged in successfully',
            admin: updatedAdmin[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const adminData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!adminData) {
            throw new common_1.BadRequestException('Admin not verified');
        }
        const updateAdmin = await this.adminRepo.update({
            hashed_refresh_token: null,
        }, {
            where: {
                id: adminData.id,
            },
            returning: true,
        });
        res.clearCookie('refresh_token');
        const response = {
            message: 'Admin logged out successfully',
            admin_refreshToken: updateAdmin[1][0].hashed_refresh_token,
        };
        return response;
    }
    async refreshToken(adminId, refreshToken, res) {
        const decodedToken = this.jwtService.decode(refreshToken);
        if (adminId !== decodedToken['id']) {
            throw new common_1.BadRequestException('Admin not verified');
        }
        console.log('Salom');
        const admin = await this.adminRepo.findOne({ where: { id: adminId } });
        if (!admin || !admin.hashed_refresh_token) {
            throw new common_1.BadRequestException('Admin not found');
        }
        const isMatch = await bcrypt.compare(refreshToken, admin.hashed_refresh_token);
        if (!isMatch) {
            throw new common_1.ForbiddenException('Admin not verified');
        }
        console.log('Salom 2');
        const tokens = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedAdmin = await this.adminRepo.update({ hashed_refresh_token }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'admin get new refresh token',
            admin: updatedAdmin[1][0],
            tokens,
        };
        return response;
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map