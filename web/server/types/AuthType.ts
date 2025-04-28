import {Role, UserStatus, ActionLog, KostType, Kamar_mandi, Kloset_type} from "~/server/types/TypesModel";

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
    statusCode: number;
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
export interface UpdateRequest {
    email: string,
    full_name: string,
    username: string,
    password: string,
    role: Role;
    user_status: UserStatus;
    image_url: string | null;
}
export interface UpdateResponse {
    email: string,
    full_name: string,
    username: string,
    image_url: string | null;
    roles: Role;
    user_status: UserStatus;
    created_at: Date;
    updated_at: Date;
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
export interface KostRequest {
    slug: string;
    title: string;
    price: number;
    type: KostType; // Menggunakan enum dari TypeScript
    ratings: number;
    pengaturan_khusus: string | null;
    owner_id: number;
    address: {
        street_name: string;
        street_number: string;
        village_name: string;
        city: string;
        state: string;
        zip: string;
        longitude: string;
        latitude: string;
    };
    facilitiesRoom: {
        ac: boolean;
        meja: boolean;
        lemari: boolean;
        kursi: boolean;
        wifi: boolean;
    };
    facilitiesToilet: {
        kamar_mandi: "DALAM" | "LUAR";
        shower: boolean;
        kloset: "DUDUK" | "JONGKOK";
        air_panas: boolean;
    };
}

export interface KostResponse {
    kost: {
        id: number;
        slug: string;
        title: string;
        price: number;
        type: KostType;
        ratings: number | null;
        pengaturan_khusus: string | null;
        owner_id: number;
        created_at: Date;
        updated_at: Date;
    };
    address: {
        id: number;
        street_name: string;
        street_number: string;
        village_name: string;
        city: string;
        state: string;
        zip: string;
        longitude: string;
        latitude: string;
        kost_id: number;
    };
    facilitiesRoom: {
        id: number;
        ac: boolean;
        meja: boolean;
        lemari: boolean;
        kursi: boolean;
        wifi: boolean;
        kost_id: number;
        created_at: Date;
        updated_at: Date;
    };
    facilitiesToilet: {
        id: number;
        kamar_mandi: string;
        shower: boolean;
        kloset: string;
        air_panas: boolean;
        kost_id: number;
        created_at: Date;
        updated_at: Date;
    };
}


export interface FacilitiesRoomRequest {
    ac: boolean;
    meja: boolean;
    lemari: boolean;
    kursi: boolean;
    wifi: boolean;
    kost_id: number; // Foreign key ke tabel Kost
}
export interface FacilitiesRoomResponse {
    id: number;
    ac: boolean;
    meja: boolean;
    lemari: boolean;
    kursi: boolean;
    wifi: boolean;
    kost_id: number;
}
export interface FacilitiesToiletRequest {
    kamar_mandi: Kamar_mandi; // Ex: 'Indoor' atau 'Outdoor'
    shower: boolean;
    kloset: Kloset_type; // Ex: 'Duduk' atau 'Jongkok'
    air_panas: boolean;
    kost_id: number;
}
export interface FacilitiesToiletResponse {
    id: number;
    kamar_mandi: string;
    shower: boolean;
    kloset: string;
    air_panas: boolean;
    kost_id: number;
}
export interface WishlistRequest {
    user_id: number; // ID dari pengguna
    kost_id: number; // ID dari kost
}
export interface WishlistResponse {
    id: number;
    user_id: number;
    kost_id: number;
    created_at: Date;
    updated_at: Date;
}
export interface PhotoRequest {
    image_url: string; // URL gambar
    description?: string; // Deskripsi opsional
    kost_id?: number; // ID kost (opsional)
}
export interface PhotoResponse {
    id: number;
    image_url: string;
    description?: string | null;
    kost_id?: number | null;
    created_at: Date;
    updated_at: Date;
}


