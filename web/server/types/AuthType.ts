import {Role, UserStatus, ActionLog} from "~/server/types/TypesModel";

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
    StatusCode: number;
    message: string;
    access_token: string;
    refresh_token: string;
    data: {
        user: {
            id: number;
            username: string;
            full_name: string;
            email: string;
            image_url: string | null;
            roles: Role; // Harus sesuai dengan `$Enums.Role`
            user_status: UserStatus; // Harus sesuai dengan `$Enums.UserStatus`
            created_at: Date;
            updated_at: Date;
        };
    };
}
export interface LogRequest {
    user_id: number;
    action: ActionLog;
    description: string;
}
export interface AddressRequest {
    street_name: string;
    street_number: string;
    village_name: string;
    city: string;
    state: string;
    zip: string;
    longitude: string;
    latitude: string;
    kost_id: number; // Foreign key untuk relasi dengan Kost
}
export interface AddressResponse {
    id: number;
    street_name: string;
    street_number: string;
    village_name: string;
    city: string;
    state: string;
    zip: string;
    longitude: string;
    latitude: string;
    kost_id: number; // Foreign key
    kost_name: string; // Nama kost yang diambil dari relasi Kost
}
