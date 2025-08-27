// src/prisma/prisma.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // Importando o PrismaClient

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super(); // Chamando o PrismaClient para iniciar a conexão com o banco de dados
  }
}
