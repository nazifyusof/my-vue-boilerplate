import axios from 'axios';
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig
} from 'axios';

// Type-only interface for API response
export interface ApiResponse<T = unknown> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: InternalAxiosRequestConfig<T>;
}

const http: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://catfact.ninja',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Request interceptor
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('authToken');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
http.interceptors.response.use(
    (response: AxiosResponse<unknown, unknown>) => ({
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        config: response.config
    }),
    (error: AxiosError<unknown, unknown>) => {
        if (error.response) {
            switch (error.response.status) {
                case 401: console.error('Unauthorized'); break;
                case 404: console.error('Not Found'); break;
                case 429: console.error('Too Many Requests'); break;
                default: console.error('API Error', error.message);
            }
        }
        return Promise.reject(error);
    }
);

export default http;