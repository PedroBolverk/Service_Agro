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
exports.MecanicosController = void 0;
const common_1 = require("@nestjs/common");
const mecanicos_service_1 = require("./mecanicos.service");
const create_mecanico_dto_1 = require("./dto/create-mecanico.dto");
const update_mecanico_dto_1 = require("./dto/update-mecanico.dto");
let MecanicosController = class MecanicosController {
    mecanicosService;
    constructor(mecanicosService) {
        this.mecanicosService = mecanicosService;
    }
    create(createMecanicoDto) {
        return this.mecanicosService.create(createMecanicoDto);
    }
    findAll() {
        return this.mecanicosService.findAll();
    }
    findOne(id) {
        return this.mecanicosService.findOne(id);
    }
    update(id, updateMecanicoDto) {
        return this.mecanicosService.update(+id, updateMecanicoDto);
    }
    remove(id) {
        return this.mecanicosService.remove(+id);
    }
};
exports.MecanicosController = MecanicosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mecanico_dto_1.CreateMecanicoDto]),
    __metadata("design:returntype", void 0)
], MecanicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MecanicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MecanicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mecanico_dto_1.UpdateMecanicoDto]),
    __metadata("design:returntype", void 0)
], MecanicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MecanicosController.prototype, "remove", null);
exports.MecanicosController = MecanicosController = __decorate([
    (0, common_1.Controller)('mecanicos'),
    __metadata("design:paramtypes", [mecanicos_service_1.MecanicosService])
], MecanicosController);
//# sourceMappingURL=mecanicos.controller.js.map