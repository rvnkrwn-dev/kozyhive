import { prisma } from "~/server/config/prisma";
import { KostRequest, KostResponse } from "~/server/types/AuthType";

export class Kost {
    // Create a new Kost
    // static async create(data: KostRequest): Promise<KostResponse> {
    //     const newKost = await prisma.kost.create({
    //         data: {
    //             slug: data.slug,
    //             title: data.title,
    //             price: data.price,
    //             type: data.type,
    //             ratings: data.ratings ?? null,
    //             pengaturan_khusus: data.pengaturan_khusus ?? null,
    //             address_id: data.address_id,
    //             facilitiesRoom_id: data.facilitiesRoom_id,
    //             facilitiesToilet_id: data.facilitiesToilet_id,
    //             owner_id: data.owner_id,
    //         },
    //     });
    //
    //     return {
    //         id: newKost.id,
    //         slug: newKost.slug,
    //         title: newKost.title,
    //         price: newKost.price,
    //         type: newKost.type,
    //         ratings: newKost.ratings,
    //         pengaturan_khusus: newKost.pengaturan_khusus,
    //         owner_id: newKost.owner_id,
    //         created_at: newKost.created_at,
    //         updated_at: newKost.updated_at,
    //     };
    // }

    // static async create(data: KostRequest) {
    //     return await prisma.$transaction(async (transaction) => {
    //         // Step 1: Buat entri Kost
    //         const newKost = await transaction.kost.create({
    //             data: {
    //                 slug: data.slug,
    //                 title: data.title,
    //                 price: data.price,
    //                 type: data.type,
    //                 ratings: data.ratings,
    //                 pengaturan_khusus: data.pengaturan_khusus ?? null,
    //                 owner_id: data.owner_id,
    //             },
    //         });
    //
    //         // Step 2: Buat Address terkait Kost
    //         const address = await transaction.address.create({
    //             data: {
    //                 street_name: data.address.street_name,
    //                 street_number: data.address.street_number,
    //                 village_name: data.address.village_name,
    //                 city: data.address.city,
    //                 state: data.address.state,
    //                 zip: data.address.zip,
    //                 longitude: data.address.longitude,
    //                 latitude: data.address.latitude,
    //                 kost_id: newKost.id, // Pastikan newKost.id benar-benar ada
    //             },
    //         });
    //
    //         // Step 3: Buat FacilitiesRoom terkait Kost
    //         const facilitiesRoom = await transaction.facilitiesRoom.create({
    //             data: {
    //                 ac: data.facilitiesRoom.ac,
    //                 meja: data.facilitiesRoom.meja,
    //                 lemari: data.facilitiesRoom.lemari,
    //                 kursi: data.facilitiesRoom.kursi,
    //                 wifi: data.facilitiesRoom.wifi,
    //                 kost_id: newKost.id,
    //             },
    //         });
    //
    //         // Step 4: Buat FacilitiesToilet terkait Kost
    //         const facilitiesToilet = await transaction.facilitiesToilet.create({
    //             data: {
    //                 kamar_mandi: data.facilitiesToilet.kamar_mandi as "DALAM" | "LUAR",
    //                 shower: data.facilitiesToilet.shower,
    //                 kloset: data.facilitiesToilet.kloset as "DUDUK" | "JONGKOK",
    //                 air_panas: data.facilitiesToilet.air_panas,
    //                 kost_id: newKost.id,
    //             },
    //         });
    //
    //         return {
    //             kost: newKost,
    //             address,
    //             facilitiesRoom,
    //             facilitiesToilet,
    //         }; // Return semua data yang dibuat
    //     });
    // }

    static async create(data: KostRequest, file?: Buffer | Buffer[]) {
        return prisma.$transaction(async (transaction) => {
            // Step 1: Buat entri Kost
            const newKost = await transaction.kost.create({
                data: {
                    slug: data.slug,
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    type: data.type,
                    ratings: data.ratings,
                    pengaturan_khusus: data.pengaturan_khusus ?? null,
                    owner_id: data.owner_id,
                },
            });

            // Step 2: Buat Address terkait Kost
            const address = await transaction.address.create({
                data: {
                    street_name: data.address.street_name,
                    street_number: data.address.street_number,
                    village_name: data.address.village_name,
                    city: data.address.city,
                    state: data.address.state,
                    zip: data.address.zip,
                    longitude: data.address.longitude,
                    latitude: data.address.latitude,
                    kost_id: newKost.id, // Pastikan newKost.id benar-benar ada
                },
            });

            // Step 3: Buat FacilitiesRoom terkait Kost
            const facilitiesRoom = await transaction.facilitiesRoom.create({
                data: {
                    ac: data.facilitiesRoom.ac,
                    meja: data.facilitiesRoom.meja,
                    lemari: data.facilitiesRoom.lemari,
                    kursi: data.facilitiesRoom.kursi,
                    wifi: data.facilitiesRoom.wifi,
                    kost_id: newKost.id,
                },
            });

            // Step 4: Buat FacilitiesToilet terkait Kost
                    const facilitiesToilet = await transaction.facilitiesToilet.create({
                        data: {
                            kamar_mandi: data.facilitiesToilet.kamar_mandi as "DALAM" | "LUAR",
                            shower: data.facilitiesToilet.shower,
                            kloset: data.facilitiesToilet.kloset as "DUDUK" | "JONGKOK",
                            air_panas: data.facilitiesToilet.air_panas,
                            kost_id: newKost.id,
                        },
                    });

            // Step 5: Upload dan simpan multiple photos
            const uploadedPhotos = [];
            if (file) {
                const filesArray = Array.isArray(file) ? file : [file]; // Convert to array if single file
                for (const fileBuffer of filesArray) {
                    const fileName = `${data.slug}-${Date.now()}`;
                    const uploadResult = await uploadFile({
                        fileBuffer: fileBuffer,
                        filename: fileName,
                        mimeType: "image/jpeg", // Sesuaikan dengan jenis file yang diunggah
                    });

                    // Simpan foto ke dalam tabel Photo
                    const photo = await transaction.photo.create({
                        data: {
                            image_url: uploadResult.url,
                            description: "Foto galeri kost",
                            kost_id: newKost.id, // Relasi foto dengan Kost
                        },
                    });

                    uploadedPhotos.push(photo);
                }
            }

            return {
                kost: newKost,
                address,
                facilitiesRoom,
                facilitiesToilet,
                photo: uploadedPhotos,
            };
        });
    }


    // Get Kost by ID
    static async getById(id: number) {
            // Query untuk mendapatkan data Kost berdasarkan ID
            const kost = await prisma.kost.findUnique({
                where: { id },
                include: { // Gunakan include untuk relasi yang ingin disertakan
                    address: {
                        select: {
                            id: true,
                            street_name: true,
                            street_number: true,
                            village_name: true,
                            city: true,
                            state: true,
                            zip: true,
                        },
                    },
                    facilitiesRoom: {
                        select: {
                            id: true,
                            ac: true,
                            meja: true,
                            lemari: true,
                            kursi: true,
                            wifi: true,
                        },
                    },
                    facilitiesToilet: {
                        select: {
                            id: true,
                            kamar_mandi: true,
                            shower: true,
                            kloset: true,
                            air_panas: true,
                        },
                    },
                },
            });

            // Jika Kost tidak ditemukan, kembalikan null dengan pesan
            if (!kost) {
                return {
                    code: 404,
                    message: "Kost tidak ditemukan.",
                    data: null,
                };
            }

            // Kembalikan data Kost dengan struktur yang jelas
            return {
                code: 200,
                message: "Kost berhasil ditemukan.",
                data: {
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
                    address: kost.address,
                    facilitiesRoom: kost.facilitiesRoom,
                    facilitiesToilet: kost.facilitiesToilet,
                },
            };
        }



    // Get all Kost with pagination
    // Get all Kost with pagination and category filter
    static getAll = async (page: number, pagesize: number, category?: string | null, longtitude?: number | null, latitude?: number | null) => {
        const skip = (page - 1) * pagesize; // Hitung data yang dilewatkan
        const take = pagesize; // Jumlah data per halaman

        // Query dasar
        let queryOptions: any = {
            skip,
            take,
            select: {
                id: true,
                slug: true,
                title: true,
                price: true,
                type: true,
                ratings: true,
                pengaturan_khusus: true,
                owner_id: true,
                created_at: true,
                updated_at: true,
                address: {
                    select: {
                        id: true,
                        street_name: true,
                        street_number: true,
                        village_name: true,
                        city: true,
                        state: true,
                        zip: true,
                    },
                },
            },
        };

        // Tambahkan filter berdasarkan kategori menggunakan switch case
        switch (category) {
            case "top":
                queryOptions.orderBy = { ratings: "desc" }; // Urutkan berdasarkan rating tertinggi
                break;
            case "best-offers":
                queryOptions.where = { price: { lte: 1000000 } }; // Filter dengan harga di bawah 1 juta
                break;
            case "most-recents":
                queryOptions.orderBy = { created_at: "desc" }; // Urutkan berdasarkan tanggal terbaru
                break;
            case "recommended":
                if (longtitude && latitude) {
                    queryOptions.where = {
                        AND: [
                            { address: { latitude: { near: latitude } } },
                            { address: { longtitude: { near: longtitude } } },
                        ],
                    };
                }
                break;
            default:
                // Tanpa filter khusus
                break;
        }

        // Ambil data dari database menggunakan Prisma
        return await prisma.kost.findMany(queryOptions);
    };


    // Update Kost by ID
    static async update(id: number, data: any) {
        const updatedKost = await prisma.kost.update({
            where: { id },
            data,
        })

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
    static async delete(id: number) {
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
