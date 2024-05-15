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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./models/user.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const mail_service_1 = require("../mail/mail.service");
const sequelize_2 = require("sequelize");
let UsersService = class UsersService {
    constructor(userRepo, jwtService, mailService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async getTokens(user) {
        const payload = {
            id: user.id,
            is_active: user.is_active,
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
    async registration(createUserDto, res) {
        const user = await this.userRepo.findOne({
            where: { email: createUserDto.email },
        });
        if (user) {
            throw new common_1.BadRequestException('User already registered');
        }
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const password = await bcrypt.hash(createUserDto.password, 7);
        const newUser = await this.userRepo.create({
            ...createUserDto,
            password,
        });
        const tokens = await this.getTokens(newUser);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const activation_link = (0, uuid_1.v4)();
        const updatedUser = await this.userRepo.update({ hashed_refresh_token, activation_link }, { where: { id: newUser.id }, returning: true });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        try {
            await this.mailService.sendMail(updatedUser[1][0]);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Xatni yuborishda xatolik');
        }
        const response = {
            message: 'Registration successful',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    createUser(createUserDto) {
        try {
            return this.userRepo.create(createUserDto);
        }
        catch (error) {
            throw error;
        }
    }
    findAllUsers() {
        try {
            return this.userRepo.findAll({ include: { all: true } });
        }
        catch (err) {
            throw err;
        }
    }
    async findUserById(id) {
        try {
            const user = await this.userRepo.findByPk(id);
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findUser(findUserDto) {
        const where = {};
        if (findUserDto.full_name) {
            where['full_name'] = {
                [sequelize_2.Op.iLike]: `%${findUserDto.full_name}%`,
            };
        }
        if (findUserDto.email) {
            where['email'] = {
                [sequelize_2.Op.iLike]: `%${findUserDto.email}%`,
            };
        }
        if (findUserDto.phone) {
            where['phone'] = {
                [sequelize_2.Op.iLike]: `%${findUserDto.phone}%`,
            };
        }
        if (findUserDto.social_media) {
            where['social_media'] = {
                [sequelize_2.Op.iLike]: `%${findUserDto.social_media}%`,
            };
        }
        console.log(where);
        const users = await this.userRepo.findAll({ where });
        if (!users) {
            throw new common_1.NotFoundException('User not found');
        }
        return users;
    }
    async updateUser(id, updateUserDto) {
        try {
            const [numberOfAffectedRows, [updateUser]] = await this.userRepo.update(updateUserDto, {
                where: { id },
                returning: true,
            });
            if (numberOfAffectedRows === 0) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            return updateUser;
        }
        catch (error) {
            throw error;
        }
    }
    removeUser(id) {
        try {
            const deletedUser = this.userRepo.destroy({ where: { id } });
            return deletedUser;
        }
        catch (error) {
            throw error;
        }
    }
    async activate(link) {
        if (!link) {
            throw new common_1.BadRequestException('Activation link is required');
        }
        const updatedUser = await this.userRepo.update({ is_active: true }, { where: { activation_link: link, is_active: false }, returning: true });
        if (!updatedUser[1][0]) {
            throw new common_1.BadRequestException('User already activated');
        }
        const response = {
            message: 'User activated successfully',
            user: updatedUser[1][0].is_active,
        };
        return response;
    }
    async login(loginuserDto, res) {
        const { email, password } = loginuserDto;
        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const activation_link = (0, uuid_1.v4)();
        const updatedUser = await this.userRepo.update({ hashed_refresh_token }, { where: { id: user.id }, returning: true });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'User logged in successfully',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        console.log(userData);
        if (!userData) {
            throw new common_1.BadRequestException('User not verified');
        }
        const updateUser = await this.userRepo.update({
            hashed_refresh_token: null,
        }, {
            where: {
                id: userData.id,
            },
            returning: true,
        });
        res.clearCookie('refresh_token');
        const response = {
            message: 'User logged out successfully',
            user_refreshToken: updateUser[1][0].hashed_refresh_token,
        };
        return response;
    }
    async refreshToken(userId, refreshToken, res) {
        console.log('Salommmmmm');
        const decodedToken = this.jwtService.decode(refreshToken);
        console.log(decodedToken);
        if (userId !== decodedToken['id']) {
            throw new common_1.BadRequestException('User not verified');
        }
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user || !user.hashed_refresh_token) {
            throw new common_1.BadRequestException('User not found');
        }
        console.log(user.hashed_refresh_token);
        const isMatch = await bcrypt.compare(refreshToken, user.hashed_refresh_token);
        if (!isMatch) {
            throw new common_1.ForbiddenException('User not verified');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedUser = await this.userRepo.update({ hashed_refresh_token }, { where: { id: user.id }, returning: true });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'user get new refresh token',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        mail_service_1.MailService])
], UsersService);
//# sourceMappingURL=users.service.js.map