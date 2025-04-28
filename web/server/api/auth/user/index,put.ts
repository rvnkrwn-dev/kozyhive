import { prisma } from "~/server/config/prisma";
import { uploadFile } from "~/server/utils/uploadFile";
import { UpdateRequest } from "~/server/types/AuthType";
import { errorHandlingTransfrom } from "~/server/utils/errorHandlingTransfrom"; // Pastikan utilitas tersedia
import { H3Event } from "h3"; // Tipe H3Event untuk event handler

export class User {
    static async update(
        id: number,
        data: UpdateRequest,
        file?: Buffer,
        event?: H3Event
    ): Promise<any> {
        try {
            let uploadResult;

            // Jika ada file yang diberikan, lakukan upload
            if (file) {
                const fileName = `${data.username}-${Date.now()}`;
                uploadResult = await uploadFile({
                    fileBuffer: file,
                    filename: fileName,
                    mimeType: "image/jpeg", // Sesuaikan mime type dengan file yang diberikan
                });

                // Tambahkan URL gambar ke data
                data.image_url = uploadResult.url;
            }

            // Update data di database
            const updatedUser = await prisma.user.update({
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
                    image_url: true, // Tambahkan image_url ke response
                },
            });

            return updatedUser;
        } catch (error) {
            console.error("Error while updating user:", error);

            if (event) {
                // Menangani error dengan utilitas errorHandlingTransfrom
                const { statusCode, message } = errorHandlingTransfrom(error);
                setResponseStatus(event, statusCode);

                return {
                    statusCode,
                    message,
                };
            }

            // Jika event tidak tersedia, lempar error standar
            throw new Error("Failed to update user.");
        }
    }
}