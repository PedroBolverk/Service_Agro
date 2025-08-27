import { AtribuicoesServicosService } from './atribuicoes-servicos.service';
import { CreateAtribuicoesServicoDto } from './dto/create-atribuicoes-servico.dto';
import { UpdateAtribuicoesServicoDto } from './dto/update-atribuicoes-servico.dto';
export declare class AtribuicoesServicosController {
    private readonly atribuicoesServicosService;
    constructor(atribuicoesServicosService: AtribuicoesServicosService);
    create(createAtribuicoesServicoDto: CreateAtribuicoesServicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAtribuicoesServicoDto: UpdateAtribuicoesServicoDto): string;
    remove(id: string): string;
}
