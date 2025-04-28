import { RefreshToken } from '~/server/models/RefreshToken';
import { decodeRefreshToken, generateAccessToken } from '~/server/utils/jwt';
import { User } from "~/server/models/User";
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    try {
        // Mengambil refresh token dari cookie menggunakan getCookie
        const refreshToken = getCookie(event, 'refresh_token');

        if (!refreshToken) {
            setResponseStatus(event, 400);
            return { statusCode: 400, message: 'Tidak ada refresh token yang ditemukan dalam cookie.' };
        }

        // Memeriksa apakah refresh token ada di database
        const storedToken = await RefreshToken.findToken(refreshToken);
        if (!storedToken) {
            setResponseStatus(event, 403);
            return { statusCode: 403, message: 'Refresh token tidak valid' };
        }

        // Memverifikasi refresh token
        let decoded: any;
        try {
            decoded = decodeRefreshToken(refreshToken);
        } catch (error) {
            setResponseStatus(event, 403);
            return { statusCode: 403, message: 'Refresh token tidak valid' };
        }

        // Memeriksa apakah pengguna ada
        const user = await User.getUserById(decoded.id);
        if (!user) {
            setResponseStatus(event, 403);
            return { statusCode: 403, message: 'Pengguna tidak valid dengan refresh token.' };
        }

        // Menghasilkan token akses baru
        const accessToken = generateAccessToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        // Mengembalikan token akses baru dalam respons
        return {
            statusCode: 200,
            message: 'Token akses baru berhasil dibuat!',
            access_token: accessToken,
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