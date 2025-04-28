import { uploadFile } from '~/server/utils/uploadFile';
import { PhotoRequest } from '~/server/types/AuthType';
import { Photo } from '~/server/models/Photo';
import { LogRequest } from '~/server/types/AuthType';
import { ActionLog } from '~/server/types/TypesModel';

function generateUniqueSlug(imageUrl: string) {
    const slug = imageUrl.split('/').pop()?.split('.')[0]?.toLowerCase();
    return `${slug}-${Date.now()}`;
}

export default defineEventHandler(async (event) => {
    try {
        // Periksa autentikasi pengguna
        const user = event.context.auth?.user;
        if (!user) {
            setResponseStatus(event, 401);
            return { code: 401, message: 'User not authenticated.' };
        }

        // Baca data formulir multipart
        const formData = await readMultipartFormData(event);

        if (!formData) {
            setResponseStatus(event, 400);
            return { code: 400, message: 'No form data provided.' };
        }

        const payload: PhotoRequest = {
            image_url: '',
            description: '',
            kost_id: undefined,
        };

        let uploadResult;

        for (const field of formData) {
            const { name, data, filename, type } = field;

            if (typeof name !== 'string') return;

            if (filename) {
                const fileBuffer = data as Buffer;
                const fileName = generateUniqueSlug(filename);

                // Unggah file menggunakan utilitas upload
                uploadResult = await uploadFile(<any>{
                    fileBuffer,
                    filename: fileName,
                    mimeType: type,
                });

                payload.image_url = uploadResult.url;
            } else if (data) {
                switch (name) {
                    case 'description':
                        payload.description = data.toString('utf-8');
                        break;
                    case 'kost_id':
                        payload.kost_id = parseInt(data.toString('utf-8'), 10);
                        break;
                }
            }
        }

        // Simpan data ke database
        const photo = await Photo.create(payload);

        setResponseStatus(event,201)

        return { code: 201, message: 'Photo berhasil ditambahkan', data: photo };

    } catch (error: any) {
        // Menangani error
        const {statusCode, message} = errorHandlingTransfrom(error);
        setResponseStatus(event, statusCode);
        return {
            statusCode,
            message,
        };
    }
});
