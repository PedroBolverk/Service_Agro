import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacoeDto } from './dto/create-avaliacoe.dto';
import { UpdateAvaliacoeDto } from './dto/update-avaliacoe.dto';
export declare class AvaliacoesController {
    private readonly avaliacoesService;
    constructor(avaliacoesService: AvaliacoesService);
    create(createAvaliacoeDto: CreateAvaliacoeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAvaliacoeDto: UpdateAvaliacoeDto): string;
    remove(id: string): string;
}
