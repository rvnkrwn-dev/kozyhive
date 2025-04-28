import { prisma } from "~/server/config/prisma";
import { RegisterRequest, RegisterResponse } from "~/server/types/AuthType";
import { Role, UserStatus } from "~/server/types/TypesModel";

export class User {
    static async registerUser(data: RegisterRequest): Promise<RegisterResponse> {
        const newUser = await prisma.user.create({
            data: {
                full_name: data.full_name,
                email: data.email,
                username: data.username, // Pastikan ini dihasilkan sebelumnya
                password: data.password,
                role: Role.USER, // Misalkan, peran default pengguna adalah "USER"
                user_status: UserStatus.ACTIVE, // Misalkan, status default adalah "ACTIVE"
            }
        });

        return {
            StatusCode: 201,
            message: "Pengguna berhasil terdaftar!",
            ...newUser,
        };
    }

    static getUserByEmail = (email: string) => {
        if (!email) {
            throw new Error("Email must be provided");
        }

        return prisma.user.findUnique({
            where: {
                email: email, // Ensure email is properly passed here
            },
            select: {
                id: true,
                full_name: true,
                username: true,
                email: true,
                password: true,
                created_at: true,
                updated_at: true,
                role: true,
                user_status: true,
                image_url: true,
            },
        });
    };
}
