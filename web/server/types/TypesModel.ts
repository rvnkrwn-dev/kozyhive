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