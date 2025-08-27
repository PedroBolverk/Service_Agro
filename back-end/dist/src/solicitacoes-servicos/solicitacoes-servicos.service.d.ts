import { CreateSolicitacoesServicoDto } from './dto/create-solicitacoes-servico.dto';
import { UpdateSolicitacoesServicoDto } from './dto/update-solicitacoes-servico.dto';
export declare class SolicitacoesServicosService {
    create(createSolicitacoesServicoDto: CreateSolicitacoesServicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSolicitacoesServicoDto: UpdateSolicitacoesServicoDto): string;
    remove(id: number): string;
}
