import UrlPattern from "url-pattern";
import { decodeAccessToken } from "~/server/utils/jwt";
import { User } from "~/server/models/User";

export default defineEventHandler(async (event) => {
    try {
        const endpoints = [
            '/api/auth/user',
            '/api/auth/logs',
            '/api/auth/logout',
            '/api/auth/verification',
            '/api/auth/users',
            '/api/auth/user',
            '/api/auth/users/:id',
            '/api/auth/users/search?q=:q',
            '/api/auth/users?page=:page&pagesize=:pagesize',
            '/api/auth/kosts',
            '/api/auth/kosts/:id',
            '/api/auth/kosts/search?q=:q',
            '/api/auth/kosts?page=:page&pagesize=:pagesize',
            '/api/auth/address',
            '/api/auth/address/:id',
            '/api/auth/address/search?q=:q',
            '/api/auth/address?page=:page&pagesize=:pagesize',
            '/api/auth/photo',
            '/api/auth/photo/:id',
            '/api/auth/photo/search?q=:q',
            '/api/auth/photo?page=:page&pagesize=:pagesize',
            '/api/auth/ulasan',
            '/api/auth/ulasan/:id',
            '/api/auth/ulasan/search?q=:q',
            '/api/auth/ulasan?page=:page&pagesize=:pagesize'
        ];

        // Cek apakah endpoint cocok dengan middleware
        const isHandledByThisMiddleware = endpoints.some(endpoint => {
            const pattern = new UrlPattern(endpoint);
            return pattern.match(event.req.url as string);
        });

        if (!isHandledByThisMiddleware) {
            return;
        }

        // Ambil token dari header
        const token = event.req.headers['authorization']?.split(' ')[1];

        if (!token) {
            console.error("Token tidak ditemukan di header Authorization.");
            return sendError(event, createError({
                statusCode: 401,
                statusMessage: 'Unauthorized - Token missing'
            }));
        }

        // Decode token
        const decoded = decodeAccessToken(token);

        if (!decoded || !decoded.id) {
            console.error("Token gagal didecode atau ID tidak ditemukan:", decoded);
            return sendError(event, createError({
                statusCode: 401,
                statusMessage: 'Unauthorized - Invalid token'
            }));
        }

        // Ambil user berdasarkan ID
        try {
            const userId = decoded.id;

            const user = await User.getUserById(userId);

            if (!user) {
                return sendError(event, createError({
                    statusCode: 404,
                    statusMessage: 'User not found'
                }));
            }

            // Tambahkan user ke context auth
            event.context.auth = { user: user };
        } catch (error) {
            return sendError(event, createError({
                statusCode: 500,
                statusMessage: 'Internal Server Error'
            }));
        }
    } catch (e) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error'
        }));
    }
});
