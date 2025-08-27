import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class UsuariosController {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUsuarioDto): Promise<{
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
