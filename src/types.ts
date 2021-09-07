export interface IProduct {
    _id?: string;
    name: string;
    category: string;
    description: string;
    store: string;
    price: number;
    image: string;
    __v: number;
}

export interface IAuth {
    _id?: string;
    name: string;
    email: string;
    role: string;
    status: string;
    token: string;
}
