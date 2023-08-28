import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

instance.defaults.headers.common = { 'Authorization': `Bearer ${localStorage?.getItem("user_token") ?? null}` }

// const userToken = typeof window !== 'undefined' ? localStorage.getItem("user_token") : null;

// // Set up default headers with the user token
// if (userToken) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
// }

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error.response;
    }
)

export default instance;