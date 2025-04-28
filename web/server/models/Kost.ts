import { prisma } from "~/server/config/prisma";
import { KostRequest, KostResponse } from "~/server/types/AuthType";

export class Kost {
    // Create a new Kost
    static async create(data: KostRequest): Promise<KostResponse> {
        const newKost = await prisma.kost.create({
            data: {
                slug: data.slug,
                title: data.title,
                price: data.price,
                type: data.type,
                ratings: data.ratings ?? null,
                pengaturan_khusus: data.pengaturan_khusus ?? null,
                address_id: data.address_id,
                facilitiesRoom_id: data.facilitiesRoom_id,
                facilitiesToilet_id: data.facilitiesToilet_id,
                owner_id: data.owner_id,
            },
        });

        return {
            id: newKost.id,
            slug: newKost.slug,
            title: newKost.title,
            price: newKost.price,
            type: newKost.type,
            ratings: newKost.ratings,
            pengaturan_khusus: newKost.pengaturan_khusus,
            owner_id: newKost.owner_id,
            created_at: newKost.created_at,
            updated_at: newKost.updated_at,
        };
    }

    // Get Kost by ID
    static async getById(id: number): Promise<KostResponse | null> {
        const kost = await prisma.kost.findUnique({
            where: { id },
        });

        if (!kost) return null;

        return {
            id: kost.id,
            slug: kost.slug,
            title: kost.title,
            price: kost.price,
            type: kost.type,
            ratings: kost.ratings,
            pengaturan_khusus: kost.pengaturan_khusus,
            owner_id: kost.owner_id,
            created_at: kost.created_at,
            updated_at: kost.updated_at,
        };
    }

    // Get all Kost with pagination
    static async getAll(page: number, pageSize: number): Promise<KostResponse[]> {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const kosts = await prisma.kost.findMany({
            skip,
            take,
        });

        return kosts.map((kost) => ({
            id: kost.id,
            slug: kost.slug,
            title: kost.title,
            price: kost.price,
            type: kost.type,
            ratings: kost.ratings,
            pengaturan_khusus: kost.pengaturan_khusus,
            owner_id: kost.owner_id,
            created_at: kost.created_at,
            updated_at: kost.updated_at,
        }));
    }

    // Update Kost by ID
    static async update(id: number, data: Partial<KostRequest>): Promise<KostResponse> {
        const updatedKost = await prisma.kost.update({
            where: { id },
            data,
        });

        return {
            id: updatedKost.id,
            slug: updatedKost.slug,
            title: updatedKost.title,
            price: updatedKost.price,
            type: updatedKost.type,
            ratings: updatedKost.ratings,
            pengaturan_khusus: updatedKost.pengaturan_khusus,
            owner_id: updatedKost.owner_id,
            created_at: updatedKost.created_at,
            updated_at: updatedKost.updated_at,
        };
    }

    // Delete Kost by ID
    static async delete(id: number): Promise<KostResponse> {
        const deletedKost = await prisma.kost.delete({
            where: { id },
        });

        return {
            id: deletedKost.id,
            slug: deletedKost.slug,
            title: deletedKost.title,
            price: deletedKost.price,
            type: deletedKost.type,
            ratings: deletedKost.ratings,
            pengaturan_khusus: deletedKost.pengaturan_khusus,
            owner_id: deletedKost.owner_id,
            created_at: deletedKost.created_at,
            updated_at: deletedKost.updated_at,
        };
    }

    // Count all Kost
    static async countAll(): Promise<number> {
        return await prisma.kost.count();
    }
}
