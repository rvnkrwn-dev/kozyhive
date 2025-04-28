import bcrypt from "bcryptjs";
import { defineEventHandler } from "h3";
import { RegisterRequest, RegisterResponse } from "~/server/types/AuthType";
import { User } from "~/server/models/User";
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    try {
        // Membaca body dari request
        const data: RegisterRequest = await readBody(event);

        // Validasi input
        if (!data.full_name || !data.email || !data.password) {
            setResponseStatus(event, 400);
            return {
                statusCode: 400,
                message: "Harap berikan semua kolom yang diperlukan (nama lengkap, email, kata sandi).",
            };
        }

        // Hash password
        const hashedPassword = bcrypt.hashSync(data.password, 10); // Hash dengan salt sebanyak 10 putaran

        // Generate username dari full_name
        const nameParts = data.full_name.split(" ");
        const baseUsername = nameParts.join(".").toLowerCase();
        const randomNumber = Math.floor(Math.random() * 1000); // Angka acak untuk membuat username unik
        const generatedUsername = `${baseUsername}${randomNumber}`;

        // Panggil metode registerUser dari model User
        const newUser: RegisterResponse = await User.registerUser({
            full_name: data.full_name,
            email: data.email,
            username: generatedUsername,
            password: hashedPassword, // Gunakan password yang sudah di-hash
        });

        // Mengatur status dan mengembalikan respons sukses
        setResponseStatus(event, 201);
        return {
            statusCode: 201,
            message: "Pengguna berhasil terdaftar!"
        };
    } catch (error: any) {
        // Menangani error
        const {statusCode, message} = errorHandlingTransfrom(error);
        setResponseStatus(event, statusCode);
        return {
            statusCode,
            message,
        }
    }
});
