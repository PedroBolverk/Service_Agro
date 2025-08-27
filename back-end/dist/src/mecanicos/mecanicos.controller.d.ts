import { MecanicosService } from './mecanicos.service';
import { CreateMecanicoDto } from './dto/create-mecanico.dto';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto';
export declare class MecanicosController {
    private readonly mecanicosService;
    constructor(mecanicosService: MecanicosService);
    create(createMecanicoDto: CreateMecanicoDto): string;
    findAll(): Promise<{
        updatedAt: Date;
        specialty: string;
        photoUrl: string;
        isAvailable: boolean;
        lat: number | null;
        lng: number | null;
        userId: string;
    }[]>;
    findOne(id: string): Promise<{
        updatedAt: Date;
        specialty: string;
        photoUrl: string;
        isAvailable: boolean;
        lat: number | null;
        lng: number | null;
        userId: string;
    } | null>;
    update(id: string, updateMecanicoDto: UpdateMecanicoDto): string;
    remove(id: string): string;
}
