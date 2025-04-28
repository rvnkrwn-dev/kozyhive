import {prisma} from "~/server/config/prisma";
import {WishlistRequest, WishlistResponse} from "~/server/types/AuthType";

export class Wishlist {
    // Create a new Wishlist entry
    static async create(data: WishlistRequest): Promise<WishlistResponse> {
        const newWishlist = await prisma.wishlist.create({
            data: {
                user_id: data.user_id,
                kost_id: data.kost_id,
            },
        });

        return {
            id: newWishlist.id,
            user_id: newWishlist.user_id,
            kost_id: newWishlist.kost_id,
            created_at: newWishlist.created_at,
            updated_at: newWishlist.updated_at,
        };
    }

    // Get Wishlist by ID
    static async getById(id: number): Promise<WishlistResponse | null> {
        const wishlist = await prisma.wishlist.findUnique({
            where: {id},
        });

        if (!wishlist) return null;

        return {
            id: wishlist.id,
            user_id: wishlist.user_id,
            kost_id: wishlist.kost_id,
            created_at: wishlist.created_at,
            updated_at: wishlist.updated_at,
        };
    }

    // Get all Wishlists by User ID
    static async getByUserId(user_id: number): Promise<WishlistResponse[]> {
        const wishlists = await prisma.wishlist.findMany({
            where: {user_id},
        });

        return wishlists.map((wishlist) => ({
            id: wishlist.id,
            user_id: wishlist.user_id,
            kost_id: wishlist.kost_id,
            created_at: wishlist.created_at,
            updated_at: wishlist.updated_at,
        }));
    }

    // Delete Wishlist by ID
    static async delete(id: number): Promise<WishlistResponse> {
        const deletedWishlist = await prisma.wishlist.delete({
            where: {id},
        });

        return {
            id: deletedWishlist.id,
            user_id: deletedWishlist.user_id,
            kost_id: deletedWishlist.kost_id,
            created_at: deletedWishlist.created_at,
            updated_at: deletedWishlist.updated_at,
        };
    }

    // Count all Wishlist entries (Optional)
    static async countAll(): Promise<number> {
        return await prisma.wishlist.count();
    }

    // Get all Wishlist entries with optional pagination
    static async getAll(page: number, pageSize: number): Promise<WishlistResponse[]> {
        const skip = (page - 1) * pageSize; // Menghitung jumlah data yang dilewati berdasarkan halaman
        const take = pageSize; // Jumlah data per halaman

        const wishlists = await prisma.wishlist.findMany({
            skip: skip,
            take: take,
        });

        return wishlists.map((wishlist) => ({
            id: wishlist.id,
            user_id: wishlist.user_id,
            kost_id: wishlist.kost_id,
            created_at: wishlist.created_at,
            updated_at: wishlist.updated_at,
        }));
    }

    // Update Wishlist entry by ID
    static async update(id: number, data: Partial<WishlistRequest>): Promise<WishlistResponse | null> {
        const updatedWishlist = await prisma.wishlist.update({
            where: {id},
            data: {
                user_id: data.user_id ?? undefined,
                kost_id: data.kost_id ?? undefined,
            },
        });

        return {
            id: updatedWishlist.id,
            user_id: updatedWishlist.user_id,
            kost_id: updatedWishlist.kost_id,
            created_at: updatedWishlist.created_at,
            updated_at: updatedWishlist.updated_at,
        };
    }


}
