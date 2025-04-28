import { Address } from '~/server/models/address';

export default defineEventHandler(async (event) => {
    // Check if user exists
    const user = event.context.auth.user;

    if (!user) {
        setResponseStatus(event, 403);
        return { code: 403, message: 'Pengguna tidak valid' };
    }

    try {
        const id = parseInt(event.context.params?.id as string, 10);
        // Read the request body
        const data = await readBody(event);

        const address = await Address.update(id, data);

        return {
            code: 200,
            message: 'Address berhasil diperbarui!',
            data: address,
        };
    } catch (error: any) {
        return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal Server Error' }));
    }
});