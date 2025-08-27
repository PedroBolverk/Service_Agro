import { CreateMensagenDto } from './dto/create-mensagen.dto';
import { UpdateMensagenDto } from './dto/update-mensagen.dto';
export declare class MensagensService {
    create(createMensagenDto: CreateMensagenDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMensagenDto: UpdateMensagenDto): string;
    remove(id: number): string;
}
