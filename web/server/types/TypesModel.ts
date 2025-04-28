export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    OWNER = 'OWNER',
}
export enum UserStatus {
    PENDING = 'PENDING',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}
export enum ActionLog {
    Masuk = 'Masuk',
    Keluar = 'Keluar',
    Tambah = 'Tambah',
    Perbarui = 'Perbarui',
    Hapus = 'Hapus',
    Reset = 'Reset'
}
export enum KostType {
    PUTRA = 'PUTRA',
    PUTRI = 'PUTRI',
    CAMPUR = 'CAMPUR',
}
export enum Kamar_mandi {
    NULL = 'NULL',
    DALAM = 'DALAM',
    LUAR = 'LUAR',
}
export enum Kloset_type {
    NULL = 'NULL',
    DUDUK = 'DUDUK',
    JONGKOK = 'JONGKOK',
}
export interface User {
    id: number,
    username: string,
    full_name: string,
    email: string,
    password: string,
    image_url: string,
    roles: Role,
    user_status: UserStatus,
    created_at: Date,
    updated_at: Date
}
export interface Address {
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
}