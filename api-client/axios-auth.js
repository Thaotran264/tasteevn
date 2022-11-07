import axios from 'axios';
const ISSERVER = typeof window === "undefined";

function getToken() {
    if (!ISSERVER) {
        let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''

        return eval(token || '')
    }
}
const axiosAuth = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    },
});
axiosAuth.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosAuth;
