import { Kost } from '~/server/models/Kost';
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    try {
        const id = parseInt(event.context.params?.id as string, 10);
        const address = await Kost.getById(id);

        if (!address) {
            setResponseStatus(event, 404);
            return { statusCode: 404, message: 'Kost tidak ditemukan' };
        }

        return {
            statusCode: 200,
            message: 'Kost berhasil dikembalikan!',
            data: address,
        };
    } catch (error: any) {
        // Menangani error
        const {statusCode, message} = errorHandlingTransfrom(error);
        setResponseStatus(event, statusCode);
        return {
            statusCode,
            message,
        }
    }
});