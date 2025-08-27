"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagensService = void 0;
const common_1 = require("@nestjs/common");
let MensagensService = class MensagensService {
    create(createMensagenDto) {
        return 'This action adds a new mensagen';
    }
    findAll() {
        return `This action returns all mensagens`;
    }
    findOne(id) {
        return `This action returns a #${id} mensagen`;
    }
    update(id, updateMensagenDto) {
        return `This action updates a #${id} mensagen`;
    }
    remove(id) {
        return `This action removes a #${id} mensagen`;
    }
};
exports.MensagensService = MensagensService;
exports.MensagensService = MensagensService = __decorate([
    (0, common_1.Injectable)()
], MensagensService);
//# sourceMappingURL=mensagens.service.js.map