import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 5000,
});

const responseBody = (res: AxiosResponse) => res.data.data;

const request = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: object) => instance.post(url, body).then(responseBody),
    patch:  (url: string, body: object) =>  instance.patch(url, body).then(responseBody),
    _delete: (url: string) => instance.delete(url).then(responseBody)
};

export default request;