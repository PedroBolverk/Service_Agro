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
exports.AtribuicoesServicosController = void 0;
const common_1 = require("@nestjs/common");
const atribuicoes_servicos_service_1 = require("./atribuicoes-servicos.service");
const create_atribuicoes_servico_dto_1 = require("./dto/create-atribuicoes-servico.dto");
const update_atribuicoes_servico_dto_1 = require("./dto/update-atribuicoes-servico.dto");
let AtribuicoesServicosController = class AtribuicoesServicosController {
    atribuicoesServicosService;
    constructor(atribuicoesServicosService) {
        this.atribuicoesServicosService = atribuicoesServicosService;
    }
    create(createAtribuicoesServicoDto) {
        return this.atribuicoesServicosService.create(createAtribuicoesServicoDto);
    }
    findAll() {
        return this.atribuicoesServicosService.findAll();
    }
    findOne(id) {
        return this.atribuicoesServicosService.findOne(+id);
    }
    update(id, updateAtribuicoesServicoDto) {
        return this.atribuicoesServicosService.update(+id, updateAtribuicoesServicoDto);
    }
    remove(id) {
        return this.atribuicoesServicosService.remove(+id);
    }
};
exports.AtribuicoesServicosController = AtribuicoesServicosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atribuicoes_servico_dto_1.CreateAtribuicoesServicoDto]),
    __metadata("design:returntype", void 0)
], AtribuicoesServicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AtribuicoesServicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtribuicoesServicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_atribuicoes_servico_dto_1.UpdateAtribuicoesServicoDto]),
    __metadata("design:returntype", void 0)
], AtribuicoesServicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtribuicoesServicosController.prototype, "remove", null);
exports.AtribuicoesServicosController = AtribuicoesServicosController = __decorate([
    (0, common_1.Controller)('atribuicoes-servicos'),
    __metadata("design:paramtypes", [atribuicoes_servicos_service_1.AtribuicoesServicosService])
], AtribuicoesServicosController);
//# sourceMappingURL=atribuicoes-servicos.controller.js.map