import { Kost } from "~/server/models/Kost";
import { errorHandlingTransfrom } from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    try {
        // Ambil parameter query
        const query = getQuery(event);
        const page = parseInt(query.page as string, 10) || 1;
        const pagesize = parseInt(query.pagesize as string, 10) || 10;
        const category = query.category as string || null;
        const longtitude = query.longtitude ? parseFloat(query.longtitude as string) : null;
        const latitude = query.latitude ? parseFloat(query.latitude as string) : null;

        // Validasi input
        if (page <= 0 || pagesize <= 0) {
            setResponseStatus(event, 400);
            return {
                statusCode: 403,
                message: "Halaman dan ukuran halaman harus berupa bilangan bulat positif.",
            };
        }

        // Ambil data Kost berdasarkan kategori
        const kosts = await Kost.getAll(page, pagesize, category, longtitude, latitude);

        // Hitung total halaman
        const totalKosts = await Kost.countAll();
        const totalPages = Math.ceil(totalKosts / pagesize);

        // Buat URL untuk prev dan next
        const baseUrl = "/api/kosts";
        const prevPage = page > 1 ? `${baseUrl}?page=${page - 1}&pagesize=${pagesize}` : null;
        const nextPage = page < totalPages ? `${baseUrl}?page=${page + 1}&pagesize=${pagesize}` : null;

        // Return hasil data
        return {
            statusCode: 200,
            message: "Kost berhasil dikembalikan!",
            data: kosts,
            totalPages,
            prev: prevPage,
            next: nextPage,
        };
    } catch (error: any) {
        // Menangani error
        const { statusCode, message } = errorHandlingTransfrom(error);
        setResponseStatus(event, statusCode);
        return {
            statusCode,
            message,
        };
    }
});
