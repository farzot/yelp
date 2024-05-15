"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_star_dto_1 = require("./create-star.dto");
class UpdateStarDto extends (0, swagger_1.PartialType)(create_star_dto_1.CreateStarDto) {
}
exports.UpdateStarDto = UpdateStarDto;
//# sourceMappingURL=update-star.dto.js.map