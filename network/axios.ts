

import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

instance.defaults.headers.common = { 'Authorization': `Bearer ${localStorage?.getItem("user_token") ?? null}` }

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error.response;
    }
)

export default instance;