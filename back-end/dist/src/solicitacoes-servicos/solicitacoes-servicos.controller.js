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
exports.SolicitacoesServicosController = void 0;
const common_1 = require("@nestjs/common");
const solicitacoes_servicos_service_1 = require("./solicitacoes-servicos.service");
const create_solicitacoes_servico_dto_1 = require("./dto/create-solicitacoes-servico.dto");
const update_solicitacoes_servico_dto_1 = require("./dto/update-solicitacoes-servico.dto");
let SolicitacoesServicosController = class SolicitacoesServicosController {
    solicitacoesServicosService;
    constructor(solicitacoesServicosService) {
        this.solicitacoesServicosService = solicitacoesServicosService;
    }
    create(createSolicitacoesServicoDto) {
        return this.solicitacoesServicosService.create(createSolicitacoesServicoDto);
    }
    findAll() {
        return this.solicitacoesServicosService.findAll();
    }
    findOne(id) {
        return this.solicitacoesServicosService.findOne(+id);
    }
    update(id, updateSolicitacoesServicoDto) {
        return this.solicitacoesServicosService.update(+id, updateSolicitacoesServicoDto);
    }
    remove(id) {
        return this.solicitacoesServicosService.remove(+id);
    }
};
exports.SolicitacoesServicosController = SolicitacoesServicosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solicitacoes_servico_dto_1.CreateSolicitacoesServicoDto]),
    __metadata("design:returntype", void 0)
], SolicitacoesServicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacoesServicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacoesServicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_solicitacoes_servico_dto_1.UpdateSolicitacoesServicoDto]),
    __metadata("design:returntype", void 0)
], SolicitacoesServicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacoesServicosController.prototype, "remove", null);
exports.SolicitacoesServicosController = SolicitacoesServicosController = __decorate([
    (0, common_1.Controller)('solicitacoes-servicos'),
    __metadata("design:paramtypes", [solicitacoes_servicos_service_1.SolicitacoesServicosService])
], SolicitacoesServicosController);
//# sourceMappingURL=solicitacoes-servicos.controller.js.map