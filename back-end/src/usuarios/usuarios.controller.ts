// src/usuarios/usuarios.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'prisma/prisma.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private prisma: PrismaService) { }

  // Criar um usuário
  @Post()
  async create(@Body() createUserDto: CreateUsuarioDto) {
    const user = await this.prisma.users.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        fullName: createUserDto.fullName,
        role: createUserDto.role,  // "PRODUCER" ou "MECHANIC"
        phone: createUserDto.phone,
        cpfCnpj: createUserDto.cpfCnpj,
        stateReg: createUserDto.stateReg,
      },
    });

    // Se o role for "MECHANIC", cria um mecânico
    if (createUserDto.role === 'MECHANIC') {
      await this.prisma.mechanic.create({
        data: {
          userId: user.id,
          specialty: createUserDto.specialty || 'Especialidade não informada',  
          photoUrl: createUserDto.photoUrl || 'default-photo-url.jpg',
          isAvailable: true,  // Define o mecânico como disponível por padrão
        },
      });
    }

    return user;
  }

  @Get()
  async findAll() {
    return this.prisma.users.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
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

  // Remover um usuário
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.users.delete({
      where: { id }
    });
  }
}
