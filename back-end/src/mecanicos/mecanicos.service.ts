import { Injectable } from '@nestjs/common';
import { CreateMecanicoDto } from './dto/create-mecanico.dto';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MecanicosService {
  constructor(private prisma: PrismaService) {} //Injetando o PrismaService
  create(createMecanicoDto: CreateMecanicoDto) {
    return 'This action adds a new mecanico';
  }

  async findAll() {
    return this.prisma.mechanic.findMany();
  }

  async findOne(id: string) {
    return this.prisma.mechanic.findUnique({
      where: { userId: id },
    });
  }

  update(id: number, updateMecanicoDto: UpdateMecanicoDto) {
    return `This action updates a #${id} mecanico`;
  }

  remove(id: number) {
    return `This action removes a #${id} mecanico`;
  }
}
