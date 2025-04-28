import { FacilitiesRoom } from '~/server/models/FacilitiesRoom';
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    try {
        // Periksa apakah pengguna ada
        const user = event.context?.auth?.user;
        if (!user) {
            setResponseStatus(event, 403);
            return { statusCode: 403, message: 'Pengguna tidak valid' };
        }

        // Ambil parameter `page` dan `pagesize` dari query string
        const query = getQuery(event);
        const page = parseInt(query.page as string, 10) || 1;
        const pagesize = parseInt(query.pagesize as string, 10) || 10;

        // Validasi input
        if (page <= 0 || pagesize <= 0) {
            setResponseStatus(event, 400);
            return { statusCode: 403, message: 'Halaman dan ukuran halaman harus berupa bilangan bulat positif.' };
        }

        // Ambil data FacilitiesRoom
        const address = await FacilitiesRoom.getAll(page, pagesize);

        // Hitung total halaman
        const totalFacilitiesRooms = await FacilitiesRoom.countAll();
        const totalPages = Math.ceil(totalFacilitiesRooms / pagesize);

        // Buat URL untuk prev dan next
        const baseUrl = "/api/auth/facilities-room";
        const prevPage = page > 1 ? `${baseUrl}?page=${page - 1}&pagesize=${pagesize}` : null;
        const nextPage = page < totalPages ? `${baseUrl}?page=${page + 1}&pagesize=${pagesize}` : null;

        // Return hasil data
        return {
            statusCode: 200,
            message: 'FacilitiesRoom berhasil dikembalikan!',
            data: address,
            totalPages,
            prev: prevPage,
            next: nextPage,
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