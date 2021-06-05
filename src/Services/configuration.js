import axios from 'axios';
import { getAccessToken } from '../Common/Utilities/auth.utils';

// Add a request interceptor
axios.interceptors.request.use(async (config) => {
    const url = config.url;
    if (!url.includes('auth') || url.includes('profile')) {
        const at = await getAccessToken();
        config.headers.Authorization = `bearer ${at}`;
    }
    if (url.includes('post')) {
        const at = await getAccessToken();
        config.headers = {
            "Authorization": `bearer ${at}`,
            "Content-Type": "multipart/form-data"
        };
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(async (response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});