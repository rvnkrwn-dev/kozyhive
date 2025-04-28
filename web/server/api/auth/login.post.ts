import bcrypt from 'bcryptjs';
import {RefreshToken} from '~/server/models/RefreshToken';
import {User} from '~/server/models/User';
import {generateToken, sendRefreshToken} from '~/server/utils/jwt';
import {LoginRequest} from '~/server/types/AuthType';
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";


export default defineEventHandler(async (event) => {
    try {
        const data: LoginRequest = await readBody(event);

        // Validate input
        if (!data.email || !data.password ) {
            setResponseStatus(event, 400);
            return { code: 400, message: 'Pastikan telah mengisi dengan benar dan lengkap' };
        }

        // Check if user exists
        const user = await User.getUserByEmail(data.email);

        if (!user) {
            setResponseStatus(event, 400);
            return { statusCode: 401, message: 'Kesalahan Kredensial' };
        }

        // Check password
        const isPasswordValid = bcrypt.compareSync(data.password, user.password);
        if (!isPasswordValid) {
            setResponseStatus(event, 401);
            return { statusCode: 401, message: 'Kesalahan Kredensial' };
        }

        // Generate tokens
        const { refreshToken, accessToken } = generateToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        const { password, ...userData } = user;

        // Store refresh token in the database
        await RefreshToken.create(user.id, refreshToken);

        // Set refresh token in cookie
        sendRefreshToken(event, refreshToken);

        // Return access token in response
        const { id, full_name, username, email, created_at, updated_at, role, user_status, image_url } = user;
        return {
            statusCode: 200,
            message: 'Berhasil Masuk!',
            access_token: accessToken,
            refresh_token: refreshToken,
            data: {
                user: {
                    id, full_name, username, email, created_at, updated_at, role, user_status, image_url
                },
            },
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