import { Injectable } from '@nestjs/common';
import { CreateSolicitacoesServicoDto } from './dto/create-solicitacoes-servico.dto';
import { UpdateSolicitacoesServicoDto } from './dto/update-solicitacoes-servico.dto';

@Injectable()
export class SolicitacoesServicosService {
  create(createSolicitacoesServicoDto: CreateSolicitacoesServicoDto) {
    return 'This action adds a new solicitacoesServico';
  }

  findAll() {
    return `This action returns all solicitacoesServicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacoesServico`;
  }

  update(id: number, updateSolicitacoesServicoDto: UpdateSolicitacoesServicoDto) {
    return `This action updates a #${id} solicitacoesServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacoesServico`;
  }
}
