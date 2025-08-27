import { CreateAtribuicoesServicoDto } from './dto/create-atribuicoes-servico.dto';
import { UpdateAtribuicoesServicoDto } from './dto/update-atribuicoes-servico.dto';
export declare class AtribuicoesServicosService {
    create(createAtribuicoesServicoDto: CreateAtribuicoesServicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAtribuicoesServicoDto: UpdateAtribuicoesServicoDto): string;
    remove(id: number): string;
}
