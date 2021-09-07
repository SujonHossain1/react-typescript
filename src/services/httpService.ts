import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    function (config) {
        return {
            ...config,
            headers: {
                Authorization: JSON.parse(
                    JSON.parse(localStorage.getItem('persist:f-valy') || '')
                        ?.auth
                ).data?.token,
            },
        };
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

const responseBody = (res: AxiosResponse) => res.data.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: object) =>
        instance.post(url, body).then(responseBody),
    patch: (url: string, body: object) =>
        instance.patch(url, body).then(responseBody),
    _delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
