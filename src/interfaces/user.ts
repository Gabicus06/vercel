type iRole = "user" | "admin"

export interface IUser{
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: iRole;
    credentialId: Credential

}