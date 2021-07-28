import axios from 'axios';

// const BaseAPIURL = 'https://g4lt-backend.herokuapp.com/api/v1';

const BaseAPIURL = 'http://10.0.2.2:5001/api/v1';

const FeedAPI = {
    public_post: (data) => {
        console.log(data, '--------------');
        const url = `${BaseAPIURL}/posts`;
        
        return axios({
            method: "post",
            url: url,
            data: data,
            headers: { "Content-Type": "application/json" },
        })
    },
    circle_post: (data) => {
        const url = `${BaseAPIURL}/posts`;
        return axios({
            method: "post",
            url: url,
            data: { ...data, is_public: false },
            headers: { "Content-Type": "application/json" },
        })
    },
    getMyPosts: () => {
        const url = `${BaseAPIURL}/posts/me`;
        return axios({
            method: "get",
            url: url
        })
    },
    getHomePosts: () => {
        const url = `${BaseAPIURL}/posts/home`;
        return axios({
            method: "get",
            url: url
        })
    },
    getDiscoverPosts: () => {
        const url = `${BaseAPIURL}/posts/discover`;
        return axios({
            method: "get",
            url: url
        })
    },
    createFollow: (data) => {
        const url = `${BaseAPIURL}/follow?following=${data}`;
        return axios({
            method: "post",
            url: url,
            // data: { ...data },
            headers: { "Content-Type": "application/json" },
        })
    },
    deleteFollow: (data) => {
        const url = `${BaseAPIURL}/follow?following=${data}`;
        return axios({
            method: "delete",
            url: url,
            headers: { "Content-Type": "application/json" },
        })
    },
    createCircle: (data) => {
        const url = `${BaseAPIURL}/circle?circle=${data}`;
        return axios({
            method: "post",
            url: url,
            headers: { "Content-Type": "application/json" },
        })
    },
    getUserdata: (username) => {
        const url = `${BaseAPIURL}/users/` + username;
        return axios({
            method: "get",
            url: url,
        })
    },
    getFollowing: () => {
        const url = `${BaseAPIURL}/follow/me/following`
        return axios({
            method: "get",
            url: url,
        })
    },
    getCircle: () => {
        const url = `${BaseAPIURL}/circle/me/circles`
        return axios({
            method: "get",
            url: url,
        })
    },


    getJoinedUsers: () => {
        const url = `${BaseAPIURL}/circle/me/circle_users`
        return axios({
            method: "get",
            url: url,
        })
    },
    getRequestUsers: () => {
        const url = `${BaseAPIURL}/circle/me/requests_to_me`
        return axios({
            method: "get",
            url: url,
        })
    },
    approvedUser: (username) => {
        const url = `${BaseAPIURL}/circle/approve?username=${username}`
        return axios({
            method: "post",
            url: url,
            headers: { "Content-Type": "application/json" },
        })
    },
    decliendUser: (username) => {
        const url = `${BaseAPIURL}/circle/decline?username=${username}`
        return axios({
            method: "post",
            url: url,
            headers: { "Content-Type": "application/json" },
        })
    },
    setLikes: (id) => {
        const url = `${BaseAPIURL}/likes?post_id=${id}`
        return axios({
            method: "post",
            url: url,
            headers: { "Content-Type": "application/json" },
        })
    },
    getPostDetail: (id) => {
        const url = `${BaseAPIURL}/posts/detail/${id}`
        return axios.get(url)
    },
    createComment: (params) => {
        const url = `${BaseAPIURL}/comments`
        return axios.post(url, params, {
            "headers": {
                "content-type": "application/json",
            },
        })
    },
    updateComment: (params) => {
        const url = `${BaseAPIURL}/comments`
        return axios.patch(url, params, {
            "headers": {
                "content-type": "application/json",
            },
        })
    },
    deleteComment: (id) => {
        console.log('params', id);
        const url = `${BaseAPIURL}/comments`
        return axios({
            method: 'DELETE',
            url: url,
            data: {
                comment_id: id,
            },
            headers: {
                "content-type": "application/json",
            },
        })
    },
    createReply: (body) => {
        const url = `${BaseAPIURL}/replies`
        return axios.post(url, body, {
            "headers": {
                "content-type": "application/json",
            },
        })
    },
    updateReply: (params) => {
        const url = `${BaseAPIURL}/replies`
        return axios.patch(url, params, {
            "headers": {
                "content-type": "application/json",
            },
        })
    },
    deleteReply: (id) => {
        const url = `${BaseAPIURL}/replies`;
        return axios({
            method: 'DELETE',
            url: url,
            data: {
                reply_id: id,
            },
            headers: {
                "content-type": "application/json",
            },
        })
    },
}

export default FeedAPI;