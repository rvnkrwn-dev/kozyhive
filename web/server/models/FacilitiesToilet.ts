import { prisma } from "~/server/config/prisma";
import { FacilitiesToiletRequest, FacilitiesToiletResponse } from "~/server/types/AuthType";

export class FacilitiesToilet {
    // Create a new FacilitiesToilet
    static async create(data: FacilitiesToiletRequest): Promise<FacilitiesToiletResponse> {
        const newFacilitiesToilet = await prisma.facilitiesToilet.create({
            data: {
                kamar_mandi: data.kamar_mandi,
                shower: data.shower,
                kloset: data.kloset,
                air_panas: data.air_panas,
                kost_id: data.kost_id,
            },
        });

        return {
            id: newFacilitiesToilet.id,
            kamar_mandi: newFacilitiesToilet.kamar_mandi,
            shower: newFacilitiesToilet.shower,
            kloset: newFacilitiesToilet.kloset,
            air_panas: newFacilitiesToilet.air_panas,
            kost_id: newFacilitiesToilet.kost_id,
        };
    }

    // Get FacilitiesToilet by ID
    static async getById(id: number): Promise<FacilitiesToiletResponse | null> {
        const facilitiesToilet = await prisma.facilitiesToilet.findUnique({
            where: { id },
        });

        if (!facilitiesToilet) return null;

        return {
            id: facilitiesToilet.id,
            kamar_mandi: facilitiesToilet.kamar_mandi,
            shower: facilitiesToilet.shower,
            kloset: facilitiesToilet.kloset,
            air_panas: facilitiesToilet.air_panas,
            kost_id: facilitiesToilet.kost_id,
        };
    }

    // Get all FacilitiesToilets (Optional: Add Pagination)
    static async getAll(page: number, pageSize: number): Promise<FacilitiesToiletResponse[]> {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const facilitiesToilets = await prisma.facilitiesToilet.findMany({
            skip: skip,
            take: take,
        });

        return facilitiesToilets.map((toilet) => ({
            id: toilet.id,
            kamar_mandi: toilet.kamar_mandi,
            shower: toilet.shower,
            kloset: toilet.kloset,
            air_panas: toilet.air_panas,
            kost_id: toilet.kost_id,
        }));
    }

    // Update FacilitiesToilet by ID
    static async update(id: number, data: Partial<FacilitiesToiletRequest>): Promise<FacilitiesToiletResponse> {
        const updatedFacilitiesToilet = await prisma.facilitiesToilet.update({
            where: { id },
            data: {
                kamar_mandi: data.kamar_mandi ?? undefined,
                shower: data.shower ?? undefined,
                kloset: data.kloset ?? undefined,
                air_panas: data.air_panas ?? undefined,
                kost_id: data.kost_id ?? undefined,
            },
        });

        return {
            id: updatedFacilitiesToilet.id,
            kamar_mandi: updatedFacilitiesToilet.kamar_mandi,
            shower: updatedFacilitiesToilet.shower,
            kloset: updatedFacilitiesToilet.kloset,
            air_panas: updatedFacilitiesToilet.air_panas,
            kost_id: updatedFacilitiesToilet.kost_id,
        };
    }

    // Delete FacilitiesToilet by ID
    static async delete(id: number): Promise<FacilitiesToiletResponse> {
        const deletedFacilitiesToilet = await prisma.facilitiesToilet.delete({
            where: { id },
        });

        return {
            id: deletedFacilitiesToilet.id,
            kamar_mandi: deletedFacilitiesToilet.kamar_mandi,
            shower: deletedFacilitiesToilet.shower,
            kloset: deletedFacilitiesToilet.kloset,
            air_panas: deletedFacilitiesToilet.air_panas,
            kost_id: deletedFacilitiesToilet.kost_id,
        };
    }

    // Count all FacilitiesToilets
    static async countAll(): Promise<number> {
        return await prisma.facilitiesToilet.count();
    }
}
