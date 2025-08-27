import { CreateAvaliacoeDto } from './dto/create-avaliacoe.dto';
import { UpdateAvaliacoeDto } from './dto/update-avaliacoe.dto';
export declare class AvaliacoesService {
    create(createAvaliacoeDto: CreateAvaliacoeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAvaliacoeDto: UpdateAvaliacoeDto): string;
    remove(id: number): string;
}
