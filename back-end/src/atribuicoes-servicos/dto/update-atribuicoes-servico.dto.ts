import { PartialType } from '@nestjs/mapped-types';
import { CreateAtribuicoesServicoDto } from './create-atribuicoes-servico.dto';

export class UpdateAtribuicoesServicoDto extends PartialType(CreateAtribuicoesServicoDto) {}
