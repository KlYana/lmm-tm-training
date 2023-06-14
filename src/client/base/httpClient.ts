import axios, { type AxiosRequestConfig } from 'axios';

let csrfToken: string;

export const getCsrfToken = (): string => {
    if (!csrfToken) {
        csrfToken = (document.getElementsByName("__RequestVerificationToken")[0] as HTMLInputElement)?.value || "";
    }
    return csrfToken;
};

const config: AxiosRequestConfig = {
    baseURL: "",
};

const httpClient = axios.create(config);

httpClient.interceptors.response.use(undefined, (error) => {
    console.error("API ERROR", error);
    return Promise.reject(error);
});

export { httpClient };