import { Photo } from '~/server/models/Photo';
import { PhotoRequest } from '~/server/types/AuthType';

export default defineEventHandler(async (event) => {
    try {
        // Periksa autentikasi pengguna
        const user = event.context.auth?.user;
        if (!user) {
            setResponseStatus(event, 401);
            return { code: 401, message: 'User not authenticated.' };
        }

        // Ambil ID dari URL atau parameter query
        const photoId = parseInt(event.context.params?.id as string, 10);
        if (isNaN(photoId)) {
            setResponseStatus(event, 400);
            return { code: 400, message: 'Invalid photo ID.' };
        }

        // Baca data dari body permintaan
        const body = await readBody(event);
        const updateData: Partial<PhotoRequest> = {
            image_url: body.image_url,
            description: body.description,
            kost_id: body.kost_id,
        };

        // Perbarui data di database
        const updatedPhoto = await Photo.update(photoId, updateData);
        if (!updatedPhoto) {
            setResponseStatus(event, 404);
            return { code: 404, message: 'Photo not found or update failed.' };
        }

        // Return response
        return {
            code: 200,
            message: 'Photo successfully updated.',
            data: updatedPhoto,
        };
    } catch (error: any) {
        return sendError(
            event,
            createError({
                statusCode: 500,
                statusMessage: error?.message || 'Internal Server Error',
            })
        );
    }
});
