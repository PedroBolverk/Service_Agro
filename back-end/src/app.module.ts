import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MecanicosModule } from './mecanicos/mecanicos.module';
import { SolicitacoesServicosModule } from './solicitacoes-servicos/solicitacoes-servicos.module';
import { AtribuicoesServicosModule } from './atribuicoes-servicos/atribuicoes-servicos.module';
import { MensagensModule } from './mensagens/mensagens.module';
import { AvaliacoesModule } from './avaliacoes/avaliacoes.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [AuthModule, UsuariosModule, MecanicosModule, SolicitacoesServicosModule, AtribuicoesServicosModule, MensagensModule, AvaliacoesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
