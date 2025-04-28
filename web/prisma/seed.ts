import { prisma } from "~/server/config/prisma";
import { Prisma } from "@prisma/client";

async function main() {
    // Create a user
    const user = await prisma.user.create({
        data: {
            username: 'john_doe',
            full_name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            role: 'USER',
            user_status: 'ACTIVE',
        },
    });

    // Create another user
    const owner = await prisma.user.create({
        data: {
            username: 'owner123',
            full_name: 'Owner One',
            email: 'owner@example.com',
            password: 'ownerpass',
            role: 'OWNER',
            user_status: 'ACTIVE',
        },
    });

    // Create an address
    const address = await prisma.address.create({
        data: {
            street_name: 'Main Street',
            street_number: '123',
            village_name: 'Downtown',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            longitude: '40.7128',
            latitude: '-74.0060',
            kost_id: 1
        },
    });

    // Create a kost with relations
    const kost = await prisma.kost.create({
        data: {
            slug: 'cozy-home',
            title: 'Cozy Home',
            price: 1000.50,
            type: 'CAMPUR',
            ratings: 4.5,
            address: {
                connect: { id: address.id }, // Connect to the existing address
            },
            owner: {
                connect: { id: owner.id }, // Connect to the existing owner
            },
            facilitiesRoom: {
                create: {
                    ac: true,
                    meja: true,
                    lemari: true,
                    kursi: true,
                    wifi: true,
                },
            },
            facilitiesToilet: {
                create: {
                    kamar_mandi: 'DALAM',
                    shower: true,
                    kloset: 'DUDUK',
                    air_panas: false,
                },
            },
        } as Prisma.KostCreateData,
    });

    // Create a wishlist entry
    await prisma.wishlist.create({
        data: {
            user: {
                connect: { id: user.id },
            },
            kost: {
                connect: { id: kost.id },
            },
        },
    });

    // Create a photo
    const photo = await prisma.photo.create({
        data: {
            image_url: 'https://example.com/photo1.jpg',
            description: 'Front view of the kost',
            kost: {
                connect: { id: kost.id },
            },
        },
    });

    // Create a review
    await prisma.ulasan.create({
        data: {
            user: {
                connect: { id: user.id },
            },
            rate: 5,
            comments: 'Great place!',
            photos: {
                connect: { id: photo.id },
            },
        },
    });

    // Create a log entry
    await prisma.log.create({
        data: {
            user: {
                connect: { id: user.id },
            },
            action: 'Masuk',
            description: 'User logged in',
        },
    });

    // Create a refresh token
    await prisma.refreshToken.create({
        data: {
            user: {
                connect: { id: user.id },
            },
            refresh_token: 'random_refresh_token_here',
        },
    });

    console.log('Database seeded successfully');
}

main()
    .catch(e => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });