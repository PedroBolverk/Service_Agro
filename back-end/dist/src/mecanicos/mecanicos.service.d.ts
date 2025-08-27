import { CreateMecanicoDto } from './dto/create-mecanico.dto';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class MecanicosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMecanicoDto: CreateMecanicoDto): string;
    findAll(): Promise<{
        userId: string;
        specialty: string;
        photoUrl: string;
        isAvailable: boolean;
        lat: number | null;
        lng: number | null;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        userId: string;
        specialty: string;
        photoUrl: string;
        isAvailable: boolean;
        lat: number | null;
        lng: number | null;
        updatedAt: Date;
    } | null>;
    update(id: number, updateMecanicoDto: UpdateMecanicoDto): string;
    remove(id: number): string;
}
