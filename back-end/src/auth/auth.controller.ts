import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) { }

  @Post('login')
  async login(@Body() loginDto: CreateAuthDto) {  // Usando o DTO aqui
    const { email, password } = loginDto;  // Desestruturando o DTO

    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return { success: false, message: "Usuário não encontrado!" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { success: false, message: "Email ou senha incorretos!" };
    }

    return { success: true, message: "Login bem-sucedido!" };
  }

  // Rota para cadastrar um novo usuário

  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    const { email, password, fullName, role } = createAuthDto;

    // Verificando se o usuário já existe
    const existingUser = await this.prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, message: "Este e-mail já está registrado!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Criando o novo usuário
    const newUser = await this.prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role,  // O Prisma irá garantir que o valor de role seja válido
      },
    });

    return { success: true, message: "Cadastro realizado com sucesso!" };
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
