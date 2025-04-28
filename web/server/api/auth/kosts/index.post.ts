import { Kost } from '~/server/models/Kost';
import { uploadFile } from '~/server/utils/uploadFile';
import { errorHandlingTransfrom } from '~/server/utils/errorHandlingTransfrom';
import { readMultipartFormData } from 'h3';

function generateSlug(title: string): string {
    const timestamp = Date.now();
    const slug = title.toLowerCase().split(' ').join('-');
    return `${slug}-${timestamp}`;
}

export default defineEventHandler(async (event) => {
    const user = event.context.auth?.user;

    if (!user) {
        setResponseStatus(event, 403);
        return { statusCode: 403, message: 'Pengguna tidak valid' };
    }

    try {
        // Read multipart form data
        const formData = await readMultipartFormData(event);

        if (!formData || formData.length === 0) {
            setResponseStatus(event, 400);
            return { statusCode: 400, message: 'No form data provided.' };
        }

        const payload: any = {
            slug: '',
            title: '',
            price: 0,
            type: '',
            ratings: 0,
            pengaturan_khusus: '',
            owner_id: parseInt(user.id, 10),
            image_url: '',
            address: {},
            facilitiesRoom: {},
            facilitiesToilet: {},
        };

        let uploadResult;

        for (const field of formData) {
            const { name, data, filename, type } = field;

            if (filename) {
                // Handle file upload
                const fileBuffer = data as Buffer;
                const fileName = generateSlug(filename);

                try {
                    uploadResult = await uploadFile(<any>{
                        fileBuffer,
                        filename: fileName,
                        mimeType: type,
                    });
                    payload.image_url = uploadResult.url; // Tambahkan URL gambar
                } catch (uploadError: any) {
                    console.error('File upload failed:', uploadError);
                    throw new Error('Gagal mengunggah file.');
                }
            } else if (data && name) {
                // Handle non-file fields
                const value = data.toString('utf-8');

                if (name.startsWith('address[')) {
                    const key = name.match(/address\[(.*?)\]/)?.[1];
                    if (key) payload.address[key] = value;
                } else if (name.startsWith('facilitiesRoom[')) {
                    const key = name.match(/facilitiesRoom\[(.*?)\]/)?.[1];
                    if (key) payload.facilitiesRoom[key] = value === 'true'; // Convert to boolean
                } else if (name.startsWith('facilitiesToilet[')) {
                    const key = name.match(/facilitiesToilet\[(.*?)\]/)?.[1];
                    if (key) payload.facilitiesToilet[key] = value === 'true' ? true : value; // Mixed boolean/enum
                } else {
                    // Other flat properties
                    payload[name] = name === 'price' || name === 'ratings' ? parseFloat(value) : value;
                }
            }
        }

        // Validasi properti address
        const requiredAddressKeys = [
            'street_name', 'street_number', 'village_name', 'city', 'state', 'zip', 'longitude', 'latitude'
        ];

        const missingKeys = requiredAddressKeys.filter(key => !payload.address[key]);
        if (missingKeys.length > 0) {
            throw new Error(`Missing address properties: ${missingKeys.join(', ')}`);
        }

        // Generate slug berdasarkan title
        payload.slug = generateSlug(payload.title);

        // Buat entri Kost menggunakan payload
        const kos = await Kost.create(payload);

        setResponseStatus(event, 201);
        return {
            statusCode: 201,
            message: 'Kost berhasil ditambahkan!',
            data: kos,
        };
    } catch (error: any) {
        const { statusCode = 500, message = 'Internal Server Error' } = errorHandlingTransfrom(error) || {};
        console.error(error);
        setResponseStatus(event, statusCode);
        return {
            statusCode,
            message,
        };
    }
});