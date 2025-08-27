"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MecanicosModule = void 0;
const common_1 = require("@nestjs/common");
const mecanicos_service_1 = require("./mecanicos.service");
const mecanicos_controller_1 = require("./mecanicos.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let MecanicosModule = class MecanicosModule {
};
exports.MecanicosModule = MecanicosModule;
exports.MecanicosModule = MecanicosModule = __decorate([
    (0, common_1.Module)({
        controllers: [mecanicos_controller_1.MecanicosController],
        providers: [mecanicos_service_1.MecanicosService, prisma_service_1.PrismaService],
    })
], MecanicosModule);
//# sourceMappingURL=mecanicos.module.js.map