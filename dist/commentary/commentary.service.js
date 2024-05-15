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
exports.CommentaryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const commentary_model_1 = require("./models/commentary.model");
let CommentaryService = class CommentaryService {
    constructor(commentRepo) {
        this.commentRepo = commentRepo;
    }
    async create(createCommentaryDto) {
        try {
            return await this.commentRepo.create(createCommentaryDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAll() {
        try {
            return await this.commentRepo.findAll({ include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOne(id) {
        try {
            return await this.commentRepo.findByPk(id, { include: { all: true } });
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateCommentaryDto) {
        try {
            const check = await this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException('Comment not found');
            }
            return await this.commentRepo.update(updateCommentaryDto, { where: { id: id }, returning: true });
        }
        catch (error) {
            throw error.message;
        }
    }
    async remove(id) {
        try {
            const check = await this.findOne(id);
            if (!check) {
                throw new common_1.NotFoundException('Comment not found');
            }
            return await this.commentRepo.destroy({
                where: { id: id },
            });
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.CommentaryService = CommentaryService;
exports.CommentaryService = CommentaryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(commentary_model_1.Commentary)),
    __metadata("design:paramtypes", [Object])
], CommentaryService);
//# sourceMappingURL=commentary.service.js.map