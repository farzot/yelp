"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDriverDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_order_driver_dto_1 = require("./create-order_driver.dto");
class UpdateOrderDriverDto extends (0, swagger_1.PartialType)(create_order_driver_dto_1.CreateOrderDriverDto) {
}
exports.UpdateOrderDriverDto = UpdateOrderDriverDto;
//# sourceMappingURL=update-order_driver.dto.js.map