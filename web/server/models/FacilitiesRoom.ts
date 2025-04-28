import { prisma } from "~/server/config/prisma";
import { FacilitiesRoomRequest, FacilitiesRoomResponse } from "~/server/types/AuthType";

export class FacilitiesRoom {
    // Create a new FacilitiesRoom
    static async create(data: FacilitiesRoomRequest): Promise<FacilitiesRoomResponse> {
        const newFacilitiesRoom = await prisma.facilitiesRoom.create({
            data: {
                ac: data.ac,
                meja: data.meja,
                lemari: data.lemari,
                kursi: data.kursi,
                wifi: data.wifi,
                kost_id: data.kost_id,
            },
        });

        return {
            id: newFacilitiesRoom.id,
            ac: newFacilitiesRoom.ac,
            meja: newFacilitiesRoom.meja,
            lemari: newFacilitiesRoom.lemari,
            kursi: newFacilitiesRoom.kursi,
            wifi: newFacilitiesRoom.wifi,
            kost_id: newFacilitiesRoom.kost_id,
            created_at: newFacilitiesRoom.created_at,
            updated_at: newFacilitiesRoom.updated_at,
        };
    }

    // Get FacilitiesRoom by ID
    static async getById(id: number): Promise<FacilitiesRoomResponse | null> {
        const facilitiesRoom = await prisma.facilitiesRoom.findUnique({
            where: { id },
        });

        if (!facilitiesRoom) return null;

        return {
            id: facilitiesRoom.id,
            ac: facilitiesRoom.ac,
            meja: facilitiesRoom.meja,
            lemari: facilitiesRoom.lemari,
            kursi: facilitiesRoom.kursi,
            wifi: facilitiesRoom.wifi,
            kost_id: facilitiesRoom.kost_id,
            created_at: facilitiesRoom.created_at,
            updated_at: facilitiesRoom.updated_at,
        };
    }

    // Get all FacilitiesRooms (Optional: Add Pagination)
    static async getAll(page: number, pageSize: number): Promise<FacilitiesRoomResponse[]> {
        const skip = (page - 1) * pageSize; // Menghitung jumlah data yang dilewati berdasarkan halaman
        const take = pageSize; // Jumlah data per halaman

        const facilitiesRooms = await prisma.facilitiesRoom.findMany({
            skip: skip,
            take: take,
        });

        return facilitiesRooms.map((room) => ({
            id: room.id,
            ac: room.ac,
            meja: room.meja,
            lemari: room.lemari,
            kursi: room.kursi,
            wifi: room.wifi,
            kost_id: room.kost_id,
            created_at: room.created_at,
            updated_at: room.updated_at,
        }));
    }

    // Update FacilitiesRoom by ID
    static async update(id: number, data: Partial<FacilitiesRoomRequest>): Promise<FacilitiesRoomResponse> {
        const updatedFacilitiesRoom = await prisma.facilitiesRoom.update({
            where: { id },
            data: {
                ac: data.ac ?? undefined,
                meja: data.meja ?? undefined,
                lemari: data.lemari ?? undefined,
                kursi: data.kursi ?? undefined,
                wifi: data.wifi ?? undefined,
                kost_id: data.kost_id ?? undefined,
            },
        });

        return {
            id: updatedFacilitiesRoom.id,
            ac: updatedFacilitiesRoom.ac,
            meja: updatedFacilitiesRoom.meja,
            lemari: updatedFacilitiesRoom.lemari,
            kursi: updatedFacilitiesRoom.kursi,
            wifi: updatedFacilitiesRoom.wifi,
            kost_id: updatedFacilitiesRoom.kost_id,
            created_at: updatedFacilitiesRoom.created_at,
            updated_at: updatedFacilitiesRoom.updated_at,
        };
    }

    // Delete FacilitiesRoom by ID
    static async delete(id: number): Promise<FacilitiesRoomResponse> {
        const deletedFacilitiesRoom = await prisma.facilitiesRoom.delete({
            where: { id },
        });

        return {
            id: deletedFacilitiesRoom.id,
            ac: deletedFacilitiesRoom.ac,
            meja: deletedFacilitiesRoom.meja,
            lemari: deletedFacilitiesRoom.lemari,
            kursi: deletedFacilitiesRoom.kursi,
            wifi: deletedFacilitiesRoom.wifi,
            kost_id: deletedFacilitiesRoom.kost_id,
            created_at: deletedFacilitiesRoom.created_at,
            updated_at: deletedFacilitiesRoom.updated_at,
        };
    }

    static async countAll(): Promise<number> {
        return await prisma.facilitiesRoom.count();
    }
}
