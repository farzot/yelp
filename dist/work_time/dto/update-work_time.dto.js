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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkTimeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_work_time_dto_1 = require("./create-work_time.dto");
const class_validator_1 = require("class-validator");
class UpdateWorkTimeDto extends (0, swagger_1.PartialType)(create_work_time_dto_1.CreateWorkTimeDto) {
}
exports.UpdateWorkTimeDto = UpdateWorkTimeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkTimeDto.prototype, "Day", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateWorkTimeDto.prototype, "open_hour", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateWorkTimeDto.prototype, "close_hour", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateWorkTimeDto.prototype, "business_id", void 0);
//# sourceMappingURL=update-work_time.dto.js.map