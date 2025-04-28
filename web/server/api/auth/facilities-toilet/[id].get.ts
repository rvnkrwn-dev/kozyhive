import { FacilitiesToilet } from '~/server/models/FacilitiesToilet';
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    // Check if user exists
    const user = event.context.auth.user;

    if (!user) {
        setResponseStatus(event, 403);
        return { statusCode: 403, message: 'Pengguna tidak valid' };
    }

    try {
        const id = parseInt(event.context.params?.id as string, 10);
        const address = await FacilitiesToilet.getById(id);

        if (!address) {
            setResponseStatus(event, 404);
            return { statusCode: 404, message: 'FacilitiesToilet tidak ditemukan' };
        }

        return {
            statusCode: 200,
            message: 'FacilitiesToilet berhasil dikembalikan!',
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