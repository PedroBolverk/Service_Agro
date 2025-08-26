import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitacoesServicoDto } from './create-solicitacoes-servico.dto';

export class UpdateSolicitacoesServicoDto extends PartialType(CreateSolicitacoesServicoDto) {}
