import { Role } from "generated/prisma";

export class CreateUsuarioDto {
    email: string;
    password: string;
    fullName: string;
    role: Role; //Produtor ou Mecanico
    phone?: string;
    cpfCnpj?: string;
    stateReg?: string;
    specialty?: string;
    photoUrl?: string;
}
