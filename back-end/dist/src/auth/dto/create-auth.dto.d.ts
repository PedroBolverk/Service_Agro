import { Role } from "generated/prisma";
export declare class CreateAuthDto {
    email: string;
    password: string;
    fullName: string;
    role: Role;
}
