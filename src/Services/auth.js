import axios from 'axios';
import FormData from 'form-data';

import { getAccessToken, removeAccessToken, setAccessToken } from '../Common/Utilities/auth.utils';

// const BaseAPIURL = 'https://g4lt-backend.herokuapp.com/api/v1';

const BaseAPIURL = 'http://10.0.2.2:5001/api/v1';

const AuthAPI = {
    login: async (username, password) => {
        await AuthAPI.logout();
        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        const loginURL = `${BaseAPIURL}/auth/login`;
        return axios({
            method: "post",
            url: loginURL,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => {
            const { access_token } = res.data;
            setAccessToken(access_token);
            return res.data;
        }, e => e);
    },
    register: (first, last, username, password, email, phone) => {
        let data = {
            firstname: first,
            lastname: last,
            username: username,
            email: email,
            phone_number: phone,
            password: password,
            is_active:1, // email verificaion passed
        }
        const registerURL = `${BaseAPIURL}/auth/signup`;
        return axios({
            method: "post",
            url: registerURL,
            data: data,
            headers: { "Content-Type": "application/json" },
        })
    },
    getUser: async (username) => {
        const url = `${BaseAPIURL}/users/${username}`;
        return axios.get(url).then(res => res.data, e => e);
    },
    verifyAccesstoken: async () => {
        const accessToken = await getAccessToken();
        const url = `${BaseAPIURL}/auth/verify-access-token/${accessToken}`;
        return axios.get(url).then(res => res.data, e => e);
    },
    logout: async () => {
        await removeAccessToken();
    }
}

export default AuthAPI;