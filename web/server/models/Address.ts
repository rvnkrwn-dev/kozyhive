import { prisma } from "~/server/config/prisma";
import { AddressRequest, AddressResponse } from "~/server/types/AuthType";

export class Address {
    // Create new address
    static async create(data: Omit<AddressRequest, "id">): Promise<AddressResponse> {
        const newAddress = await prisma.address.create({
            data,
        });
        return {
            id: newAddress.id,
            street_name: newAddress.street_name,
            street_number: newAddress.street_number,
            village_name: newAddress.village_name,
            city: newAddress.city,
            state: newAddress.state,
            zip: newAddress.zip,
            longitude: newAddress.longitude,
            latitude: newAddress.latitude,
            kost_id: newAddress.kost_id,
            kost_name: "",
        };
    }

    // Get single address by ID
    static async getById(id: number): Promise<AddressResponse | null> {
        const address = await prisma.address.findUnique({
            where: { id },
        });

        if (!address) return null;

        return {
            id: address.id,
            street_name: address.street_name,
            street_number: address.street_number,
            village_name: address.village_name,
            city: address.city,
            state: address.state,
            zip: address.zip,
            longitude: address.longitude,
            latitude: address.latitude,
            kost_id: address.kost_id,
            kost_name: "", // Placeholder if you decide to query Kost relation in the future
        };
    }

    // Get all addresses with pagination
    static async getAll(page: number, pageSize: number): Promise<AddressResponse[]> {
        const skip = (page - 1) * pageSize; // Calculate skip value
        const take = pageSize; // Number of items per page

        const addresses = await prisma.address.findMany({
            skip,
            take,
            select: {
                id: true,
                street_name: true,
                street_number: true,
                village_name: true,
                city: true,
                state: true,
                zip: true,
                longitude: true,
                latitude: true,
                kost_id: true,
            },
        });

        return addresses.map((address) => ({
            ...address,
            kost_name: "", // Placeholder if kost relation is needed
        }));
    }

    // Update an address by ID
    static async update(id: number, data: Partial<AddressRequest>): Promise<AddressResponse> {
        const updatedAddress = await prisma.address.update({
            where: { id },
            data,
        });

        return {
            id: updatedAddress.id,
            street_name: updatedAddress.street_name,
            street_number: updatedAddress.street_number,
            village_name: updatedAddress.village_name,
            city: updatedAddress.city,
            state: updatedAddress.state,
            zip: updatedAddress.zip,
            longitude: updatedAddress.longitude,
            latitude: updatedAddress.latitude,
            kost_id: updatedAddress.kost_id,
            kost_name: "", // Placeholder
        };
    }
    static delete = (id: number) => {
        return prisma.address.delete({
            where: {id},
        });
    };

    static countAll = () => {
        return prisma.address.count();
    };
}
