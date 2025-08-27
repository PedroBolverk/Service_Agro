import { Role } from "generated/prisma";

export class CreateAuthDto {
    email: string;
    password: string;
    fullName: string;
    role: Role;
}
