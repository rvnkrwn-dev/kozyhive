import { prisma } from "~/server/config/prisma";
import {RegisterRequest, RegisterResponse, UpdateRequest} from "~/server/types/AuthType";
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

    static getUserById = (id: number) => {
        return prisma.user.findUnique({
            where: {id: id},
        });
    };

    static getAllUsers = async (page: number, pagesize: number) => {
        const skip = (page - 1) * pagesize; // Hitung data yang dilewatkan
        const take = pagesize; // Jumlah data per halaman

        return prisma.user.findMany({
            select: {
                id: true,
                full_name: true,
                email: true,
                password: false,
                role: true,
                user_status: true,
                image_url: true,
                created_at: true,
                updated_at: true,
            },
            skip: skip,
            take: take,
        });
    };


    static countAllUsers = () => {
        return prisma.user.count();
    };


    static deleteUser = (id: number) => {
        return prisma.user.delete({
            where: {id},
        });
    };

    static countUsers = () => {
        return prisma.user.count();
    };

    static update = async (id: number, data: UpdateRequest) => {
        return prisma.user.update({
            where: { id },
            data: {
                email: data.email,
                full_name: data.full_name,
                username: data.username,
                role: data.role,
                user_status: data.user_status,
                image_url: data.image_url,


            },
            select: {
                id: true,
                full_name: true,
                username: true,
                email: true,
                role: true,
                user_status: true,
            }
        });
    };

    static searchUser = (search: string) => {
        return prisma.user.findMany({
            where: {
                OR: [
                    {
                        full_name: {
                            contains: search
                        }
                    },
                    {
                        email: {
                            contains: search
                        }
                    }
                ]
            }
        })
    }
}
