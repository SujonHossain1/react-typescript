import { IAuth } from 'types';
import requests from './httpService';

interface ILogin {
    email: string;
    password: string;
}

class AuthService {
    login(body: ILogin): Promise<IAuth> {
        return requests.post('/auth/login', body);
    }
    signUp(body: IAuth): Promise<IAuth> {
        return requests.post('/auth/sign-up', body);
    }
    logout(): Promise<any> {
        return requests.get('/auth/logout');
    }
}

export default new AuthService();
