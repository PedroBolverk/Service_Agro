"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMensagenDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mensagen_dto_1 = require("./create-mensagen.dto");
class UpdateMensagenDto extends (0, mapped_types_1.PartialType)(create_mensagen_dto_1.CreateMensagenDto) {
}
exports.UpdateMensagenDto = UpdateMensagenDto;
//# sourceMappingURL=update-mensagen.dto.js.map