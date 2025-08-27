import { SolicitacoesServicosService } from './solicitacoes-servicos.service';
import { CreateSolicitacoesServicoDto } from './dto/create-solicitacoes-servico.dto';
import { UpdateSolicitacoesServicoDto } from './dto/update-solicitacoes-servico.dto';
export declare class SolicitacoesServicosController {
    private readonly solicitacoesServicosService;
    constructor(solicitacoesServicosService: SolicitacoesServicosService);
    create(createSolicitacoesServicoDto: CreateSolicitacoesServicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSolicitacoesServicoDto: UpdateSolicitacoesServicoDto): string;
    remove(id: string): string;
}
