import { MensagensService } from './mensagens.service';
import { CreateMensagenDto } from './dto/create-mensagen.dto';
import { UpdateMensagenDto } from './dto/update-mensagen.dto';
export declare class MensagensController {
    private readonly mensagensService;
    constructor(mensagensService: MensagensService);
    create(createMensagenDto: CreateMensagenDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMensagenDto: UpdateMensagenDto): string;
    remove(id: string): string;
}
