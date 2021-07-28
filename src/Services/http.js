import axios from 'axios';
import FormData from 'form-data';


const BaseAPIURL = 'http://10.0.2.2:5001/api/v1';

const Http = {
    profile: (firstname, lastname, username, number) => {
        let bodyFormData = new FormData();
        bodyFormData.append('firstname', firstname);
        bodyFormData.append('lastname', lastname);
        bodyFormData.append('username', username);
        bodyFormData.append('phone_number', number);
        const profileURL = `${BaseAPIURL}/setting/profile`;
        return axios({
            method: "post",
            url: profileURL,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
    },

    profile: (firstname, lastname, username, number, content, avatar) => {
        console.log('DATA', firstname, lastname, username, number, content);
        let data = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            phone_number: number,
            about_me: content,
            avatar: avatar,
            // is_active:1, // email verificaion passed
        }
        const profileURL = `${BaseAPIURL}/setting/profile`;
        return axios({
            method: "post",
            url: profileURL,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })
    },
    resetPassword: (username, current_password, new_password) => {
        const url = `${BaseAPIURL}/users/${username}/reset-password`;
        return axios({
            method: "patch",
            url: url,
            data: { current_password, new_password },
            headers: { "Content-Type": "application/json" },
        })
    },
    updateAvatar: (image) => {
        const url = `${BaseAPIURL}/users/update/avatar`;
        return axios.patch(url, { image }, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    },
    // datapost: (postMessage) => {

    // }
}

export default Http;