import { Injectable } from '@nestjs/common';
import { CreateAtribuicoesServicoDto } from './dto/create-atribuicoes-servico.dto';
import { UpdateAtribuicoesServicoDto } from './dto/update-atribuicoes-servico.dto';

@Injectable()
export class AtribuicoesServicosService {
  create(createAtribuicoesServicoDto: CreateAtribuicoesServicoDto) {
    return 'This action adds a new atribuicoesServico';
  }

  findAll() {
    return `This action returns all atribuicoesServicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atribuicoesServico`;
  }

  update(id: number, updateAtribuicoesServicoDto: UpdateAtribuicoesServicoDto) {
    return `This action updates a #${id} atribuicoesServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} atribuicoesServico`;
  }
}
