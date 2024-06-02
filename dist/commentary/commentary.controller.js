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
exports.CommentaryController = void 0;
const common_1 = require("@nestjs/common");
const commentary_service_1 = require("./commentary.service");
const create_commentary_dto_1 = require("./dto/create-commentary.dto");
const update_commentary_dto_1 = require("./dto/update-commentary.dto");
const swagger_1 = require("@nestjs/swagger");
const commentary_model_1 = require("./models/commentary.model");
let CommentaryController = class CommentaryController {
    constructor(commentaryService) {
        this.commentaryService = commentaryService;
    }
    async createCommentary(createCommentaryDto) {
        try {
            return this.commentaryService.create(createCommentaryDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async findAllCommentary() {
        try {
            return this.commentaryService.findAll();
        }
        catch (error) {
            throw error.message;
        }
    }
    async findOneCommentary(id) {
        try {
            return this.commentaryService.findOne(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async updateCommentary(id, updateCommentaryDto) {
        try {
            return this.commentaryService.update(+id, updateCommentaryDto);
        }
        catch (error) {
            throw error.message;
        }
    }
    async removeCommentary(id) {
        try {
            return this.commentaryService.remove(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
    async increaseLike(id) {
        try {
            return this.commentaryService.increaseLike(+id);
        }
        catch (error) {
            throw error.message;
        }
    }
};
exports.CommentaryController = CommentaryController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: commentary_model_1.Commentary }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_commentary_dto_1.CreateCommentaryDto]),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "createCommentary", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [commentary_model_1.Commentary] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "findAllCommentary", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get comment by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: commentary_model_1.Commentary }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "findOneCommentary", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update comment by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: commentary_model_1.Commentary }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_commentary_dto_1.UpdateCommentaryDto]),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "updateCommentary", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete comment by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "removeCommentary", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Increase like by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Number }),
    (0, common_1.Patch)(':id/like'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "increaseLike", null);
exports.CommentaryController = CommentaryController = __decorate([
    (0, swagger_1.ApiTags)('Commentary'),
    (0, common_1.Controller)('commentary'),
    __metadata("design:paramtypes", [commentary_service_1.CommentaryService])
], CommentaryController);
//# sourceMappingURL=commentary.controller.js.map