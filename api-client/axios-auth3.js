import axios from 'axios';
const ISSERVER = typeof window === "undefined";

function getToken (){
    if(!ISSERVER) {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        return eval(token || '')
    }
}
const axiosAuth3 = axios.create({
    baseURL: process.env.MERCHANT_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    },
}); 
axiosAuth3.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosAuth3;
