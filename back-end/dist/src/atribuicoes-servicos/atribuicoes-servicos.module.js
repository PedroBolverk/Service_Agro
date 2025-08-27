"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtribuicoesServicosModule = void 0;
const common_1 = require("@nestjs/common");
const atribuicoes_servicos_service_1 = require("./atribuicoes-servicos.service");
const atribuicoes_servicos_controller_1 = require("./atribuicoes-servicos.controller");
let AtribuicoesServicosModule = class AtribuicoesServicosModule {
};
exports.AtribuicoesServicosModule = AtribuicoesServicosModule;
exports.AtribuicoesServicosModule = AtribuicoesServicosModule = __decorate([
    (0, common_1.Module)({
        controllers: [atribuicoes_servicos_controller_1.AtribuicoesServicosController],
        providers: [atribuicoes_servicos_service_1.AtribuicoesServicosService],
    })
], AtribuicoesServicosModule);
//# sourceMappingURL=atribuicoes-servicos.module.js.map