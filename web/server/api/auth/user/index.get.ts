import { User } from '~/server/models/User';
import {errorHandlingTransfrom} from "~/server/utils/errorHandlingTransfrom";

export default defineEventHandler(async (event) => {
    try {
        const user = event.context.auth?.user;

        if (!user.id || isNaN(user.id)) {
            setResponseStatus(event, 400);
            return {code: 400, message: 'Pengguna tidak valid'};
        }

        const user_get = await User.getUserById(user.id);

        setResponseStatus(event, 200);
        return {
            code: 200,
            message: "Akun pengunna berhasil dikembalikan",
            data: {
                user: user_get
            },
        };
    } catch (error: any) {
        // Menangani error
        const {statusCode, message} = errorHandlingTransfrom(error);
        console.error(error);
        setResponseStatus(event, statusCode);
        return {
            statusCode,
            message,
        }
    }
});