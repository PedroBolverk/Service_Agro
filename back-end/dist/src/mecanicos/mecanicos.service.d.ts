import { CreateMecanicoDto } from './dto/create-mecanico.dto';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class MecanicosService {
    private prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, updateMecanicoDto: UpdateMecanicoDto): string;
    remove(id: number): string;
}
