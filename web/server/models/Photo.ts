import { prisma } from "~/server/config/prisma";
import { PhotoRequest, PhotoResponse } from "~/server/types/AuthType";

export class Photo {
    // Create a new Photo
    // static async create(data: PhotoRequest): Promise<PhotoResponse> {
    //     const newPhoto = await prisma.photo.create({
    //         data: {
    //             image_url: data.image_url,
    //             description: data.description,
    //             kost_id: data.kost_id,
    //         },
    //     });
    //
    //     return {
    //         id: newPhoto.id,
    //         image_url: newPhoto.image_url,
    //         description: newPhoto.description,
    //         kost_id: newPhoto.kost_id,
    //         created_at: newPhoto.created_at,
    //         updated_at: newPhoto.updated_at,
    //     };
    // }

    static async create(data: any) {
        if (!data.image_url) {
            throw new Error("URL gambar harus disertakan.");
        }

        // Validasi relasi
        if (!data.kost_id && !data.ulasan_id) {
            throw new Error("Kost ID atau Ulasan ID harus disediakan.");
        }

        const photo = await prisma.photo.create({
            data: {
                image_url: data.image_url,
                description: data.description ?? null,
                kost_id: data.kost_id ?? null, // Relasi Kost jika tersedia
                ulasan_id: data.ulasan_id ?? null, // Relasi Ulasan jika tersedia
            },
        });

        return photo;
    }

    // Get Photo by ID
    static async getById(id: number): Promise<PhotoResponse | null> {
        const photo = await prisma.photo.findUnique({
            where: { id },
        });

        if (!photo) return null;

        return {
            id: photo.id,
            image_url: photo.image_url,
            description: photo.description,
            kost_id: photo.kost_id,
            created_at: photo.created_at,
            updated_at: photo.updated_at,
        };
    }

    // Get all Photos (Optional: Add Pagination)
    static async getAll(page: number, pageSize: number): Promise<PhotoResponse[]> {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const photos = await prisma.photo.findMany({
            skip: skip,
            take: take,
        });

        return photos.map((photo) => ({
            id: photo.id,
            image_url: photo.image_url,
            description: photo.description,
            kost_id: photo.kost_id,
            created_at: photo.created_at,
            updated_at: photo.updated_at,
        }));
    }

    // Update Photo by ID
    static async update(id: number, data: Partial<PhotoRequest>): Promise<PhotoResponse | null> {
        try {
            const updatedPhoto = await prisma.photo.update({
                where: { id },
                data: {
                    image_url: data.image_url ?? undefined,
                    description: data.description ?? undefined,
                    kost_id: data.kost_id ?? undefined,
                },
            });

            return {
                id: updatedPhoto.id,
                image_url: updatedPhoto.image_url,
                description: updatedPhoto.description,
                kost_id: updatedPhoto.kost_id,
                created_at: updatedPhoto.created_at,
                updated_at: updatedPhoto.updated_at,
            };
        } catch (error) {
            console.error("Error updating Photo:", error);
            return null;
        }
    }

    // Delete Photo by ID
    static async delete(id: number): Promise<PhotoResponse> {
        const deletedPhoto = await prisma.photo.delete({
            where: { id },
        });

        return {
            id: deletedPhoto.id,
            image_url: deletedPhoto.image_url,
            description: deletedPhoto.description,
            kost_id: deletedPhoto.kost_id,
            created_at: deletedPhoto.created_at,
            updated_at: deletedPhoto.updated_at,
        };
    }

    // Count all Photos (Optional)
    static async countAll(): Promise<number> {
        return await prisma.photo.count();
    }
}
