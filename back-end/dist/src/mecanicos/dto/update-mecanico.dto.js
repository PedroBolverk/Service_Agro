"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMecanicoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mecanico_dto_1 = require("./create-mecanico.dto");
class UpdateMecanicoDto extends (0, mapped_types_1.PartialType)(create_mecanico_dto_1.CreateMecanicoDto) {
}
exports.UpdateMecanicoDto = UpdateMecanicoDto;
//# sourceMappingURL=update-mecanico.dto.js.map