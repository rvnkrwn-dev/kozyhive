import {$Enums} from "~/generated/prisma";
import Role = $Enums.Role;
import UserStatus = $Enums.UserStatus;
import {ActionLog} from "~/server/types/TypesModel";

export interface RegisterRequest {
    email: string,
    full_name: string,
    username: string,
    password: string,
}
export interface RegisterResponse {
    StatusCode: number,
    message: string,
}
export interface LoginRequest {
    email: string,
    password: string,
}
export interface LoginResponse {
    StatusCode: number,
    message: string,
    data: {
        id: number,
        email: string,
        full_name: string,
        username: string,
        image_url: string,
        roles: Role,
        user_status: UserStatus,
    }
}
export interface LogRequest {
    user_id: number;
    action: ActionLog;
    device: string;
    ip_address: string;
    location: string;
    description: string;
}

