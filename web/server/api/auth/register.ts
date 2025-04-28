import { defineEventHandler } from "h3";
import { RegisterRequest, RegisterResponse } from "~/server/types/AuthType";
import { User } from "~/server/models/User";

export default defineEventHandler(async (event) => {
    try {
        // Membaca body dari request
        const data: RegisterRequest = await readBody(event);

        // Validasi input
        if (!data.full_name || !data.email || !data.password) {
            setResponseStatus(event, 400);
            return {
                StatusCode: 400,
                message: "Harap berikan semua kolom yang diperlukan (nama lengkap, email, kata sandi).",
            };
        }

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
            password: data.password,
        });

        // Mengatur status dan mengembalikan respons sukses
        setResponseStatus(event, 201);
        return {
            StatusCode: 201,
            message: "Pengguna berhasil terdaftar!",
            data: newUser,
        };
    } catch (error: any) {
        // Menangani error
        setResponseStatus(event, 500);
        return {
            StatusCode: 500,
            message: error.message || "Terjadi kesalahan pada server.",
        };
    }
});
