import { Address } from '~/server/models/address';

export default defineEventHandler(async (event) => {
    // Check if user exists
    const user = event.context.auth.user;

    if (!user) {
        setResponseStatus(event, 403);
        return { code: 403, message: 'Pengguna tidak valid' };
    }

    try {
        // Read the request body
        const data = await readBody(event);

        // Assign user ID from the token
        const newData = {
            ...data,
            user_id: user.id
        };

        const address = await Address.create(newData);

        return {
            code: 201,
            message: 'Address berhasil ditambahkan!',
            data: address,
        };
    } catch (error: any) {
        console.error('Error creating Address:', error);
        return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal Server Error' }));
    }
});