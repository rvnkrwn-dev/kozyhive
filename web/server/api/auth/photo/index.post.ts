import { Photo } from "~/server/models/Photo";
import { uploadFile } from "~/server/utils/uploadFile";
import {filename} from "pathe/utils";

export default defineEventHandler(async (event) => {
    try {
        const user = event.context.auth?.user;
        if (!user) {
            setResponseStatus(event, 401);
            return { code: 401, message: "User not authenticated." };
        }

        const formData = await readMultipartFormData(event);
        if (!formData) {
            setResponseStatus(event, 400);
            return { code: 400, message: "No form data provided." };
        }

        let description = '';
        let kost_id = null;
        const secureUrls: string[] = []; // Untuk menyimpan URL secure

        for (const field of formData) {
            const { name, data, filename } = field;

            if (name === "file" && filename) {
                const fileBuffer = data as Buffer;
                const uploadResult = await uploadFile({mimeType: "", fileBuffer, filename });
                secureUrls.push(uploadResult.secure_url); // Simpan URL aman
            } else if (name === "description") {
                description = data.toString("utf-8");
            } else if (name === "kost_id") {
                kost_id = parseInt(data.toString("utf-8"), 10);
            }
        }

        // Validasi
        if (secureUrls.length === 0) {
            return { code: 400, message: "Setidaknya satu file gambar harus disertakan." };
        }

        if (!kost_id) {
            return { code: 400, message: "Kost ID harus disediakan." };
        }

        // Menyimpan ke database
        const photoRecords = await Promise.all(
            secureUrls.map((url) =>
                Photo.create({
                    data: {
                        image_url: url,
                        description: description || null,
                        kost_id,
                    },
                })
            )
        );

        return {
            code: 201,
            message: "Foto berhasil ditambahkan",
            data: photoRecords,
        };
    } catch (error: any) {
        return sendError(
            event,
            createError({
                statusCode: 500,
                statusMessage: error?.message || "Internal Server Error",
            })
        );
    }
});
