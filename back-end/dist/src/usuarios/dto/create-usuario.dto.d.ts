import { Role } from "generated/prisma";
export declare class CreateUsuarioDto {
    email: string;
    password: string;
    fullName: string;
    role: Role;
    phone?: string;
    cpfCnpj?: string;
    stateReg?: string;
    specialty?: string;
    photoUrl?: string;
}
