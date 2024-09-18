export interface ILoginForm {
    email: string;
    password: string
}

export interface Order{
    id: number,
    status: string,
    date: string
}

export interface IRegisterForm extends ILoginForm {
    name: string,
    address: string,
    phone: string
    id?: number,
    orders?: Order[]
}

export interface IUserSession{
    login: boolean, 
    token: string
    user:  IRegisterForm,
}