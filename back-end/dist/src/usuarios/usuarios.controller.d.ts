import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class UsuariosController {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUsuarioDto): Promise<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
        cpfCnpj: string | null;
        stateReg: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
