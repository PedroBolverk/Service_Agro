"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const mecanicos_module_1 = require("./mecanicos/mecanicos.module");
const solicitacoes_servicos_module_1 = require("./solicitacoes-servicos/solicitacoes-servicos.module");
const atribuicoes_servicos_module_1 = require("./atribuicoes-servicos/atribuicoes-servicos.module");
const mensagens_module_1 = require("./mensagens/mensagens.module");
const avaliacoes_module_1 = require("./avaliacoes/avaliacoes.module");
const prisma_service_1 = require("../prisma/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, usuarios_module_1.UsuariosModule, mecanicos_module_1.MecanicosModule, solicitacoes_servicos_module_1.SolicitacoesServicosModule, atribuicoes_servicos_module_1.AtribuicoesServicosModule, mensagens_module_1.MensagensModule, avaliacoes_module_1.AvaliacoesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map