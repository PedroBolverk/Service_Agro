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
exports.AvaliacoesController = void 0;
const common_1 = require("@nestjs/common");
const avaliacoes_service_1 = require("./avaliacoes.service");
const create_avaliacoe_dto_1 = require("./dto/create-avaliacoe.dto");
const update_avaliacoe_dto_1 = require("./dto/update-avaliacoe.dto");
let AvaliacoesController = class AvaliacoesController {
    avaliacoesService;
    constructor(avaliacoesService) {
        this.avaliacoesService = avaliacoesService;
    }
    create(createAvaliacoeDto) {
        return this.avaliacoesService.create(createAvaliacoeDto);
    }
    findAll() {
        return this.avaliacoesService.findAll();
    }
    findOne(id) {
        return this.avaliacoesService.findOne(+id);
    }
    update(id, updateAvaliacoeDto) {
        return this.avaliacoesService.update(+id, updateAvaliacoeDto);
    }
    remove(id) {
        return this.avaliacoesService.remove(+id);
    }
};
exports.AvaliacoesController = AvaliacoesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_avaliacoe_dto_1.CreateAvaliacoeDto]),
    __metadata("design:returntype", void 0)
], AvaliacoesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AvaliacoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacoesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_avaliacoe_dto_1.UpdateAvaliacoeDto]),
    __metadata("design:returntype", void 0)
], AvaliacoesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacoesController.prototype, "remove", null);
exports.AvaliacoesController = AvaliacoesController = __decorate([
    (0, common_1.Controller)('avaliacoes'),
    __metadata("design:paramtypes", [avaliacoes_service_1.AvaliacoesService])
], AvaliacoesController);
//# sourceMappingURL=avaliacoes.controller.js.map