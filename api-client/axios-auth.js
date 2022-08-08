import axios from 'axios';
const ISSERVER = typeof window === "undefined";

function getToken (){
    if(!ISSERVER) {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        return JSON.parse(token ? token : '')
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
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosAuth;
