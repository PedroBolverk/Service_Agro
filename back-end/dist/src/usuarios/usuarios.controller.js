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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsuariosController = class UsuariosController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const user = await this.prisma.users.create({
            data: {
                email: createUserDto.email,
                password: createUserDto.password,
                fullName: createUserDto.fullName,
                role: createUserDto.role,
                phone: createUserDto.phone,
                cpfCnpj: createUserDto.cpfCnpj,
                stateReg: createUserDto.stateReg,
            },
        });
        if (createUserDto.role === 'MECHANIC') {
            await this.prisma.mechanic.create({
                data: {
                    userId: user.id,
                    specialty: createUserDto.specialty || 'Especialidade não informada',
                    photoUrl: createUserDto.photoUrl || 'default-photo-url.jpg',
                    isAvailable: true,
                },
            });
        }
        return user;
    }
    async findAll() {
        return this.prisma.users.findMany();
    }
    async findOne(id) {
        return this.prisma.users.findUnique({
            where: { id },
        });
    }
    async update(id, updateUsuarioDto) {
        return this.prisma.users.update({
            where: { id },
            data: {
                email: updateUsuarioDto.email,
                fullName: updateUsuarioDto.fullName,
                phone: updateUsuarioDto.phone,
                cpfCnpj: updateUsuarioDto.cpfCnpj,
                stateReg: updateUsuarioDto.stateReg,
            }
        });
    }
    async remove(id) {
        return this.prisma.users.delete({
            where: { id }
        });
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_usuario_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "remove", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map